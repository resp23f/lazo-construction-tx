"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award, Shield, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const valueProps = [
    { icon: Award, titleKey: "whyUs.experience.title", descKey: "whyUs.experience.description" },
    { icon: Shield, titleKey: "whyUs.licensed.title", descKey: "whyUs.licensed.description" },
    { icon: MapPin, titleKey: "whyUs.local.title", descKey: "whyUs.local.description" },
    { icon: CheckCircle, titleKey: "whyUs.quality.title", descKey: "whyUs.quality.description" },
  ];

  return (
    <section className="py-12 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t("whyUs.heading")} />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <ScrollReveal key={prop.titleKey} delay={index * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-100 mb-3 sm:mb-5">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-lg text-text">
                    {t(prop.titleKey)}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-text-muted text-xs sm:text-sm leading-relaxed">
                    {t(prop.descKey)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
