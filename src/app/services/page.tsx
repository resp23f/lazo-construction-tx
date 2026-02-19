import { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | LAZO Construction LLC | Texas Contractor",
  description:
    "From kitchen remodels to commercial build outs, we deliver quality construction across Texas. Residential and commercial services available.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
