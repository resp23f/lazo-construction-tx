import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const placeholderImages = [
  { id: 1, alt: "Kitchen remodel project" },
  { id: 2, alt: "Bathroom renovation" },
  { id: 3, alt: "Commercial build-out" },
  { id: 4, alt: "Room addition" },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <SectionHeading
          title="Our Work"
          subtitle="Browse our completed projects across Texas."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {placeholderImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gray-200 flex items-center justify-center border border-gray-300"
            >
              <span className="text-text-muted text-sm text-center px-4">
                {image.alt}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="outline">
            View Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
