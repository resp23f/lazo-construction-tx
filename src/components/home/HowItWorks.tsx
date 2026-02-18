import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Phone,
  CalendarCheck,
  FileText,
  HardHat,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Give us a call or fill out our online form. Tell us about your project and we'll get back to you within 24 hours.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Free Consultation",
    description:
      "We visit your property, discuss your vision, assess the scope, and answer all your questions. No obligation.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Detailed Proposal",
    description:
      "Receive a transparent, itemized quote with clear timelines, material specs, and no hidden fees.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Construction Begins",
    description:
      "Our team gets to work, keeping you updated every step of the way until your project is complete.",
    icon: HardHat,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="How It Works"
            subtitle="From first call to final walkthrough, here's what to expect."
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="flex gap-6">
                  {/* Left column: icon + connector */}
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 my-2" />
                    )}
                  </div>

                  {/* Right column: content */}
                  <div className={`${isLast ? "pb-0" : "pb-10"} pt-1`}>
                    <span className="text-xs font-semibold text-primary/50 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-text mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-14 text-center">
            <p className="text-text-muted mb-6">
              Ready to get started? Let&apos;s talk about your project.
            </p>
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
