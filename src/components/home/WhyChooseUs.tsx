import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
    <section className="py-20 bg-gradient-to-b from-blue-50/50 via-sky-50/40 to-amber-50/30">
      <Container>
        <ScrollReveal>
          <SectionHeading title="Why Choose Us" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <ScrollReveal key={prop.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 mb-5">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
