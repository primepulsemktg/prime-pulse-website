document.addEventListener("DOMContentLoaded", () => {
  ppInitLang();

  // Selector de idioma
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      ppApplyLang(btn.getAttribute("data-lang-btn"));
    });
  });

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

  // Toggle de región de precios (USA / Latam)
  const pricingSection = document.querySelector(".pricing");
  if (pricingSection) {
    pricingSection.querySelectorAll("[data-region-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const region = btn.getAttribute("data-region-btn");
        pricingSection.setAttribute("data-region", region);
        pricingSection.querySelectorAll("[data-region-btn]").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
        });
      });
    });
  }

  // Año dinámico en el footer
  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Formulario de contacto — envía los datos a Web3Forms
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const statusEl = document.getElementById("form-status");
    const submitLabel = submitBtn.textContent;

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Honeypot: si un bot marcó este campo oculto, se descarta el envío en silencio
      if (contactForm.elements["botcheck"].checked) return;

      submitBtn.disabled = true;
      submitBtn.textContent = ppT("contact.form.sending");
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
          statusEl.textContent = ppT("contact.form.success");
          statusEl.className = "form-status is-success";
          contactForm.reset();
        } else {
          throw new Error(result.message || "Web3Forms error");
        }
      } catch (err) {
        statusEl.textContent = ppT("contact.form.error");
        statusEl.className = "form-status is-error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = submitLabel;
      }
    });
  }
});
