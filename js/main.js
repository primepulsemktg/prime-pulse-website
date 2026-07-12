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

  // Formulario de contacto — abre el cliente de correo con los datos
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.elements["name"].value.trim();
      const email = contactForm.elements["email"].value.trim();
      const message = contactForm.elements["message"].value.trim();

      const subject = encodeURIComponent(`Nueva consulta de ${name} — Prime Pulse`);
      const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);

      window.location.href = `mailto:hello@primepulsemktg.com?subject=${subject}&body=${body}`;
    });
  }
});
