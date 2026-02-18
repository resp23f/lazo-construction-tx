"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  headline,
  subtext,
  buttonText,
  buttonHref = "/contact",
}: CTABannerProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-16">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl font-bold text-white">
                {headline || t("cta.heading")}
              </h2>
              <p className="mt-2 text-gray-300">{subtext || t("cta.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={buttonHref}
                className="min-w-[160px] bg-white text-primary hover:bg-gray-100"
              >
                {buttonText || t("cta.getInTouch")}
              </Button>
              <Button
                href="tel:+12814066787"
                variant="outline"
                className="min-w-[160px] border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                {t("cta.callNow")}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
