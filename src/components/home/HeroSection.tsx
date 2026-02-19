"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-primary-dark pt-20 pb-44 sm:py-24 lg:py-40">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Kitchen remodel"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for text readability - gradient from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-primary-dark/20" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="mt-3 sm:mt-6 text-sm sm:text-lg lg:text-xl text-gray-200 max-w-2xl drop-shadow-md">
            {t("hero.subtitle")}
          </p>
          <div className="hidden sm:flex mt-10 flex-row gap-4">
            <Button href="/contact" className="text-base px-8 py-4 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
              {t("hero.cta")}
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              {t("hero.secondary")}
            </Button>
          </div>
        </div>
      </Container>
      {/* Mobile CTAs pinned to bottom of hero */}
      <div className="sm:hidden absolute bottom-6 left-0 right-0 z-10 px-4">
        <div className="flex flex-row gap-3">
          <Button href="/contact" className="flex-1 text-xs px-5 py-2.5 shadow-lg shadow-primary/30">
            {t("hero.cta")}
          </Button>
          <Button
            href="/portfolio"
            variant="outline"
            className="flex-1 text-xs px-5 py-2.5 border-white text-white hover:bg-white hover:text-primary"
          >
            {t("hero.secondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}
