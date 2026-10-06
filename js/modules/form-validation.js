import validationRules from "../config/validation.js";
import { getOrCreateErrorElement, removeErrorElement } from "../util/error-helper.js";
import { breakpoints } from "../util/breakpoints.js";

const debounceInterval = 200;
const requestTimeout = 15000;
const genericError = "Something went wrong. Please try again later.";
const networkError = "Network error. Please check your connection and try again.";

let formSubmitted = false;
let isSubmitting = false;

export function initFormValidation() {
  const $form = $(".contact__form");
  if (!$form.length) return;

  $form.attr("novalidate", true);

  const fields = $form.find("input, textarea").not('[name="website"]');
  const validateOnInput = !breakpoints.isMobile();

  fields.each(function () {
    initFieldState($(this));
  });

  fields.on("blur", function () {
    const $field = $(this);
    $field.data("touched", true);
    validateField($field);
  });

  if (validateOnInput) {
    fields.on("input", function () {
      const $field = $(this);

      clearTimeout($field.data("debounceTimer"));

      const timer = setTimeout(() => {
        if ($field.data("touched")) {
          validateField($field);
        }
      }, debounceInterval);

      $field.data("debounceTimer", timer);
    });
  }

  $form.on("submit", async function (event) {
    event.preventDefault();
    if (isSubmitting) return;

    formSubmitted = true;
    hideStatus($form);

    let isFormValid = true;

    fields.each(function () {
      const $field = $(this);
      $field.data("touched", true);

      if (!validateField($field)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      fields.filter(".is-invalid").first().trigger("focus");
      return;
    }

    await submitForm($form, fields);
  });
}

async function submitForm($form, fields) {
  const $submitBtn = $form.find('button[type="submit"]');
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), requestTimeout);

  isSubmitting = true;
  $submitBtn.prop("disabled", true);

  try {
    const response = await fetch($form.attr("action"), {
      method: "POST",
      body: new FormData($form[0]),
      headers: { Accept: "application/json" },
      signal: controller.signal
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      resetForm($form, fields);
      $form.addClass("is-success");
      showStatus($form, "success", result.message);
    } else if (response.status === 422 && result?.errors) {
      showServerErrors(fields, result.errors);
      showStatus($form, "error", result.message);
      fields.filter(".is-invalid").first().trigger("focus");
    } else {
      showStatus($form, "error", result?.message || genericError);
    }
  } catch {
    showStatus($form, "error", networkError);
  } finally {
    clearTimeout(timeoutId);
    isSubmitting = false;
    $submitBtn.prop("disabled", false);
  }
}

function showServerErrors(fields, errors) {
  Object.entries(errors).forEach(([fieldId, message]) => {
    const $field = fields.filter(`#${fieldId}`);
    if (!$field.length) return;

    $field.data("touched", true);
    showError($field, message);
  });
}

function resetForm($form, fields) {
  $form[0].reset();
  formSubmitted = false;

  fields.each(function () {
    const $field = $(this);
    clearError($field);
    initFieldState($field);
  });
}

function showStatus($form, type, message) {
  $form
    .find(".contact__status")
    .removeClass("contact__status--success contact__status--error")
    .addClass(`contact__status--${type}`)
    .text(message)
    .prop("hidden", false);
}

function hideStatus($form) {
  $form.removeClass("is-success");
  $form
    .find(".contact__status")
    .prop("hidden", true)
    .removeClass("contact__status--success contact__status--error")
    .text("");
}

function validateField($field) {
  const touched = $field.data("touched");

  if (!formSubmitted && !touched) {
    return true;
  }

  const value = $field.val().trim();
  const fieldId = $field.attr("id");
  const rules = validationRules[fieldId];

  clearError($field);

  if (!rules) {
    return true;
  }

  if (!isRequiredValid(value, rules)) {
    showError($field, rules.message || validationRules.default.message);
    return false;
  }

  if (!value) {
    return true;
  }

  if (!isMaxLengthValid(value, rules)) {
    showError(
      $field,
      rules.maxLengthMessage || `Please use ${rules.maxLength} characters or fewer.`
    );
    return false;
  }

  if (!isRegexValid(value, rules)) {
    showError($field, rules.message);
    return false;
  }

  markValid($field);

  return true;
}

function isRequiredValid(value, rules) {
  return !rules.required || value.length > 0;
}

function isMaxLengthValid(value, rules) {
  return !rules.maxLength || value.length <= rules.maxLength;
}

function isRegexValid(value, rules) {
  return !rules.regex || rules.regex.test(value);
}

function initFieldState($field) {
  $field.data("touched", false);
}

function showError($field, message) {
  $field.addClass("is-invalid").removeClass("is-valid").attr("aria-invalid", "true");

  const $error = getOrCreateErrorElement($field, message);

  $field.attr("aria-describedby", $error.attr("id"));
}

function clearError($field) {
  $field
    .removeClass("is-invalid is-valid")
    .removeAttr("aria-invalid")
    .removeAttr("aria-describedby");
  removeErrorElement($field);
}

function markValid($field) {
  $field
    .removeClass("is-invalid")
    .addClass("is-valid")
    .attr("aria-invalid", "false");
}