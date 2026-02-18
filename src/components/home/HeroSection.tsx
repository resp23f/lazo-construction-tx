"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-primary-dark py-16 sm:py-24 lg:py-40">
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
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl drop-shadow-md">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
              {t("hero.cta")}
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              {t("hero.secondary")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
