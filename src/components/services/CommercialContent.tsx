"use client";

import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

export default function CommercialContent() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "commercialPage.remodeling.title",
      descKey: "commercialPage.remodeling.description",
      image: "/images/services/commercial-drywall-installation-scissor-lift.jpeg",
      imageAlt: "LAZO Construction commercial remodeling with scissor lift installation",
    },
    {
      titleKey: "commercialPage.buildouts.title",
      descKey: "commercialPage.buildouts.description",
      image: "/images/services/commercial-shell-space-ductwork-buildout.jpeg",
      imageAlt: "LAZO Construction commercial shell space build-out with exposed ductwork and custom lighting",
    },
    {
      titleKey: "commercialPage.painting.title",
      descKey: "commercialPage.painting.description",
      image: "/images/services/commercial-painting-crew-project.jpg",
      imageAlt: "LAZO Construction commercial painting project",
    },
    {
      titleKey: "commercialPage.drywall.title",
      descKey: "commercialPage.drywall.description",
      image: "/images/services/commercial-hallway-drywall-finish.jpeg",
      imageAlt: "LAZO Construction commercial hallway drywall finish",
    },
  ];

  return (
    <>
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: t("servicesPage.breadcrumb"), href: "/services" },
                { label: t("commercialPage.breadcrumb") },
              ]}
            />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("commercialPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("commercialPage.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {services.map((service, index) => (
        <ServiceDetail
          key={service.titleKey}
          title={t(service.titleKey)}
          description={t(service.descKey)}
          image={service.image}
          imageAlt={service.imageAlt}
          isAlternate={index % 2 === 1}
        />
      ))}

      <CTABanner
        headline={t("commercialPage.ctaHeadline")}
        buttonText={t("commercialPage.ctaButton")}
      />
    </>
  );
}
