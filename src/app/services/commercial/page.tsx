import { Metadata } from "next";
import CommercialContent from "@/components/services/CommercialContent";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Professional commercial construction services in Austin, Houston, and Central Texas. Office build outs, retail renovations, commercial painting, and more.",
  alternates: { canonical: "/services/commercial" },
};

export default function CommercialServicesPage() {
  return <CommercialContent />;
}
