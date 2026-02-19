"use client";

import Container from "@/components/layout/Container";
import ServiceCard from "@/components/services/ServiceCard";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: t("servicesPage.breadcrumb") }]} />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("servicesPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("servicesPage.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0} className="h-full">
              <ServiceCard
                title={t("servicesPage.residentialTitle")}
                description={t("servicesPage.residentialDesc")}
                href="/services/residential"
                image="/images/services/residential-exterior-courtyard-landscaping.jpeg"
                imageAlt="LAZO Construction residential exterior with courtyard"
                learnMoreText={t("servicesPage.learnMore")}
              />
            </ScrollReveal>
            <ScrollReveal delay={150} className="h-full">
              <ServiceCard
                title={t("servicesPage.commercialTitle")}
                description={t("servicesPage.commercialDesc")}
                href="/services/commercial"
                image="/images/portfolio/commercial-retail-storefront-buildout-string-lights.jpeg"
                imageAlt="LAZO Construction commercial retail storefront build-out"
                learnMoreText={t("servicesPage.learnMore")}
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
