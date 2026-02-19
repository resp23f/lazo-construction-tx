"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, CalendarCheck, FileText, HardHat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.description", icon: Phone },
    { number: "02", titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.description", icon: CalendarCheck },
    { number: "03", titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.description", icon: FileText },
    { number: "04", titleKey: "howItWorks.step4.title", descKey: "howItWorks.step4.description", icon: HardHat },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("howItWorks.heading")}
            subtitle={t("howItWorks.subtitle")}
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 my-2" />
                    )}
                  </div>

                  <div className={`${isLast ? "pb-0" : "pb-6 sm:pb-10"} pt-1`}>
                    <span className="text-xs font-semibold text-primary/50 uppercase tracking-wider">
                      {t("howItWorks.heading") === "Cómo Funciona" ? "PASO" : "STEP"} {step.number}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-text mt-1 mb-1 sm:mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-10 sm:mt-14 text-center">
            <p className="text-text-muted mb-6">
              {t("howItWorks.ready")}
            </p>
            <Button href="/contact" variant="primary">
              {t("howItWorks.cta")}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
