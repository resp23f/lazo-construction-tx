import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | LAZO Construction LLC | Texas Contractor",
  description:
    "Learn about LAZO Construction LLC. 20+ years of construction experience serving Austin, Houston, and Central Texas. Licensed and insured general contractor.",
};

export default function AboutPage() {
  return <AboutContent />;
}
