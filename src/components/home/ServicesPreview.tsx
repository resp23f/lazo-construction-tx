import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  ChefHat,
  Bath,
  Home,
  Paintbrush,
  Building2,
  Hammer,
} from "lucide-react";

const services = [
  {
    title: "Kitchen Remodels",
    description:
      "Complete kitchen renovations with custom cabinetry and modern finishes.",
    href: "/services/residential",
    icon: ChefHat,
  },
  {
    title: "Bathroom Remodels",
    description:
      "Transform your bathroom with new tile, fixtures, and layouts.",
    href: "/services/residential",
    icon: Bath,
  },
  {
    title: "Room Additions",
    description:
      "Expand your living space with seamless home additions.",
    href: "/services/residential",
    icon: Home,
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Professional painting services that protect and beautify.",
    href: "/services/residential",
    icon: Paintbrush,
  },
  {
    title: "Commercial Remodeling",
    description:
      "Retail, restaurant, and office renovations with minimal disruption.",
    href: "/services/commercial",
    icon: Building2,
  },
  {
    title: "Commercial Build-Outs",
    description:
      "Transform shell spaces into functional business environments.",
    href: "/services/commercial",
    icon: Hammer,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-blue-50/50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Our Services"
            subtitle="From residential renovations to commercial build-outs, we deliver quality construction across Texas."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block bg-background p-6 rounded-xl border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon
                    className="h-10 w-10 text-primary mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-bold text-lg text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm">
                    {service.description}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
