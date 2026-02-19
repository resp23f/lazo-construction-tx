import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | LAZO Construction LLC | Texas Contractor",
  description:
    "Contact LAZO Construction for a free quote. Serving Austin, Houston, Manor, and Central Texas. Call (281) 406-6787 or fill out our contact form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
