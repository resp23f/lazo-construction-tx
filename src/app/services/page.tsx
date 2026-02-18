import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/services/ServiceCard";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Services | LAZO Construction LLC | Texas Contractor",
  description:
    "From kitchen remodels to commercial build-outs, we deliver quality construction across Texas. Residential and commercial services available.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: "Services" }]} />
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
              From kitchen remodels to commercial build-outs, we deliver quality
              construction across Texas.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <ServiceCard
                title="Residential Services"
                description="Kitchen remodels, bathroom renovations, room additions, and more."
                href="/services/residential"
                image="/images/services/residential-exterior-courtyard-landscaping.jpeg"
                imageAlt="LAZO Construction residential exterior with courtyard"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <ServiceCard
                title="Commercial Services"
                description="Office build-outs, retail renovations, commercial painting, and more."
                href="/services/commercial"
                image="/images/portfolio/commercial-retail-storefront-buildout-string-lights.jpeg"
                imageAlt="LAZO Construction commercial retail storefront build-out"
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
