import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Residential Services | LAZO Construction LLC | Texas Contractor",
  description:
    "Professional residential construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, room additions, painting, and more.",
};

const residentialServices = [
  {
    title: "Kitchen Remodels",
    description:
      "From complete gut renovations to cabinet refacing and countertop upgrades, we create kitchens that combine functionality with style. Custom cabinetry, modern appliances, quality finishes.",
    image: "/images/services/484969749_947128020969500_2323297012010999311_n.jpg",
    imageAlt: "LAZO Construction kitchen remodel",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Update your bathroom with new tile, fixtures, vanities, and layouts. We handle everything from powder room refreshes to full master bath transformations.",
    image: "/images/services/484865923_947127760969526_4508615055210071457_n-2.jpg",
    imageAlt: "LAZO Construction bathroom remodel",
    imagePosition: "center 70%",
  },
  {
    title: "Room Additions",
    description:
      "Need more space? We build seamless additions that match your existing home. Extra bedrooms, home offices, sunrooms, or expanded living areas.",
    image: "/images/services/residential-steel-framing-construction.jpeg",
    imageAlt: "LAZO Construction room addition with steel framing in progress",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Professional painting services that protect and beautify. Proper prep, premium paints, clean lines, and lasting results inside and out.",
    image: "/images/services/C403DB6B-70D3-4597-8116-265B0F9FDF5E.jpeg",
    imageAlt: "LAZO Construction interior and exterior painting",
  },
  {
    title: "Drywall Installation & Repair",
    description:
      "New construction drywall, repairs, texturing, and finishing. Smooth walls, sharp corners, ready for paint.",
    image: "/images/services/residential-framing-fireplace-rough-in.jpeg",
    imageAlt: "LAZO Construction drywall and framing rough-in with ductwork",
  },
  {
    title: "General Residential Remodeling",
    description:
      "Full-home renovations, flooring, trim work, and everything in between. One contractor for your entire project.",
    image: "/images/services/483852313_944698671212435_2053494467076279386_n-2.jpg",
    imageAlt: "LAZO Construction general residential remodeling",
  },
];

export default function ResidentialServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Residential" },
              ]}
            />
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Residential Services
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
              Transform your home with expert craftsmanship and attention to
              detail.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Services List */}
      {residentialServices.map((service, index) => (
        <ServiceDetail
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          imagePosition={service.imagePosition}
          isAlternate={index % 2 === 1}
        />
      ))}

      <CTABanner
        headline="Ready to Transform Your Home?"
        buttonText="Contact Us"
      />
    </>
  );
}
