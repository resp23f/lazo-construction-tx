"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

interface LegalPageHeaderProps {
  titleEn: string;
  titleEs: string;
}

export default function LegalPageHeader({ titleEn, titleEs }: LegalPageHeaderProps) {
  const { lang } = useLanguage();

  return (
    <section className="bg-primary py-12">
      <Container>
        <ScrollReveal>
          <Breadcrumbs items={[{ label: lang === "es" ? titleEs : titleEn }]} />
          <h1 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl tracking-tight">
            {lang === "es" ? titleEs : titleEn}
          </h1>
        </ScrollReveal>
      </Container>
    </section>
  );
}
