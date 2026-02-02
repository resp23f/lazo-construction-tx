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
      "We visit your property, discuss your vision, assess the scope, and answer all your questions — no obligation.",
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
    <section className="py-20 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0c4a6e 1px, transparent 1px),
            linear-gradient(to bottom, #0c4a6e 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50" />
      
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="How It Works"
            subtitle="From first call to final walkthrough — here's what to expect."
          />
        </ScrollReveal>

        {/* Staggered cards */}
        <div className="max-w-4xl mx-auto space-y-8 lg:space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <ScrollReveal 
                key={step.number} 
                delay={index * 150}
              >
                <div 
                  className={`relative flex ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  {/* Card */}
                  <div 
                    className={`
                      relative bg-white rounded-2xl p-6 lg:p-8 
                      shadow-lg hover:shadow-xl 
                      border border-gray-100
                      transition-all duration-300 hover:-translate-y-1
                      w-full lg:w-[85%]
                      ${isEven ? 'lg:ml-0' : 'lg:mr-0'}
                    `}
                  >
                    {/* Big watermark number */}
                    <span 
                      className={`
                        absolute top-4 font-heading font-bold text-[120px] lg:text-[160px] 
                        leading-none text-primary/[0.04] select-none pointer-events-none
                        ${isEven ? 'right-4 lg:right-8' : 'right-4 lg:left-8'}
                      `}
                    >
                      {step.number}
                    </span>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-5">
                      {/* Icon container */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon 
                          className="w-7 h-7 text-primary" 
                          strokeWidth={1.5} 
                        />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary/60 tracking-wide">
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-xl lg:text-2xl text-text mb-2">
                          {step.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div 
                      className={`
                        hidden lg:block absolute top-full left-1/2 
                        w-px h-6 bg-gradient-to-b from-primary/20 to-transparent
                        -translate-x-1/2
                      `}
                    />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600}>
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
