const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegex = /((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|([0-9]{3})|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))/;
let formSubmitted = false;

export function initFormValidation() {
  const $form = $(".contact__form");
  if (!$form.length) return;

  $form.attr("novalidate", true);

  const fields = $form.find("input, textarea");

  fields.on("blur", function () {
    validateField($(this));
  });

  fields.on("input", function () {
    if ($(this).hasClass("is-invalid")) {
      validateField($(this));
    }
  });

  $form.on("submit", function (event) {
    event.preventDefault();
    formSubmitted = true;

    const $submitBtn = $form.find('button[type="submit"]');
    $submitBtn.prop("disabled", true);

    let isFormValid = true;

    fields.each(function () {
      if (!validateField($(this))) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // submission logic.
      console.log("Form submitted");
    } else {
      console.log("Form is not valid");
    }
    $submitBtn.prop("disabled", false);
  });
}

function validateField($field) {
  if (!formSubmitted && !$field.is(":focus")) {
    return true;
  }

  const value = $field.val().trim();
  const fieldId = $field.attr("id");

  clearError($field);

  if ($field.prop("required") && !value) {
    showError($field, "This field is required!");
    return false;
  }

  if (!value) {
    return true;
  }

  if (fieldId === "email" && !emailRegex.test(value)) {
    showError($field, "Please enter a valid email address.");
    return false;
  }

  if (fieldId === "phone" && !phoneRegex.test(value)) {
    showError($field, "Please enter a valid phone number.");
    return false;
  }

  markValid($field);

  return true;
}

function showError($field, message) {
  $field.addClass("is-invalid").attr("aria-invalid", "true");

  let $error = $(`#${$field.attr("id")}-error`);

  if (!$error.length) {
    $error = $("<span>", {
      id: `${$field.attr("id")}-error`,
      class: "contact__error",
      role: "alert"
    });

    $field.after($error);
  }

  $error.text(message);

  $field.attr("aria-describedby", $error.attr("id"));
}

function clearError($field) {
  $field.removeClass("is-invalid is-valid").removeAttr("aria-invalid").removeAttr("aria-describedby");
  $(`#${$field.attr("id")}-error`).remove();
}

function markValid($field) {
  $field.removeClass("is-invalid").addClass("is-valid").attr("aria-invalid", "false");
}