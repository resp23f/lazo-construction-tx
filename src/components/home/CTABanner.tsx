import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
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
              className="bg-white text-primary hover:bg-gray-100"
            >
              {buttonText}
            </Button>
            <a
              href="tel:+12814066787"
              className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors font-medium"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              (281) 406-6787
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
