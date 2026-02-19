"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Hammer, MessageSquare, Home, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  const coreValues = [
    { icon: Hammer, titleKey: "aboutPage.value1Title", descKey: "aboutPage.value1Desc" },
    { icon: MessageSquare, titleKey: "aboutPage.value2Title", descKey: "aboutPage.value2Desc" },
    { icon: Home, titleKey: "aboutPage.value3Title", descKey: "aboutPage.value3Desc" },
    { icon: CheckCircle, titleKey: "aboutPage.value4Title", descKey: "aboutPage.value4Desc" },
  ];

  return (
    <>
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: t("aboutPage.breadcrumb") }]} />
            <h1 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl tracking-tight">
              {t("aboutPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("aboutPage.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lazo-construction-austin-tx-home-remodel-exterior-work.avif"
                  alt="LAZO Construction crew working on a home exterior remodel in Austin, Texas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">
                {t("aboutPage.storyHeading")}
              </h2>
              <div className="prose prose-lg text-text-muted space-y-5">
                <p>{t("aboutPage.storyP1")}</p>
                <p>{t("aboutPage.storyP2")}</p>
                <p>{t("aboutPage.storyP3")}</p>
                <p>{t("aboutPage.storyP4")}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">
                {t("aboutPage.crewHeading")}
              </h2>
              <div className="prose prose-lg text-text-muted space-y-5">
                <p>{t("aboutPage.crewP1")}</p>
                <p>{t("aboutPage.crewP2")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-crew-commercial-buildout-scaffolding.jpeg"
                  alt="LAZO Construction crew working on a commercial build-out with scaffolding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-b from-surface to-background">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <AnimatedCounter end={20} suffix="+" label={t("aboutPage.statsYears")} duration={2000} />
            <AnimatedCounter end={500} suffix="+" label={t("aboutPage.statsProjects")} duration={2500} />
            <AnimatedCounter end={98} suffix="%" label={t("aboutPage.statsSatisfaction")} duration={1800} />
            <AnimatedCounter end={8} suffix="+" label={t("aboutPage.statsCities")} duration={1200} />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <ScrollReveal>
            <SectionHeading title={t("aboutPage.valuesHeading")} />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.titleKey} delay={index * 100}>
                  <div className="bg-surface p-6 rounded-xl border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary mb-4">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text">{t(value.titleKey)}</h3>
                    <p className="mt-2 text-text-muted text-sm">{t(value.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
