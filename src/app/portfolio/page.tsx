import { Metadata } from "next";
import Container from "@/components/layout/Container";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work | LAZO Construction LLC | Texas Contractor",
  description:
    "Browse our completed construction projects across Texas. Kitchen remodels, bathroom renovations, commercial build-outs, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Browse our completed projects across Texas.
          </p>
        </Container>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-background">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
