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
      "Complete gut renovations, cabinet refacing, countertop upgrades, backsplash installation, and custom island builds. We work with you on layout, materials, and finishes to build a kitchen that fits how you actually use it.",
    image: "/images/services/484969749_947128020969500_2323297012010999311_n.jpg",
    imageAlt: "LAZO Construction kitchen remodel",
  },
  {
    title: "Bathroom Remodels",
    description:
      "New tile, updated fixtures, custom vanities, walk in showers, and full layout changes. Whether it's a small powder room refresh or a complete master bath gut, we handle the plumbing coordination, waterproofing, and finish work.",
    image: "/images/services/484865923_947127760969526_4508615055210071457_n-2.jpg",
    imageAlt: "LAZO Construction bathroom remodel",
    imagePosition: "center 70%",
  },
  {
    title: "Room Additions",
    description:
      "When you need more space, we build additions that blend with your existing home. Extra bedrooms, home offices, sunrooms, and expanded living areas. We handle foundation, framing, roofing tie ins, and all interior finishes so the new space feels like it was always there.",
    image: "/images/services/residential-steel-framing-construction.jpeg",
    imageAlt: "LAZO Construction room addition with steel framing in progress",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Full interior and exterior painting for homes of all sizes. We take prep seriously, including pressure washing, scraping, caulking, and priming, so the finish lasts. We use premium paints and keep clean lines on trim, ceilings, and accent walls.",
    image: "/images/services/C403DB6B-70D3-4597-8116-265B0F9FDF5E.jpeg",
    imageAlt: "LAZO Construction interior and exterior painting",
  },
  {
    title: "Drywall Installation & Repair",
    description:
      "New construction hanging, taping, and finishing as well as patch repairs, water damage restoration, and retexturing. We deliver smooth walls, clean corners, and surfaces that are ready for paint or wallpaper.",
    image: "/images/services/residential-framing-fireplace-rough-in.jpeg",
    imageAlt: "LAZO Construction drywall and framing rough-in with ductwork",
  },
  {
    title: "General Residential Remodeling",
    description:
      "Full-home renovations, flooring installation, trim and baseboard work, door replacements, and everything in between. One crew, one point of contact, and a clean jobsite from start to finish.",
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
