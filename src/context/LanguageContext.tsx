"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lazo-lang") as Language | null;
      if (saved === "en" || saved === "es") return saved;
    }
    return "en";
  });

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
      {children}
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
      title: "Quality Construction Across Texas",
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
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Nosotros",
      contact: "Contacto",
      callNow: "Llámenos",
      getAQuote: "Cotización Gratis",
    },
    hero: {
      title: "Construcción de Calidad en Todo Texas",
      subtitle: "Desde remodelaciones de cocina hasta proyectos comerciales, hacemos realidad su visión con trabajo experto y precios honestos.",
      cta: "Estimado Gratis",
      secondary: "Ver Nuestro Trabajo",
    },
    services: {
      heading: "Lo Que Hacemos",
      subtitle: "Servicios de construcción residencial y comercial respaldados por más de 20 años de experiencia.",
      residential: {
        title: "Remodelación Residencial",
        description: "Remodelaciones de cocina y baño, adiciones de cuartos, y renovaciones completas del hogar.",
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
        description: "Transformamos espacios vacíos en ambientes de negocio funcionales.",
      },
      viewAll: "Ver Todos los Servicios",
    },
    howItWorks: {
      heading: "Cómo Funciona",
      subtitle: "Desde la primera llamada hasta la entrega final, esto es lo que puede esperar.",
      step1: {
        title: "Contáctenos",
        description: "Llámenos o llene nuestro formulario en línea. Cuéntenos sobre su proyecto y le responderemos dentro de 24 horas.",
      },
      step2: {
        title: "Consulta Gratis",
        description: "Visitamos su propiedad, hablamos de su visión, evaluamos el alcance del trabajo, y respondemos todas sus preguntas. Sin compromiso.",
      },
      step3: {
        title: "Propuesta Detallada",
        description: "Reciba una cotización transparente y detallada con plazos claros, especificaciones de materiales, y sin costos ocultos.",
      },
      step4: {
        title: "Comienza la Construcción",
        description: "Nuestro equipo se pone a trabajar, manteniéndolo informado en cada paso hasta que su proyecto esté completo.",
      },
      ready: "¿Listo para comenzar? Hablemos de su proyecto.",
      cta: "Comience Su Proyecto",
    },
    whyUs: {
      heading: "Por Qué Elegirnos",
      experience: { title: "20+ Años de Experiencia", description: "Dos décadas de experiencia en construcción." },
      licensed: { title: "Licenciados y Asegurados", description: "Totalmente licenciados y asegurados para su protección." },
      local: { title: "Locales y Confiables", description: "Sirviendo con orgullo a las comunidades de Texas desde el primer día." },
      quality: { title: "Calidad Garantizada", description: "Trabajo artesanal que resiste la prueba del tiempo." },
    },
    testimonials: {
      heading: "Lo Que Dicen Nuestros Clientes",
    },
    cta: {
      heading: "¿Listo Para Comenzar Su Proyecto?",
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
  },
};
