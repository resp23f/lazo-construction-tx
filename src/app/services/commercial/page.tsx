import { Metadata } from "next";
import CommercialContent from "@/components/services/CommercialContent";

export const metadata: Metadata = {
  title: "Commercial Services | LAZO Construction LLC | Texas Contractor",
  description:
    "Professional commercial construction services in Austin, Houston, and Central Texas. Office build outs, retail renovations, commercial painting, and more.",
};

export default function CommercialServicesPage() {
  return <CommercialContent />;
}
