import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LAZO Construction LLC. 20+ years of construction experience serving Austin, Houston, and Central Texas. Licensed and insured general contractor.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
