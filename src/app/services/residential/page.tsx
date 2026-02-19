import { Metadata } from "next";
import ResidentialContent from "@/components/services/ResidentialContent";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Professional residential construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, room additions, painting, and more.",
  alternates: { canonical: "/services/residential" },
};

export default function ResidentialServicesPage() {
  return <ResidentialContent />;
}
