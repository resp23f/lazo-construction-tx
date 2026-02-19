"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Home, Paintbrush, Building2, HardHat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    { titleKey: "services.residential.title", descKey: "services.residential.description", href: "/services/residential", icon: Home },
    { titleKey: "services.painting.title", descKey: "services.painting.description", href: "/services/residential", icon: Paintbrush },
    { titleKey: "services.commercial.title", descKey: "services.commercial.description", href: "/services/commercial", icon: Building2 },
    { titleKey: "services.buildouts.title", descKey: "services.buildouts.description", href: "/services/commercial", icon: HardHat },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("services.heading")}
            subtitle={t("services.subtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.titleKey} delay={index * 100} className="h-full">
                <Link
                  href={service.href}
                  className="group block bg-background p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <Icon
                    className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-3 sm:mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-text-muted text-xs sm:text-sm">
                    {t(service.descKey)}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline">
              {t("services.viewAll")}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
