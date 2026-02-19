import { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our completed construction projects across Texas. Kitchen remodels, bathroom renovations, commercial build-outs, and more.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
