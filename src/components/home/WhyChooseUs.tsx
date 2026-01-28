import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Shield, MapPin, CheckCircle } from "lucide-react";

const valueProps = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of hands-on construction expertise.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your protection.",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    description: "Proudly serving Texas communities since day one.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "Craftsmanship that stands the test of time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionHeading title="Why Choose Us" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div key={prop.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-4">
                  <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-text">
                  {prop.title}
                </h3>
                <p className="mt-2 text-text-muted text-sm">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
