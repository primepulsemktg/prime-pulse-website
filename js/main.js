document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Año dinámico en el footer
  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Formulario de contacto — envía los datos a Web3Forms
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const statusEl = document.getElementById("form-status");
    const idleLabel = submitBtn.dataset.idleLabel || submitBtn.textContent;
    const sendingLabel = submitBtn.dataset.sendingLabel || idleLabel;

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Honeypot: si un bot marcó este campo oculto, se descarta el envío en silencio
      if (contactForm.elements["botcheck"].checked) return;

      submitBtn.disabled = true;
      submitBtn.textContent = sendingLabel;
      statusEl.textContent = "";
      statusEl.className = "form-status";

      try {
        const formData = new FormData(contactForm);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        const result = await res.json();

        if (result.success) {
          statusEl.textContent = statusEl.dataset.successMsg;
          statusEl.className = "form-status is-success";
          contactForm.reset();
        } else {
          throw new Error(result.message || "Web3Forms error");
        }
      } catch (err) {
        statusEl.textContent = statusEl.dataset.errorMsg;
        statusEl.className = "form-status is-error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = idleLabel;
      }
    });
  }
});
