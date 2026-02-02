import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const portfolioImages = [
  { id: 1, alt: "Kitchen remodel project", src: "/images/portfolio/kitchen-remodel-white-cabinets-quartz-island.jpg.jpg", href: "/portfolio?filter=Kitchens" },
  { id: 2, alt: "Bathroom renovation", src: null, href: "/portfolio?filter=Bathrooms" },
  { id: 3, alt: "Commercial build-out", src: null, href: "/portfolio?filter=Commercial" },
  { id: 4, alt: "Room addition", src: null, href: "/portfolio?filter=Residential" },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-slate-100/50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Our Work"
            subtitle="Browse our completed projects across Texas."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 100}>
              <Link
                href={image.href}
                className="block aspect-square rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
              >
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-text-muted text-sm text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="outline">
              View Our Work
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
