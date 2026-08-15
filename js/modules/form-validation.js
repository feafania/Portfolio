import validationRules from "../config/validation.js";
import { getOrCreateErrorElement, removeErrorElement } from "../util/error-helper.js";
import { breakpoints } from "../util/breakpoints.js";

const debounceInterval = 200;

let formSubmitted = false;

export function initFormValidation() {
  const $form = $(".contact__form");
  if (!$form.length) return;

  $form.attr("novalidate", true);

  const fields = $form.find("input, textarea");
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
      const currentValue = $field.val().trim();
      const initialValue = $field.data("initialValue");
      $field.data("dirty", currentValue !== initialValue);

      clearTimeout($field.data("debounceTimer"));
      const timer = setTimeout(() => {
        if ($field.data("touched")) {
          validateField($(this));
        }
      }, debounceInterval);

      $field.data("debounceTimer", timer);
    });
  }

  $form.on("submit", function (event) {
    event.preventDefault();

    formSubmitted = true;

    const $submitBtn = $form.find('button[type="submit"]');
    $submitBtn.prop("disabled", true);

    let isFormValid = true;

    fields.each(function () {
      const $field = $(this);
      $field.data("touched", true);

      if (!validateField($field)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      $form.addClass("is-success");
    } else {
      fields.filter(".is-invalid").first().focus();
    }

    $submitBtn.prop("disabled", false);
  });
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
    showError(
      $field,
      rules.message || validationRules.default.message
    );
    return false;
  }

  if (!value) {
    return true;
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

function isRegexValid(value, rules) {
  return !rules.regex || rules.regex.test(value);
}

function initFieldState($field) {
  $field.data({
    touched: false,
    dirty: false,
    initialValue: $field.val().trim()
  });
}

function showError($field, message) {
  $field.addClass("is-invalid").attr("aria-invalid", "true");

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
