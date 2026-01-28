import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Services | LAZO Construction LLC | Texas Contractor",
  description:
    "Professional commercial construction services in Austin, Houston, and Central Texas. Office build-outs, retail renovations, commercial painting, and more.",
};

const commercialServices = [
  {
    title: "Commercial Remodeling",
    description:
      "Retail spaces, restaurants, offices — we renovate commercial properties with minimal disruption to your operations. Experienced with tenant improvements and code compliance.",
  },
  {
    title: "Commercial Build-Outs",
    description:
      "Transform shell spaces into functional business environments. From initial layout to final finishes, we manage the entire build-out process.",
  },
  {
    title: "Commercial Painting",
    description:
      "Interior and exterior painting for commercial properties. We work around your schedule to keep your business running.",
  },
  {
    title: "Commercial Drywall",
    description:
      "Large-scale drywall installation for commercial projects. Metal framing, fire-rated assemblies, acoustic treatments.",
  },
];

export default function CommercialServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Commercial Services
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Professional construction services for businesses across Texas.
          </p>
        </Container>
      </section>

      {/* Services List */}
      {commercialServices.map((service, index) => (
        <ServiceDetail
          key={service.title}
          title={service.title}
          description={service.description}
          isAlternate={index % 2 === 1}
        />
      ))}

      <CTABanner
        headline="Let's Discuss Your Commercial Project"
        buttonText="Contact Us"
      />
    </>
  );
}
