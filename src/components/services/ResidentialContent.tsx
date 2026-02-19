"use client";

import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

export default function ResidentialContent() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "residentialPage.kitchen.title",
      descKey: "residentialPage.kitchen.description",
      image: "/images/services/484969749_947128020969500_2323297012010999311_n.jpg",
      imageAlt: "LAZO Construction kitchen remodel",
    },
    {
      titleKey: "residentialPage.bathroom.title",
      descKey: "residentialPage.bathroom.description",
      image: "/images/services/484865923_947127760969526_4508615055210071457_n-2.jpg",
      imageAlt: "LAZO Construction bathroom remodel",
      imagePosition: "center 70%",
    },
    {
      titleKey: "residentialPage.addition.title",
      descKey: "residentialPage.addition.description",
      image: "/images/services/residential-steel-framing-construction.jpeg",
      imageAlt: "LAZO Construction room addition with steel framing in progress",
    },
    {
      titleKey: "residentialPage.painting.title",
      descKey: "residentialPage.painting.description",
      image: "/images/services/C403DB6B-70D3-4597-8116-265B0F9FDF5E.jpeg",
      imageAlt: "LAZO Construction interior and exterior painting",
    },
    {
      titleKey: "residentialPage.drywall.title",
      descKey: "residentialPage.drywall.description",
      image: "/images/services/residential-framing-fireplace-rough-in.jpeg",
      imageAlt: "LAZO Construction drywall and framing rough-in with ductwork",
    },
    {
      titleKey: "residentialPage.general.title",
      descKey: "residentialPage.general.description",
      image: "/images/services/483852313_944698671212435_2053494467076279386_n-2.jpg",
      imageAlt: "LAZO Construction general residential remodeling",
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
                { label: t("residentialPage.breadcrumb") },
              ]}
            />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("residentialPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("residentialPage.subtitle")}
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
          imagePosition={service.imagePosition}
          isAlternate={index % 2 === 1}
        />
      ))}

      <CTABanner
        headline={t("residentialPage.ctaHeadline")}
        buttonText={t("residentialPage.ctaButton")}
      />
    </>
  );
}
