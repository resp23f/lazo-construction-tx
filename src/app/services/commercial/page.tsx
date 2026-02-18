import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Services | LAZO Construction LLC | Texas Contractor",
  description:
    "Professional commercial construction services in Austin, Houston, and Central Texas. Office build outs, retail renovations, commercial painting, and more.",
};

const commercialServices = [
  {
    title: "Commercial Remodeling",
    description:
      "We handle renovations for retail spaces, restaurants, offices, and medical facilities. Our team works around your business hours to keep disruption to a minimum. From tenant improvements to full interior overhauls, we make sure everything meets local code and passes inspection the first time.",
    image: "/images/services/commercial-drywall-installation-scissor-lift.jpeg",
    imageAlt: "LAZO Construction commercial remodeling with scissor lift installation",
  },
  {
    title: "Commercial Build Outs",
    description:
      "We take empty shell spaces and turn them into fully functional business environments. That includes framing, electrical coordination, plumbing rough ins, drywall, flooring, paint, and final finishes. We manage the full scope so you have one point of contact from demo to move in day.",
    image: "/images/services/commercial-shell-space-ductwork-buildout.jpeg",
    imageAlt: "LAZO Construction commercial shell space build-out with exposed ductwork and custom lighting",
  },
  {
    title: "Commercial Painting",
    description:
      "Interior and exterior painting for warehouses, offices, retail storefronts, and multi unit properties. We prep surfaces properly, use commercial grade coatings, and schedule around your operations so your business stays open.",
    image: "/images/services/506797904_3239200806219792_6705470354640155428_n.jpg",
    imageAlt: "LAZO Construction commercial painting project",
  },
  {
    title: "Commercial Drywall",
    description:
      "Large scale drywall installation for new construction and renovation projects. We handle metal stud framing, fire rated wall assemblies, acoustic treatments, and smooth finish levels for offices, medical facilities, and retail spaces.",
    image: "/images/services/commercial-hallway-drywall-finish.jpeg",
    imageAlt: "LAZO Construction commercial hallway drywall finish",
  },
];

export default function CommercialServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Commercial" },
              ]}
            />
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Commercial Services
            </h1>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl">
              Professional construction services for businesses across Texas.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Services List */}
      {commercialServices.map((service, index) => (
        <ServiceDetail
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
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
