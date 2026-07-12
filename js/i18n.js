// Diccionario bilingüe — Prime Pulse
// Cada clave corresponde a un data-i18n en el HTML.
const PP_I18N = {
  es: {
    "nav.services": "Servicios",
    "nav.pricing": "Precios",
    "nav.cases": "Casos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Agenda una consultoría",

    "hero.tagline": "Crecimiento basado en datos, resultados reales.",
    "hero.subtext": "Somos una agencia de marketing digital que combina analítica avanzada y estrategia creativa para ayudar a marcas de Estados Unidos y Latinoamérica a crecer con decisiones basadas en datos.",
    "hero.cta": "Agenda una consultoría",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Servicios",
    "services.subtitle": "Cuatro plataformas, un solo objetivo: convertir datos en crecimiento medible.",
    "services.ga4.title": "Google Analytics 4",
    "services.ga4.desc": "Configuración, migración y auditoría de GA4 para que cada decisión se base en datos limpios y confiables.",
    "services.hubspot.title": "HubSpot",
    "services.hubspot.desc": "Implementación de CRM, automatizaciones y flujos de nutrición que alinean marketing y ventas.",
    "services.ads.title": "Google Ads",
    "services.ads.desc": "Campañas de búsqueda, display y shopping optimizadas para maximizar retorno sobre inversión.",
    "services.meta.title": "Meta Ads",
    "services.meta.desc": "Estrategia paga en Facebook e Instagram con creatividades y segmentación basadas en datos.",

    "pricing.eyebrow": "Precios",
    "pricing.title": "Planes simples y transparentes",
    "pricing.subtitle": "Elige la región de tu negocio para ver precios en tu moneda.",
    "pricing.perMonth": "/mes",
    "pricing.popular": "Más elegido",
    "pricing.starter.name": "Starter",
    "pricing.starter.f1": "Configuración y auditoría de GA4",
    "pricing.starter.f2": "Gestión de 1 canal de Ads (Google o Meta)",
    "pricing.starter.f3": "Reporte mensual de resultados",
    "pricing.cta.starter": "Elegir Starter",
    "pricing.growth.name": "Growth",
    "pricing.growth.f1": "Todo lo de Starter",
    "pricing.growth.f2": "Gestión de Google Ads + Meta Ads",
    "pricing.growth.f3": "Automatizaciones en HubSpot",
    "pricing.growth.f4": "Reportes quincenales + llamada de estrategia",
    "pricing.cta.growth": "Elegir Growth",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Todo lo de Growth",
    "pricing.premium.f2": "Estrategia multicanal personalizada",
    "pricing.premium.f3": "Optimización continua y pruebas A/B",
    "pricing.premium.f4": "Soporte prioritario y reportes semanales",
    "pricing.cta.premium": "Elegir Premium",
    "pricing.note": "Producción de video disponible como add-on.",

    "cases.eyebrow": "Casos de clientes",
    "cases.title": "Marcas que confían en nosotros",
    "cases.subtitle": "Trabajamos con negocios en Estados Unidos y Latinoamérica.",
    "cases.primebest.location": "Ecuador · Latam",
    "cases.primebest.desc": "Distribuidora de firmas electrónicas. Implementamos GA4 y HubSpot para centralizar sus datos de marketing y ventas, y acompañamos su estrategia de Google Ads.",
    "cases.zoomin.location": "Marietta, GA · USA",
    "cases.zoomin.desc": "Servicio móvil de grooming para mascotas. Gestionamos su presencia en Meta Ads y Google Ads para atraer clientes locales de forma constante.",

    "about.eyebrow": "Nosotros",
    "about.title": "Datos con estrategia, no solo reportes",
    "about.story": "Prime Pulse nació de la idea de que el marketing digital debe medirse con la misma rigurosidad con la que se planea. Somos un equipo pequeño y especializado que trabaja con marcas de Estados Unidos y Latinoamérica, combinando analítica avanzada con estrategia creativa para que cada decisión esté respaldada por datos reales.",
    "about.certs.title": "Certificaciones oficiales",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos de tu próximo crecimiento",
    "contact.subtitle": "Cuéntanos sobre tu negocio y te responderemos en menos de 48 horas.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Gracias! Tu mensaje fue enviado. Te responderemos pronto.",
    "contact.form.error": "Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos directamente.",
    "contact.alt.text": "O escríbenos directamente a",

    "footer.terms": "Términos y condiciones",
    "footer.privacy": "Aviso de privacidad",
    "footer.rights": "Todos los derechos reservados.",

    "legal.back": "← Volver al inicio",
    "legal.updated": "Última actualización: 12 de julio de 2026",

    "terms.title": "Términos y condiciones",
    "terms.s1.h": "1. Aceptación de los términos",
    "terms.s1.b": "Al acceder o utilizar el sitio web de Prime Pulse (\"el Sitio\") o contratar nuestros servicios, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, te pedimos no utilizar el Sitio ni nuestros servicios.",
    "terms.s2.h": "2. Descripción de los servicios",
    "terms.s2.b": "Prime Pulse ofrece servicios de marketing digital, incluyendo configuración y análisis en Google Analytics 4, implementación y automatización en HubSpot, y gestión de campañas en Google Ads y Meta Ads, entre otros servicios relacionados. El alcance específico de cada servicio se define en la propuesta o contrato individual acordado con cada cliente.",
    "terms.s3.h": "3. Planes y pagos",
    "terms.s3.b": "Los precios publicados en el Sitio son referenciales y pueden variar según el alcance del proyecto. Los pagos se facturan de forma mensual salvo que se acuerde lo contrario por escrito. La falta de pago puede resultar en la suspensión de los servicios.",
    "terms.s4.h": "4. Uso del sitio",
    "terms.s4.b": "Te comprometes a utilizar el Sitio únicamente para fines lícitos y de acuerdo con estos Términos. No debes intentar acceder sin autorización a ninguna parte del Sitio, sus sistemas o redes relacionadas.",
    "terms.s5.h": "5. Propiedad intelectual",
    "terms.s5.b": "Todo el contenido del Sitio (textos, diseños, logotipos, gráficos) es propiedad de Prime Pulse o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. Los materiales creativos desarrollados para un cliente específico se rigen por lo acordado en el contrato de servicios correspondiente.",
    "terms.s6.h": "6. Confidencialidad",
    "terms.s6.b": "Ambas partes se comprometen a mantener la confidencialidad de la información comercial, técnica y financiera compartida durante la prestación de los servicios, salvo que su divulgación sea requerida por ley.",
    "terms.s7.h": "7. Limitación de responsabilidad",
    "terms.s7.b": "Prime Pulse no garantiza resultados específicos de campañas publicitarias o de marketing, ya que estos dependen de factores fuera de nuestro control (comportamiento del mercado, plataformas de terceros, presupuesto, entre otros). En la medida permitida por la ley, Prime Pulse no será responsable por daños indirectos, incidentales o consecuentes derivados del uso del Sitio o de los servicios.",
    "terms.s8.h": "8. Servicios de terceros",
    "terms.s8.b": "Nuestros servicios pueden depender de plataformas de terceros (Google, Meta, HubSpot, entre otras). Prime Pulse no controla ni es responsable de las políticas, cambios o interrupciones de dichas plataformas.",
    "terms.s9.h": "9. Terminación",
    "terms.s9.b": "Cualquiera de las partes puede terminar la relación de servicios de acuerdo con lo establecido en el contrato individual. Prime Pulse se reserva el derecho de suspender el acceso al Sitio en caso de uso indebido.",
    "terms.s10.h": "10. Ley aplicable",
    "terms.s10.b": "Estos Términos se rigen por las leyes del país en el que Prime Pulse opere con el cliente correspondiente, según lo establecido en el contrato individual.",
    "terms.s11.h": "11. Cambios a estos términos",
    "terms.s11.b": "Podemos actualizar estos Términos en cualquier momento. Los cambios entrarán en vigencia desde su publicación en el Sitio.",
    "terms.s12.h": "12. Contacto",
    "terms.s12.b": "Si tienes preguntas sobre estos Términos, escríbenos a",

    "privacy.title": "Aviso de privacidad",
    "privacy.s1.h": "1. Información que recopilamos",
    "privacy.s1.b": "Recopilamos la información que nos proporcionas directamente a través de nuestro formulario de contacto: nombre, correo electrónico y el contenido de tu mensaje. También podemos recopilar datos técnicos básicos de navegación (como tipo de navegador o páginas visitadas) a través de herramientas de analítica.",
    "privacy.s2.h": "2. Cómo usamos tu información",
    "privacy.s2.b": "Usamos tu información para responder tus consultas, brindarte información sobre nuestros servicios y, si nos autorizas, contactarte con fines comerciales. No vendemos tu información personal a terceros.",
    "privacy.s3.h": "3. Cómo compartimos tu información",
    "privacy.s3.b": "Podemos compartir información con proveedores de servicios que nos ayudan a operar el Sitio (por ejemplo, herramientas de analítica o de correo electrónico), siempre bajo obligaciones de confidencialidad. No compartimos tu información con terceros para fines de marketing ajenos a Prime Pulse sin tu consentimiento.",
    "privacy.s4.h": "4. Cookies y tecnologías similares",
    "privacy.s4.b": "Este Sitio puede utilizar cookies y herramientas de analítica (como Google Analytics 4) para entender cómo se usa el Sitio y mejorar la experiencia. Puedes configurar tu navegador para rechazar cookies, aunque esto podría afectar algunas funciones del Sitio.",
    "privacy.s5.h": "5. Seguridad de los datos",
    "privacy.s5.b": "Implementamos medidas razonables para proteger tu información contra accesos no autorizados, pérdida o alteración. Sin embargo, ningún sistema es 100% seguro.",
    "privacy.s6.h": "6. Retención de datos",
    "privacy.s6.b": "Conservamos tu información solo durante el tiempo necesario para cumplir con los fines descritos en este aviso o según lo requiera la ley.",
    "privacy.s7.h": "7. Tus derechos",
    "privacy.s7.b": "Puedes solicitarnos en cualquier momento acceder, corregir o eliminar tu información personal, escribiéndonos a hello@primepulsemktg.com. Responderemos tu solicitud dentro de un plazo razonable.",
    "privacy.s8.h": "8. Menores de edad",
    "privacy.s8.b": "Nuestros servicios están dirigidos a empresas y profesionales, no a menores de edad. No recopilamos conscientemente información de menores de edad.",
    "privacy.s9.h": "9. Cambios a este aviso",
    "privacy.s9.b": "Podemos actualizar este Aviso de Privacidad periódicamente. La fecha de \"última actualización\" al inicio de este documento indica la versión vigente.",
    "privacy.s10.h": "10. Contacto",
    "privacy.s10.b": "Si tienes preguntas sobre este Aviso de Privacidad o sobre el tratamiento de tus datos, escríbenos a"
  },
  en: {
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.cases": "Case studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Book a consultation",

    "hero.tagline": "Data-driven growth, real results.",
    "hero.subtext": "We're a digital marketing agency blending advanced analytics with creative strategy to help brands across the US and Latin America grow through data-driven decisions.",
    "hero.cta": "Book a consultation",

    "services.eyebrow": "What we do",
    "services.title": "Services",
    "services.subtitle": "Four platforms, one goal: turning data into measurable growth.",
    "services.ga4.title": "Google Analytics 4",
    "services.ga4.desc": "GA4 setup, migration and audits so every decision is backed by clean, reliable data.",
    "services.hubspot.title": "HubSpot",
    "services.hubspot.desc": "CRM implementation, automations and nurture flows that align marketing and sales.",
    "services.ads.title": "Google Ads",
    "services.ads.desc": "Search, display and shopping campaigns optimized to maximize return on investment.",
    "services.meta.title": "Meta Ads",
    "services.meta.desc": "Paid strategy on Facebook and Instagram with data-driven creative and targeting.",

    "pricing.eyebrow": "Pricing",
    "pricing.title": "Simple, transparent plans",
    "pricing.subtitle": "Choose your business region to see pricing in your currency.",
    "pricing.perMonth": "/mo",
    "pricing.popular": "Most popular",
    "pricing.starter.name": "Starter",
    "pricing.starter.f1": "GA4 setup and audit",
    "pricing.starter.f2": "Management of 1 Ads channel (Google or Meta)",
    "pricing.starter.f3": "Monthly performance report",
    "pricing.cta.starter": "Choose Starter",
    "pricing.growth.name": "Growth",
    "pricing.growth.f1": "Everything in Starter",
    "pricing.growth.f2": "Google Ads + Meta Ads management",
    "pricing.growth.f3": "HubSpot automations",
    "pricing.growth.f4": "Bi-weekly reports + monthly strategy call",
    "pricing.cta.growth": "Choose Growth",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Everything in Growth",
    "pricing.premium.f2": "Custom multi-channel strategy",
    "pricing.premium.f3": "Continuous optimization and A/B testing",
    "pricing.premium.f4": "Priority support and weekly reports",
    "pricing.cta.premium": "Choose Premium",
    "pricing.note": "Video production available as an add-on.",

    "cases.eyebrow": "Case studies",
    "cases.title": "Brands that trust us",
    "cases.subtitle": "We work with businesses across the US and Latin America.",
    "cases.primebest.location": "Ecuador · Latam",
    "cases.primebest.desc": "Electronic signature distributor. We implemented GA4 and HubSpot to centralize their marketing and sales data, and supported their Google Ads strategy.",
    "cases.zoomin.location": "Marietta, GA · USA",
    "cases.zoomin.desc": "Mobile pet grooming service. We manage their Meta Ads and Google Ads presence to consistently attract local customers.",

    "about.eyebrow": "About us",
    "about.title": "Data with strategy, not just reports",
    "about.story": "Prime Pulse was born from the idea that digital marketing should be measured with the same rigor with which it's planned. We're a small, specialized team working with brands across the US and Latin America, blending advanced analytics with creative strategy so every decision is backed by real data.",
    "about.certs.title": "Official certifications",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your next growth phase",
    "contact.subtitle": "Tell us about your business and we'll get back to you within 48 hours.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Thanks! Your message was sent. We'll get back to you soon.",
    "contact.form.error": "There was a problem sending your message. Please try again or email us directly.",
    "contact.alt.text": "Or email us directly at",

    "footer.terms": "Terms & conditions",
    "footer.privacy": "Privacy notice",
    "footer.rights": "All rights reserved.",

    "legal.back": "← Back to home",
    "legal.updated": "Last updated: July 12, 2026",

    "terms.title": "Terms & Conditions",
    "terms.s1.h": "1. Acceptance of terms",
    "terms.s1.b": "By accessing or using the Prime Pulse website (\"the Site\") or engaging our services, you accept these Terms & Conditions in full. If you do not agree, please do not use the Site or our services.",
    "terms.s2.h": "2. Description of services",
    "terms.s2.b": "Prime Pulse provides digital marketing services, including Google Analytics 4 setup and analysis, HubSpot implementation and automation, and Google Ads and Meta Ads campaign management, among other related services. The specific scope of each service is defined in the individual proposal or contract agreed with each client.",
    "terms.s3.h": "3. Plans and payments",
    "terms.s3.b": "Prices published on the Site are for reference and may vary depending on project scope. Payments are billed monthly unless otherwise agreed in writing. Failure to pay may result in suspension of services.",
    "terms.s4.h": "4. Use of the site",
    "terms.s4.b": "You agree to use the Site only for lawful purposes and in accordance with these Terms. You must not attempt to gain unauthorized access to any part of the Site, its systems, or related networks.",
    "terms.s5.h": "5. Intellectual property",
    "terms.s5.b": "All content on the Site (text, designs, logos, graphics) is owned by Prime Pulse or its licensors and is protected by applicable intellectual property laws. Creative materials developed for a specific client are governed by the corresponding services contract.",
    "terms.s6.h": "6. Confidentiality",
    "terms.s6.b": "Both parties agree to keep confidential any commercial, technical, and financial information shared during the provision of services, unless disclosure is required by law.",
    "terms.s7.h": "7. Limitation of liability",
    "terms.s7.b": "Prime Pulse does not guarantee specific results from advertising or marketing campaigns, as these depend on factors outside our control (market behavior, third-party platforms, budget, among others). To the extent permitted by law, Prime Pulse will not be liable for indirect, incidental, or consequential damages arising from use of the Site or services.",
    "terms.s8.h": "8. Third-party services",
    "terms.s8.b": "Our services may depend on third-party platforms (Google, Meta, HubSpot, among others). Prime Pulse does not control and is not responsible for the policies, changes, or outages of those platforms.",
    "terms.s9.h": "9. Termination",
    "terms.s9.b": "Either party may terminate the services relationship as set out in the individual contract. Prime Pulse reserves the right to suspend access to the Site in cases of misuse.",
    "terms.s10.h": "10. Governing law",
    "terms.s10.b": "These Terms are governed by the laws of the country in which Prime Pulse operates with the corresponding client, as set out in the individual contract.",
    "terms.s11.h": "11. Changes to these terms",
    "terms.s11.b": "We may update these Terms at any time. Changes take effect once published on the Site.",
    "terms.s12.h": "12. Contact",
    "terms.s12.b": "If you have questions about these Terms, email us at",

    "privacy.title": "Privacy Notice",
    "privacy.s1.h": "1. Information we collect",
    "privacy.s1.b": "We collect the information you provide directly through our contact form: name, email address, and the content of your message. We may also collect basic technical browsing data (such as browser type or pages visited) through analytics tools.",
    "privacy.s2.h": "2. How we use your information",
    "privacy.s2.b": "We use your information to respond to your inquiries, provide information about our services, and, if you authorize us, contact you for commercial purposes. We do not sell your personal information to third parties.",
    "privacy.s3.h": "3. How we share your information",
    "privacy.s3.b": "We may share information with service providers that help us operate the Site (for example, analytics or email tools), always under confidentiality obligations. We do not share your information with third parties for marketing purposes unrelated to Prime Pulse without your consent.",
    "privacy.s4.h": "4. Cookies and similar technologies",
    "privacy.s4.b": "This Site may use cookies and analytics tools (such as Google Analytics 4) to understand how the Site is used and improve the experience. You can set your browser to reject cookies, though this may affect some features of the Site.",
    "privacy.s5.h": "5. Data security",
    "privacy.s5.b": "We implement reasonable measures to protect your information against unauthorized access, loss, or alteration. However, no system is 100% secure.",
    "privacy.s6.h": "6. Data retention",
    "privacy.s6.b": "We retain your information only for as long as necessary to fulfill the purposes described in this notice or as required by law.",
    "privacy.s7.h": "7. Your rights",
    "privacy.s7.b": "You may request to access, correct, or delete your personal information at any time by emailing us at hello@primepulsemktg.com. We will respond to your request within a reasonable timeframe.",
    "privacy.s8.h": "8. Minors",
    "privacy.s8.b": "Our services are aimed at businesses and professionals, not minors. We do not knowingly collect information from minors.",
    "privacy.s9.h": "9. Changes to this notice",
    "privacy.s9.b": "We may update this Privacy Notice periodically. The \"last updated\" date at the top of this document indicates the current version.",
    "privacy.s10.h": "10. Contact",
    "privacy.s10.b": "If you have questions about this Privacy Notice or how we handle your data, email us at"
  }
};

const PP_DEFAULT_LANG = "es";
let ppCurrentLang = PP_DEFAULT_LANG;

// Devuelve la traducción de `key` en el idioma activo (para usar desde JS, no solo el DOM)
function ppT(key) {
  const dict = PP_I18N[ppCurrentLang] || PP_I18N[PP_DEFAULT_LANG];
  return dict[key] || key;
}

function ppApplyLang(lang) {
  const dict = PP_I18N[lang] || PP_I18N[PP_DEFAULT_LANG];
  ppCurrentLang = PP_I18N[lang] ? lang : PP_DEFAULT_LANG;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("pp_lang", lang);
}

function ppInitLang() {
  const saved = localStorage.getItem("pp_lang");
  const browserLang = (navigator.language || "es").slice(0, 2);
  const initial = saved || (PP_I18N[browserLang] ? browserLang : PP_DEFAULT_LANG);
  ppApplyLang(initial);
}
