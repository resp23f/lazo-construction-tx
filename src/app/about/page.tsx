import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import { Hammer, MessageSquare, Home, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | LAZO Construction LLC | Texas Contractor",
  description:
    "Learn about LAZO Construction LLC. 20+ years of construction experience serving Austin, Houston, and Central Texas. Licensed and insured general contractor.",
};

const coreValues = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    description: "We don't cut corners. Every detail matters.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "You'll always know where your project stands.",
  },
  {
    icon: Home,
    title: "Respect for Your Space",
    description: "Clean job sites, respectful crews, minimal disruption.",
  },
  {
    icon: CheckCircle,
    title: "Results That Last",
    description: "Built right the first time, built to last.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            About LAZO Construction
          </h1>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Built on Experience. Driven by Excellence.
            </h2>
            <div className="prose prose-lg text-text-muted">
              <p>
                With over 20 years of hands-on experience in the construction
                industry, LAZO Construction LLC delivers residential and
                commercial projects across Central and Southeast Texas. From
                kitchen remodels to full commercial build-outs, we bring the
                same standard to every job: precision craftsmanship, clear
                communication, and results that last.
              </p>
              <p>
                Locally owned and operated, we&apos;ve built our reputation one
                project at a time — earning the trust of homeowners and business
                owners throughout Austin, Houston, Manor, and surrounding
                communities.
              </p>
              <p>
                We believe every project deserves the same level of attention
                and care, whether it&apos;s a bathroom refresh or a complete
                office renovation. Our team takes pride in showing up on time,
                keeping job sites clean, and delivering what we promise.
              </p>
              <p className="font-heading font-bold text-primary">
                Licensed. Insured. Ready to build.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <Container>
          <SectionHeading title="Our Core Values" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-surface p-6 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary mb-4">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-surface">
        <Container>
          <p className="text-center text-text-muted">
            LAZO Construction LLC is a fully licensed and insured general
            contractor serving Texas.
          </p>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
