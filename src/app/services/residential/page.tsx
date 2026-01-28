import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTABanner from "@/components/home/CTABanner";

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
  },
  {
    title: "Bathroom Remodels",
    description:
      "Update your bathroom with new tile, fixtures, vanities, and layouts. We handle everything from powder room refreshes to full master bath transformations.",
  },
  {
    title: "Room Additions",
    description:
      "Need more space? We build seamless additions that match your existing home — extra bedrooms, home offices, sunrooms, or expanded living areas.",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Professional painting services that protect and beautify. Proper prep, premium paints, clean lines, and lasting results inside and out.",
  },
  {
    title: "Drywall Installation & Repair",
    description:
      "New construction drywall, repairs, texturing, and finishing. Smooth walls, sharp corners, ready for paint.",
  },
  {
    title: "General Residential Remodeling",
    description:
      "Full-home renovations, flooring, trim work, and everything in between. One contractor for your entire project.",
  },
];

export default function ResidentialServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Residential Services
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Transform your home with expert craftsmanship and attention to
            detail.
          </p>
        </Container>
      </section>

      {/* Services List */}
      {residentialServices.map((service, index) => (
        <ServiceDetail
          key={service.title}
          title={service.title}
          description={service.description}
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
