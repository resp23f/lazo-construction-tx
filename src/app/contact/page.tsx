import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | LAZO Construction LLC | Texas Contractor",
  description:
    "Contact LAZO Construction for a free quote. Serving Austin, Houston, Manor, and Central Texas. Call (281) 406-6787 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Ready to discuss your project? Get in touch today.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface p-8 border border-gray-100">
                <h2 className="font-heading font-bold text-2xl text-text mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-surface p-8 border border-gray-100">
                <ContactInfo />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
