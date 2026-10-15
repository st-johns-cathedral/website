/* ===== FORMS AND VALIDATION ===== */
/* Client-side form validation and spam honeypot handling. */

document.addEventListener("DOMContentLoaded", () => {
  initForms();
});

function initForms() {
  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const honeypot = form.querySelector("[name='website']");
      if (honeypot && honeypot.value) {
        return;
      }

      const result = validateForm(form);
      if (!result.valid) {
        result.messages.forEach((msg) => showError(form, msg));
        return;
      }

      const targetEmail = form.dataset.email;
      if (targetEmail) {
        const name = (form.querySelector('[name="name"]')?.value || "").trim();
        const email = (form.querySelector('[name="email"]')?.value || "").trim();
        const request = (form.querySelector('[name="request"]')?.value || "").trim();

        const subject = `Prayer request from ${name || "website visitor"}`;
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Prayer request:",
          request,
        ].join("\n");

        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        showSuccess(form, "Your email app has been opened so your prayer request can be sent to the parish.");
        form.reset();
        return;
      }

      showSuccess(form, "Thank you. Your request has been submitted.");
      form.reset();
    });
  });
}

function validateForm(form) {
  const fields = form.querySelectorAll("[required]");
  const errors = [];

  fields.forEach((field) => {
    const value = field.value.trim();

    if (!value) {
      errors.push(`${field.name || field.id || "This field"} is required.`);
      return;
    }

    if (field.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errors.push("Please enter a valid email address.");
    }
  });

  return { valid: errors.length === 0, messages: errors };
}

function showError(form, message) {
  const existing = form.querySelector(".form-status");
  if (!existing) {
    const status = document.createElement("p");
    status.className = "form-status error";
    form.appendChild(status);
    status.textContent = message;
    return;
  }
  existing.className = "form-status error";
  existing.textContent = message;
}

function showSuccess(form, message) {
  const existing = form.querySelector(".form-status");
  if (!existing) {
    const status = document.createElement("p");
    status.className = "form-status success";
    form.appendChild(status);
    status.textContent = message;
    return;
  }
  existing.className = "form-status success";
  existing.textContent = message;
}
