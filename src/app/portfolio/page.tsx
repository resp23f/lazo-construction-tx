import { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Our Work | LAZO Construction LLC | Texas Contractor",
  description:
    "Browse our completed construction projects across Texas. Kitchen remodels, bathroom renovations, commercial build-outs, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
