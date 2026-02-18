import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Hammer, MessageSquare, Home, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | LAZO Construction LLC | Texas Contractor",
  description:
    "Learn about LAZO Construction LLC. 20+ years of construction experience serving Austin, Houston, and Central Texas. Licensed and insured general contractor.",
};

const coreValues = [
  {
    icon: Hammer,
    title: "Quality You Can See",
    description: "We take pride in the details, the kind you notice every day.",
  },
  {
    icon: MessageSquare,
    title: "Straight Talk",
    description: "No runaround. We keep you in the loop from start to finish.",
  },
  {
    icon: Home,
    title: "Your Home, Our Care",
    description: "We treat your space like it's our own. Always.",
  },
  {
    icon: CheckCircle,
    title: "Built to Last",
    description: "We do it right the first time so you don't have to call twice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: "About" }]} />
            <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
              20+ years of craftsmanship. One standard of excellence.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lazo-construction-austin-tx-home-remodel-exterior-work.avif"
                  alt="LAZO Construction crew working on a home exterior remodel in Austin, Texas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Real People. Real Work. Real Results.
              </h2>
              <div className="prose prose-lg text-text-muted space-y-5">
                <p>
                  When you reach out to us, you&apos;re talking directly to the
                  people who will actually be working on your project. That
                  personal connection matters to us, and it shows in every
                  detail of our work.
                </p>
                <p>
                  For over 20 years, we&apos;ve been helping families and businesses
                  throughout Austin, Houston, and Central Texas bring their spaces
                  to life. Whether it&apos;s a kitchen that finally works for your
                  family or an office that feels just right, we love being part
                  of that transformation.
                </p>
                <p>
                  There&apos;s nothing better than seeing a client light up when
                  they see the finished result. That feeling is why we got into
                  this work, and it&apos;s what keeps us excited about every new project.
                </p>
                <p>
                  We keep things simple: show up on time, respect your space,
                  and do work we&apos;re proud of. That&apos;s our promise to you.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                The Crew Behind Every Project
              </h2>
              <div className="prose prose-lg text-text-muted space-y-5">
                <p>
                  This is what a typical day looks like for us. Sleeves rolled
                  up, scaffolding out, and the whole team working together to
                  get it done right.
                </p>
                <p>
                  We don&apos;t sub out the hard stuff. Our crew handles
                  everything from framing and drywall to finish work and
                  final paint. When you hire LAZO, you get LAZO.
                </p>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal delay={100}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-crew-commercial-buildout-scaffolding.jpeg"
                  alt="LAZO Construction crew working on a commercial build-out with scaffolding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-surface to-background">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <AnimatedCounter
              end={20}
              suffix="+"
              label="Years Experience"
              duration={2000}
            />
            <AnimatedCounter
              end={500}
              suffix="+"
              label="Projects Completed"
              duration={2500}
            />
            <AnimatedCounter
              end={97}
              suffix="%"
              label="Satisfaction Rate"
              duration={1800}
            />
            <AnimatedCounter
              end={8}
              suffix=""
              label="Cities Served"
              duration={1200}
            />
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <Container>
          <ScrollReveal>
            <SectionHeading title="What We Stand For" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="bg-surface p-6 rounded-xl border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary mb-4">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-sm">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
