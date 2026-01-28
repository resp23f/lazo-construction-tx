import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-primary-dark py-24 sm:py-32 lg:py-40">
      {/* Background placeholder - will be replaced with real image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Quality Construction.
            <br />
            Lasting Results.
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Residential & commercial construction services across Austin,
            Houston, and Central Texas.
          </p>
          <div className="mt-10">
            <Button href="/contact" className="text-base px-8 py-4">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
