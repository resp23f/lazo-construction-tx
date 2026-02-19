"use client";

import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: t("contactPage.breadcrumb") }]} />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("contactPage.heading")}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              {t("contactPage.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="font-heading font-bold text-2xl text-text mb-6">
                    {t("contactPage.formHeading")}
                  </h2>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={150}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ContactInfo />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
