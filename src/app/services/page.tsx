import { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From kitchen remodels to commercial build outs, we deliver quality construction across Texas. Residential and commercial services available.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
