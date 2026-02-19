import { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | LAZO Construction LLC",
  description: "Terms and conditions for LAZO Construction LLC website.",
};

export default function TermsPage() {
  return <TermsContent />;
}
