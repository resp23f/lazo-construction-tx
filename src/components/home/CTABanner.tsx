import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  headline = "Ready to Start Your Project?",
  subtext = "Contact us today for a free consultation and estimate.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl font-bold text-white">
                {headline}
              </h2>
              <p className="mt-2 text-gray-300">{subtext}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={buttonHref}
                className="min-w-[160px] bg-white text-primary hover:bg-gray-100"
              >
                {buttonText}
              </Button>
              <Button
                href="tel:+12814066787"
                variant="outline"
                className="min-w-[160px] border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
