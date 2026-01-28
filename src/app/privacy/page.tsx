import { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | LAZO Construction LLC",
  description: "Privacy policy for LAZO Construction LLC website.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-text-muted">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-text-muted">
              When you use our contact form, we collect the information you provide, including your name, email address, phone number (if provided), and message content. This information is used solely to respond to your inquiry and provide the services you request.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-text-muted">
              We use the information you provide to:
            </p>
            <ul className="text-text-muted list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and requests</li>
              <li>Provide estimates and quotes for construction services</li>
              <li>Communicate about projects and services</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="text-text-muted">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-text-muted">
              Our website uses minimal cookies necessary for basic functionality. We do not use tracking cookies or third-party advertising cookies.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-text-muted">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-text-muted">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-text-muted">
              Email: info@lazoconstructiontx.com<br />
              Phone: (281) 406-6787
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
