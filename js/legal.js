document.addEventListener("DOMContentLoaded", () => {
  ppInitLang();

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      ppApplyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
});
