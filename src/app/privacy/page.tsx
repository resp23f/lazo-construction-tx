import { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | LAZO Construction LLC",
  description: "Privacy policy for LAZO Construction LLC website.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
