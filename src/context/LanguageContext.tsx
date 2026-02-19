"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Read saved language after hydration to avoid EN → ES flash
  useEffect(() => {
    const saved = localStorage.getItem("lazo-lang") as Language | null;
    if (saved === "en" || saved === "es") setLang(saved);
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lazo-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: Record<string, unknown> | string = translations[lang];
    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = value[k] as Record<string, unknown> | string;
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div
        className={`transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations: Record<Language, Record<string, unknown>> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      callNow: "Call Now",
      getAQuote: "Get a Quote",
    },
    hero: {
      title: "Your Vision, Our Craft.",
      subtitle: "From kitchen remodels to commercial build outs, we bring your vision to life with expert craftsmanship and honest pricing.",
      cta: "Get a Free Estimate",
      secondary: "View Our Work",
    },
    services: {
      heading: "What We Do",
      subtitle: "Residential and commercial construction services built on 20+ years of hands on experience.",
      residential: {
        title: "Residential Remodeling",
        description: "Kitchen and bathroom remodels, room additions, and whole home renovations that transform your living space.",
      },
      painting: {
        title: "Interior & Exterior Painting",
        description: "Professional painting services that protect and beautify.",
      },
      commercial: {
        title: "Commercial Remodeling",
        description: "Retail, restaurant, and office renovations with minimal disruption.",
      },
      buildouts: {
        title: "Commercial Build Outs",
        description: "Transform shell spaces into functional business environments.",
      },
      viewAll: "View All Services",
    },
    howItWorks: {
      heading: "How It Works",
      subtitle: "From first call to final walkthrough, here's what to expect.",
      step1: {
        title: "Contact Us",
        description: "Give us a call or fill out our online form. Tell us about your project and we'll get back to you within 24 hours.",
      },
      step2: {
        title: "Free Consultation",
        description: "We visit your property, discuss your vision, assess the scope, and answer all your questions. No obligation.",
      },
      step3: {
        title: "Detailed Proposal",
        description: "Receive a transparent, itemized quote with clear timelines, material specs, and no hidden fees.",
      },
      step4: {
        title: "Construction Begins",
        description: "Our team gets to work, keeping you updated every step of the way until your project is complete.",
      },
      ready: "Ready to get started? Let's talk about your project.",
      cta: "Start Your Project",
    },
    whyUs: {
      heading: "Why Choose Us",
      experience: { title: "20+ Years Experience", description: "Two decades of hands on construction expertise." },
      licensed: { title: "Licensed & Insured", description: "Fully licensed and insured for your protection." },
      local: { title: "Local & Trusted", description: "Proudly serving Texas communities since day one." },
      quality: { title: "Quality Guaranteed", description: "Craftsmanship that stands the test of time." },
    },
    testimonials: {
      heading: "What Our Clients Say",
    },
    cta: {
      heading: "Ready to Start Your Project?",
      subtitle: "Contact us today for a free consultation and estimate.",
      getInTouch: "Get in Touch",
      callNow: "Call Now",
    },
    footer: {
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      serviceAreas: "Service Areas",
      greaterAustin: "Greater Austin",
      greaterHouston: "Greater Houston",
      centralTexas: "Central Texas",
      southeastTexas: "Southeast Texas",
      rights: "ALL RIGHTS RESERVED",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    // Mobile Menu
    mobileMenu: {
      title: "Menu",
      callUs: "Call us directly:",
      getAQuote: "Get a Quote",
    },
    // Services Page
    servicesPage: {
      breadcrumb: "Services",
      heading: "Our Services",
      subtitle: "From kitchen remodels to commercial build outs, we deliver quality construction across Texas.",
      residentialTitle: "Residential Services",
      residentialDesc: "Kitchen remodels, bathroom renovations, room additions, and more.",
      commercialTitle: "Commercial Services",
      commercialDesc: "Office build outs, retail renovations, commercial painting, and more.",
      learnMore: "Learn More",
    },
    // Residential Sub-Page
    residentialPage: {
      breadcrumb: "Residential",
      heading: "Residential Services",
      subtitle: "Transform your home with expert craftsmanship and attention to detail.",
      ctaHeadline: "Ready to Transform Your Home?",
      ctaButton: "Contact Us",
      kitchen: {
        title: "Kitchen Remodels",
        description: "Complete gut renovations, cabinet refacing, countertop upgrades, backsplash installation, and custom island builds. We work with you on layout, materials, and finishes to build a kitchen that fits how you actually use it.",
      },
      bathroom: {
        title: "Bathroom Remodels",
        description: "New tile, updated fixtures, custom vanities, walk in showers, and full layout changes. Whether it's a small powder room refresh or a complete master bath gut, we handle the plumbing coordination, waterproofing, and finish work.",
      },
      addition: {
        title: "Room Additions",
        description: "When you need more space, we build additions that blend with your existing home. Extra bedrooms, home offices, sunrooms, and expanded living areas. We handle foundation, framing, roofing tie ins, and all interior finishes so the new space feels like it was always there.",
      },
      painting: {
        title: "Interior & Exterior Painting",
        description: "Full interior and exterior painting for homes of all sizes. We take prep seriously, including pressure washing, scraping, caulking, and priming, so the finish lasts. We use premium paints and keep clean lines on trim, ceilings, and accent walls.",
      },
      drywall: {
        title: "Drywall Installation & Repair",
        description: "New construction hanging, taping, and finishing as well as patch repairs, water damage restoration, and retexturing. We deliver smooth walls, clean corners, and surfaces that are ready for paint or wallpaper.",
      },
      general: {
        title: "General Residential Remodeling",
        description: "Full-home renovations, flooring installation, trim and baseboard work, door replacements, and everything in between. One crew, one point of contact, and a clean jobsite from start to finish.",
      },
    },
    // Commercial Sub-Page
    commercialPage: {
      breadcrumb: "Commercial",
      heading: "Commercial Services",
      subtitle: "Professional construction services for businesses across Texas.",
      ctaHeadline: "Let's Discuss Your Commercial Project",
      ctaButton: "Contact Us",
      remodeling: {
        title: "Commercial Remodeling",
        description: "We handle renovations for retail spaces, restaurants, offices, and medical facilities. Our team works around your business hours to keep disruption to a minimum. From tenant improvements to full interior overhauls, we make sure everything meets local code and passes inspection the first time.",
      },
      buildouts: {
        title: "Commercial Build Outs",
        description: "We take empty shell spaces and turn them into fully functional business environments. That includes framing, electrical coordination, plumbing rough ins, drywall, flooring, paint, and final finishes. We manage the full scope so you have one point of contact from demo to move in day.",
      },
      painting: {
        title: "Commercial Painting",
        description: "Interior and exterior painting for warehouses, offices, retail storefronts, and multi unit properties. We prep surfaces properly, use commercial grade coatings, and schedule around your operations so your business stays open.",
      },
      drywall: {
        title: "Commercial Drywall",
        description: "Large scale drywall installation for new construction and renovation projects. We handle metal stud framing, fire rated wall assemblies, acoustic treatments, and smooth finish levels for offices, medical facilities, and retail spaces.",
      },
    },
    // About Page
    aboutPage: {
      breadcrumb: "About",
      heading: "About Us",
      subtitle: "20+ years of craftsmanship. One standard of excellence.",
      storyHeading: "Real People. Real Work. Real Results.",
      storyP1: "When you reach out to us, you're talking directly to the people who will actually be working on your project. That personal connection matters to us, and it shows in every detail of our work.",
      storyP2: "For over 20 years, we've been helping families and businesses throughout Austin, Houston, and Central Texas bring their spaces to life. Whether it's a kitchen that finally works for your family or an office that feels just right, we love being part of that transformation.",
      storyP3: "There's nothing better than seeing a client light up when they see the finished result. That feeling is why we got into this work, and it's what keeps us excited about every new project.",
      storyP4: "We keep things simple: show up on time, respect your space, and do work we're proud of. That's our promise to you.",
      crewHeading: "The Crew Behind Every Project",
      crewP1: "This is what a typical day looks like for us. Sleeves rolled up, scaffolding out, and the whole team working together to get it done right.",
      crewP2: "We don't sub out the hard stuff. Our crew handles everything from framing and drywall to finish work and final paint. When you hire LAZO, you get LAZO.",
      statsYears: "Years Experience",
      statsProjects: "Projects Completed",
      statsSatisfaction: "Satisfaction Rate",
      statsCities: "Cities Served",
      valuesHeading: "What We Stand For",
      value1Title: "Quality You Can See",
      value1Desc: "We take pride in the details, the kind you notice every day.",
      value2Title: "Straight Talk",
      value2Desc: "No runaround. We keep you in the loop from start to finish.",
      value3Title: "Your Home, Our Care",
      value3Desc: "We treat your space like it's our own. Always.",
      value4Title: "Built to Last",
      value4Desc: "We do it right the first time so you don't have to call twice.",
    },
    // Contact Page
    contactPage: {
      breadcrumb: "Contact",
      heading: "Contact Us",
      subtitle: "Ready to discuss your project? Get in touch today.",
      formHeading: "Send Us a Message",
    },
    // Contact Form
    contactForm: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      serviceType: "Service Type",
      selectService: "Select a service...",
      projectDesc: "Project Description",
      sending: "Sending...",
      sendMessage: "Send Message",
      successTitle: "Message Sent!",
      successMsg: "Thanks! We'll be in touch within 24 hours.",
      errorMsg: "Something went wrong. Please try again or call us directly.",
      errName: "Please enter your name so we know who to contact.",
      errEmailEmpty: "We need your email to send you a response.",
      errEmailInvalid: "That doesn't look like a valid email. Double-check it?",
      errPhone: "A phone number helps us reach you faster.",
      errServiceType: "Let us know what type of service you're looking for.",
      errMessageOther: "Since you selected 'Other', please describe what you need so we can help.",
      errMessage: "Tell us a bit about your project so we can help.",
      serviceKitchen: "Kitchen Remodel",
      serviceBathroom: "Bathroom Remodel",
      serviceAddition: "Room Addition",
      servicePainting: "Interior/Exterior Painting",
      serviceDrywall: "Drywall Services",
      serviceCommRemodel: "Commercial Remodel",
      serviceCommBuildout: "Commercial Build-Out",
      serviceOther: "Other",
    },
    // Contact Info
    contactInfo: {
      quickResponse: "Quick Response",
      quickResponseDesc: "We respond within 24 hours",
      callUs: "Call Us",
      email: "Email",
      hours: "Business Hours",
      monFri: "Mon - Fri: 7:00 AM - 6:00 PM",
      sat: "Sat: 8:00 AM - 2:00 PM",
      sun: "Sun: Closed",
      serviceAreas: "Service Areas",
      serviceAreasDesc: "Austin, Houston, Manor & surrounding areas in Central and Southeast Texas",
    },
    // Quick Chat
    quickChat: {
      title: "Quick Message",
      subtitle: "We'll get back to you within 24 hours.",
      name: "Your Name",
      phone: "Phone Number",
      message: "How can we help?",
      sending: "Sending...",
      send: "Send Message",
      successTitle: "Sent!",
      successMsg: "We'll be in touch soon.",
      errorMsg: "Something went wrong. Try again or call us.",
      errName: "Please enter your name.",
      errPhone: "Please enter your phone number.",
      errMessage: "Please describe what you need.",
    },
    // Portfolio Page
    portfolioPage: {
      breadcrumb: "Portfolio",
      heading: "Our Work",
      subtitle: "Browse our completed projects across Texas.",
      loading: "Loading projects...",
      filterAll: "All",
      filterKitchens: "Kitchens",
      filterBathrooms: "Bathrooms",
      filterResidential: "Residential",
      filterExterior: "Exterior",
      filterCommercial: "Commercial",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Nosotros",
      contact: "Contacto",
      callNow: "Llámenos",
      getAQuote: "Cotización",
    },
    hero: {
      title: "Tu Visión, Nuestro Oficio.",
      subtitle: "De remodelaciones de cocina a proyectos comerciales, damos vida a su visión con trabajo experto y precios honestos.",
      cta: "Estimado Gratis",
      secondary: "Ver Trabajos",
    },
    services: {
      heading: "Lo Que Hacemos",
      subtitle: "Servicios de construcción residencial y comercial con más de 20 años de experiencia.",
      residential: {
        title: "Remodelación Residencial",
        description: "Remodelaciones de cocina y baño, adiciones y renovaciones completas del hogar.",
      },
      painting: {
        title: "Pintura Interior y Exterior",
        description: "Servicios profesionales de pintura que protegen y embellecen.",
      },
      commercial: {
        title: "Remodelación Comercial",
        description: "Renovaciones de tiendas, restaurantes y oficinas con mínima interrupción.",
      },
      buildouts: {
        title: "Construcciones Comerciales",
        description: "Transformamos espacios vacíos en ambientes funcionales.",
      },
      viewAll: "Ver Todos los Servicios",
    },
    howItWorks: {
      heading: "Cómo Funciona",
      subtitle: "Desde la primera llamada hasta la entrega final, esto es lo que puede esperar.",
      step1: {
        title: "Contáctenos",
        description: "Llámenos o llene nuestro formulario. Cuéntenos sobre su proyecto y le responderemos en 24 horas.",
      },
      step2: {
        title: "Consulta Gratis",
        description: "Visitamos su propiedad, hablamos de su visión, evaluamos el trabajo y respondemos sus preguntas. Sin compromiso.",
      },
      step3: {
        title: "Propuesta Detallada",
        description: "Reciba una cotización transparente con plazos claros, especificaciones y sin costos ocultos.",
      },
      step4: {
        title: "Comienza la Obra",
        description: "Nuestro equipo se pone a trabajar, manteniéndolo informado hasta que su proyecto esté completo.",
      },
      ready: "¿Listo para comenzar? Hablemos de su proyecto.",
      cta: "Comience Su Proyecto",
    },
    whyUs: {
      heading: "Por Qué Elegirnos",
      experience: { title: "20+ Años de Experiencia", description: "Dos décadas de experiencia en construcción." },
      licensed: { title: "Licenciados y Asegurados", description: "Licenciados y asegurados para su protección." },
      local: { title: "Locales y Confiables", description: "Sirviendo a comunidades de Texas desde el primer día." },
      quality: { title: "Calidad Garantizada", description: "Trabajo que resiste la prueba del tiempo." },
    },
    testimonials: {
      heading: "Lo Que Dicen Nuestros Clientes",
    },
    cta: {
      heading: "¿Listo Para Su Proyecto?",
      subtitle: "Contáctenos hoy para una consulta y estimado gratis.",
      getInTouch: "Contáctenos",
      callNow: "Llámenos",
    },
    footer: {
      quickLinks: "Enlaces Rápidos",
      contactUs: "Contáctenos",
      serviceAreas: "Áreas de Servicio",
      greaterAustin: "Área de Austin",
      greaterHouston: "Área de Houston",
      centralTexas: "Centro de Texas",
      southeastTexas: "Sureste de Texas",
      rights: "TODOS LOS DERECHOS RESERVADOS",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
    // Mobile Menu
    mobileMenu: {
      title: "Menú",
      callUs: "Llámenos directamente:",
      getAQuote: "Cotización",
    },
    // Services Page
    servicesPage: {
      breadcrumb: "Servicios",
      heading: "Nuestros Servicios",
      subtitle: "Desde remodelaciones de cocina hasta construcciones comerciales, ofrecemos construcción de calidad en Texas.",
      residentialTitle: "Servicios Residenciales",
      residentialDesc: "Remodelaciones de cocina, baño, adiciones de cuartos y más.",
      commercialTitle: "Servicios Comerciales",
      commercialDesc: "Construcciones de oficinas, renovaciones de tiendas, pintura comercial y más.",
      learnMore: "Ver Más",
    },
    // Residential Sub-Page
    residentialPage: {
      breadcrumb: "Residencial",
      heading: "Servicios Residenciales",
      subtitle: "Transforme su hogar con trabajo experto y atención al detalle.",
      ctaHeadline: "¿Listo Para Transformar Su Hogar?",
      ctaButton: "Contáctenos",
      kitchen: {
        title: "Remodelación de Cocina",
        description: "Renovaciones completas, refacción de gabinetes, mejoras de encimeras, instalación de salpicaderos y construcción de islas. Trabajamos con usted en diseño, materiales y acabados para crear una cocina funcional.",
      },
      bathroom: {
        title: "Remodelación de Baño",
        description: "Azulejos nuevos, accesorios actualizados, tocadores personalizados, duchas sin puertas y cambios de distribución. Manejamos la coordinación de plomería, impermeabilización y acabados.",
      },
      addition: {
        title: "Adiciones de Cuartos",
        description: "Cuando necesita más espacio, construimos adiciones que combinan con su hogar. Dormitorios, oficinas, salas de sol y áreas de estar. Manejamos cimientos, estructura, techos y todos los acabados interiores.",
      },
      painting: {
        title: "Pintura Interior y Exterior",
        description: "Pintura interior y exterior para hogares de todos los tamaños. Tomamos la preparación en serio: lavado a presión, raspado, calafateo e imprimación, para que el acabado dure. Usamos pinturas premium con líneas limpias.",
      },
      drywall: {
        title: "Instalación y Reparación de Drywall",
        description: "Instalación, cinta y acabado para construcción nueva, así como reparaciones, restauración por daños de agua y retexturizado. Entregamos paredes lisas, esquinas limpias y superficies listas para pintar.",
      },
      general: {
        title: "Remodelación General",
        description: "Renovaciones completas del hogar, instalación de pisos, molduras, reemplazo de puertas y todo lo demás. Un equipo, un punto de contacto y un sitio de trabajo limpio de principio a fin.",
      },
    },
    // Commercial Sub-Page
    commercialPage: {
      breadcrumb: "Comercial",
      heading: "Servicios Comerciales",
      subtitle: "Servicios profesionales de construcción para negocios en Texas.",
      ctaHeadline: "Hablemos de Su Proyecto Comercial",
      ctaButton: "Contáctenos",
      remodeling: {
        title: "Remodelación Comercial",
        description: "Manejamos renovaciones para tiendas, restaurantes, oficinas e instalaciones médicas. Trabajamos alrededor de su horario comercial para minimizar interrupciones. Nos aseguramos de que todo cumpla con los códigos locales.",
      },
      buildouts: {
        title: "Construcciones Comerciales",
        description: "Convertimos espacios vacíos en ambientes de negocio funcionales. Eso incluye estructura, coordinación eléctrica, plomería, drywall, pisos, pintura y acabados finales. Un punto de contacto de demolición a inauguración.",
      },
      painting: {
        title: "Pintura Comercial",
        description: "Pintura interior y exterior para bodegas, oficinas, tiendas y propiedades de múltiples unidades. Preparamos superficies correctamente, usamos recubrimientos comerciales y trabajamos alrededor de sus operaciones.",
      },
      drywall: {
        title: "Drywall Comercial",
        description: "Instalación de drywall a gran escala para construcción nueva y renovaciones. Manejamos estructura metálica, paredes resistentes al fuego, tratamientos acústicos y acabados lisos para oficinas y espacios comerciales.",
      },
    },
    // About Page
    aboutPage: {
      breadcrumb: "Nosotros",
      heading: "Sobre Nosotros",
      subtitle: "Más de 20 años de calidad. Un solo estándar de excelencia.",
      storyHeading: "Gente Real. Trabajo Real. Resultados Reales.",
      storyP1: "Cuando nos contacta, habla directamente con las personas que trabajarán en su proyecto. Esa conexión personal nos importa, y se nota en cada detalle de nuestro trabajo.",
      storyP2: "Por más de 20 años, hemos ayudado a familias y negocios en Austin, Houston y el Centro de Texas a transformar sus espacios. Ya sea una cocina que funcione para su familia o una oficina perfecta, nos encanta ser parte de esa transformación.",
      storyP3: "No hay nada mejor que ver a un cliente emocionado con el resultado final. Ese sentimiento es la razón por la que hacemos este trabajo, y lo que nos mantiene entusiasmados con cada nuevo proyecto.",
      storyP4: "Mantenemos las cosas simples: llegar a tiempo, respetar su espacio y hacer un trabajo del que estemos orgullosos. Esa es nuestra promesa.",
      crewHeading: "El Equipo Detrás de Cada Proyecto",
      crewP1: "Así es un día típico para nosotros. Mangas enrolladas, andamios listos y todo el equipo trabajando juntos para hacerlo bien.",
      crewP2: "No subcontratamos lo difícil. Nuestro equipo maneja todo, desde estructura y drywall hasta acabados y pintura final. Cuando contrata a LAZO, obtiene a LAZO.",
      statsYears: "Años de Experiencia",
      statsProjects: "Proyectos Completados",
      statsSatisfaction: "Tasa de Satisfacción",
      statsCities: "Ciudades Servidas",
      valuesHeading: "Lo Que Defendemos",
      value1Title: "Calidad Visible",
      value1Desc: "Nos enorgullecemos de los detalles que usted nota cada día.",
      value2Title: "Comunicación Directa",
      value2Desc: "Sin rodeos. Lo mantenemos informado de principio a fin.",
      value3Title: "Su Hogar, Nuestro Cuidado",
      value3Desc: "Tratamos su espacio como si fuera nuestro. Siempre.",
      value4Title: "Construido Para Durar",
      value4Desc: "Lo hacemos bien la primera vez para que no tenga que llamar dos veces.",
    },
    // Contact Page
    contactPage: {
      breadcrumb: "Contacto",
      heading: "Contáctenos",
      subtitle: "¿Listo para hablar de su proyecto? Comuníquese hoy.",
      formHeading: "Envíenos un Mensaje",
    },
    // Contact Form
    contactForm: {
      name: "Nombre",
      email: "Correo Electrónico",
      phone: "Teléfono",
      serviceType: "Tipo de Servicio",
      selectService: "Seleccione un servicio...",
      projectDesc: "Descripción del Proyecto",
      sending: "Enviando...",
      sendMessage: "Enviar Mensaje",
      successTitle: "¡Mensaje Enviado!",
      successMsg: "¡Gracias! Nos comunicaremos en 24 horas.",
      errorMsg: "Algo salió mal. Intente de nuevo o llámenos directamente.",
      errName: "Ingrese su nombre para saber a quién contactar.",
      errEmailEmpty: "Necesitamos su correo para enviarle una respuesta.",
      errEmailInvalid: "Eso no parece un correo válido. ¿Puede verificarlo?",
      errPhone: "Un número de teléfono nos ayuda a contactarlo más rápido.",
      errServiceType: "Díganos qué tipo de servicio necesita.",
      errMessageOther: "Ya que seleccionó 'Otro', describa lo que necesita para poder ayudarle.",
      errMessage: "Cuéntenos un poco sobre su proyecto para poder ayudarle.",
      serviceKitchen: "Remodelación de Cocina",
      serviceBathroom: "Remodelación de Baño",
      serviceAddition: "Adición de Cuarto",
      servicePainting: "Pintura Interior/Exterior",
      serviceDrywall: "Servicios de Drywall",
      serviceCommRemodel: "Remodelación Comercial",
      serviceCommBuildout: "Construcción Comercial",
      serviceOther: "Otro",
    },
    // Contact Info
    contactInfo: {
      quickResponse: "Respuesta Rápida",
      quickResponseDesc: "Respondemos en 24 horas",
      callUs: "Llámenos",
      email: "Correo",
      hours: "Horario",
      monFri: "Lun - Vie: 7:00 AM - 6:00 PM",
      sat: "Sáb: 8:00 AM - 2:00 PM",
      sun: "Dom: Cerrado",
      serviceAreas: "Áreas de Servicio",
      serviceAreasDesc: "Austin, Houston, Manor y áreas cercanas en el Centro y Sureste de Texas",
    },
    // Quick Chat
    quickChat: {
      title: "Mensaje Rápido",
      subtitle: "Le responderemos en 24 horas.",
      name: "Su Nombre",
      phone: "Número de Teléfono",
      message: "¿Cómo podemos ayudarle?",
      sending: "Enviando...",
      send: "Enviar Mensaje",
      successTitle: "¡Enviado!",
      successMsg: "Nos comunicaremos pronto.",
      errorMsg: "Algo salió mal. Intente de nuevo o llámenos.",
      errName: "Por favor ingrese su nombre.",
      errPhone: "Por favor ingrese su número de teléfono.",
      errMessage: "Por favor describa lo que necesita.",
    },
    // Portfolio Page
    portfolioPage: {
      breadcrumb: "Portafolio",
      heading: "Nuestro Trabajo",
      subtitle: "Vea nuestros proyectos completados en Texas.",
      loading: "Cargando proyectos...",
      filterAll: "Todos",
      filterKitchens: "Cocinas",
      filterBathrooms: "Baños",
      filterResidential: "Residencial",
      filterExterior: "Exterior",
      filterCommercial: "Comercial",
    },
  },
};
