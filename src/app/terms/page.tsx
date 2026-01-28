import { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service | LAZO Construction LLC",
  description: "Terms of service for LAZO Construction LLC website.",
};

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
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
              Website Use
            </h2>
            <p className="text-text-muted">
              By accessing and using the LAZO Construction LLC website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Information Accuracy
            </h2>
            <p className="text-text-muted">
              We strive to provide accurate and up-to-date information on our website. However, we make no warranties or representations about the accuracy, reliability, or completeness of any information on this site. Information, including pricing and availability, is subject to change without notice.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Services
            </h2>
            <p className="text-text-muted">
              The services described on this website are general descriptions of the construction services we offer. Actual services, pricing, and availability may vary based on project specifics, location, and other factors. All projects require a formal estimate and agreement before work begins.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Intellectual Property
            </h2>
            <p className="text-text-muted">
              All content on this website, including text, images, logos, and design elements, is the property of LAZO Construction LLC and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-text-muted">
              LAZO Construction LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              External Links
            </h2>
            <p className="text-text-muted">
              Our website may contain links to external websites. We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Changes to Terms
            </h2>
            <p className="text-text-muted">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-text-muted">
              If you have questions about these Terms of Service, please contact us at:
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
