import { Metadata } from "next";
import ResidentialContent from "@/components/services/ResidentialContent";

export const metadata: Metadata = {
  title: "Residential Services | LAZO Construction LLC | Texas Contractor",
  description:
    "Professional residential construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, room additions, painting, and more.",
};

export default function ResidentialServicesPage() {
  return <ResidentialContent />;
}
