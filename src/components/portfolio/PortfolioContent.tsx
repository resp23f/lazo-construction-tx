"use client";

import { Suspense } from "react";
import Container from "@/components/layout/Container";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: t("portfolioPage.breadcrumb") }]} />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("portfolioPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("portfolioPage.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <Suspense fallback={<div className="text-center py-12 text-text-muted">{t("portfolioPage.loading")}</div>}>
            <PortfolioGrid />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
