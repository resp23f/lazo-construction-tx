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
    <section className="py-20 bg-gray-50">
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
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 my-2" />
                    )}
                  </div>

                  <div className={`${isLast ? "pb-0" : "pb-10"} pt-1`}>
                    <span className="text-xs font-semibold text-primary/50 uppercase tracking-wider">
                      {t("howItWorks.heading") === "Cómo Funciona" ? "PASO" : "STEP"} {step.number}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-text mt-1 mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-14 text-center">
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
