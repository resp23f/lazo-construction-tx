import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | LAZO Construction LLC",
  description: "Privacy policy for LAZO Construction LLC website.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
            <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl tracking-tight">
              Privacy Policy
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-text-body text-sm">
              Last Updated: January 15, 2026
            </p>
            
            <p className="text-text-body font-medium mt-4">
              This Privacy Policy is effective as of December 1st, 2025.
            </p>
            
            <p className="text-text-body mt-6">
              This Privacy Policy (<em>&quot;Policy&quot;</em>) describes the policies and procedures of Lazo Construction LLC (<em>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;</em> or <em>&quot;our&quot;</em>) regarding the collection, use, storage, processing, disclosure, and protection of information obtained through this website and any related online services, communications, forms, or digital tools (collectively, the <em>&quot;Site&quot;</em>).
            </p>
            
            <p className="text-text-body">
              By accessing, browsing, submitting information to, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, you must discontinue use of the Site immediately.
            </p>

            {/* Section 1 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              1. Scope, Intent, and Applicability
            </h2>
            <p className="text-text-body">
              This Privacy Policy applies solely to information collected through the Site and related digital interactions. It does not apply to information collected through offline means, including but not limited to phone calls, in-person meetings, written contracts, job sites, inspections, proposals, invoices, or other business dealings unless expressly stated otherwise.
            </p>
            <p className="text-text-body">
              This Policy is intended to comply with applicable United States and Texas privacy laws; however, it is not intended to create any contractual or legal rights beyond those required by law.
            </p>
            <p className="text-text-body">
              Use of the Site does not establish a contractor-client, fiduciary, professional, or confidential relationship unless and until a written agreement is <em>fully executed</em> by all parties.
            </p>

            {/* Section 2 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              2. Categories of Information We Collect
            </h2>
            
            <h3 className="font-heading font-semibold text-xl text-text-body mt-6 mb-3">
              2.1 Information Voluntarily Provided by You
            </h3>
            <p className="text-text-body">
              We may collect personal or business information that you knowingly and voluntarily provide, including but not limited to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Legal name, business name, or entity name</li>
              <li>Email address and telephone number</li>
              <li>Mailing address, billing address, or project location</li>
              <li>Property details, project descriptions, budgets, timelines, or scope information</li>
              <li>Photos, plans, drawings, permits, documents, or attachments</li>
              <li>Communications submitted through forms, emails, or messaging tools</li>
              <li>Any other information you choose to disclose</li>
            </ul>
            <p className="text-text-body mt-4">
              You acknowledge that any information you submit is provided at your own discretion and risk. You are solely responsible for ensuring the accuracy and completeness of submitted information.
            </p>

            <h3 className="font-heading font-semibold text-xl text-text-body mt-6 mb-3">
              2.2 Automatically Collected Technical and Usage Information
            </h3>
            <p className="text-text-body">
              When you access the Site, we may automatically collect certain non-identifying or technical data, including:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>IP address and general geographic location</li>
              <li>Browser type, device type, and operating system</li>
              <li>Access times, referring URLs, and exit pages</li>
              <li>Pages viewed, interactions, and usage patterns</li>
              <li>Error logs, performance metrics, and security signals</li>
            </ul>
            <p className="text-text-body mt-4">
              This information is collected to maintain site functionality, ensure security, diagnose issues, improve performance, and support internal analytics.
            </p>

            {/* Section 3 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              3. Cookies, Analytics, and Tracking Technologies
            </h2>
            <p className="text-text-body">
              The Site may utilize cookies, server logs, pixels, or similar technologies that are necessary for:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Core functionality and navigation</li>
              <li>Site security and fraud prevention</li>
              <li>Performance optimization and error detection</li>
            </ul>
            <p className="text-text-body mt-4">
              We do not knowingly use tracking technologies for targeted advertising or sell behavioral data. Disabling cookies through browser settings may impair certain Site features, and we are not responsible for any resulting loss of functionality.
            </p>

            {/* Section 4 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              4. Purpose and Use of Collected Information
            </h2>
            <p className="text-text-body">
              We may use collected information for legitimate business purposes, including but not limited to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Responding to inquiries, requests, or communications</li>
              <li>Preparing and delivering estimates, bids, or proposals</li>
              <li>Evaluating project feasibility and scope</li>
              <li>Communicating regarding scheduling, services, or changes</li>
              <li>Maintaining internal records and documentation</li>
              <li>Enhancing site security, performance, and usability</li>
              <li>Preventing misuse, fraud, or unauthorized access</li>
              <li>Complying with applicable laws, regulations, or legal obligations</li>
            </ul>
            <p className="text-text-body mt-4">
              Information submitted through the Site does not constitute acceptance of any offer, agreement, or obligation by the Company.
            </p>

            {/* Section 5 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              5. Disclosure and Sharing of Information
            </h2>
            
            <h3 className="font-heading font-semibold text-xl text-text-body mt-6 mb-3">
              5.1 No Commercial Sale of Personal Information
            </h3>
            <p className="text-text-body">
              We do not sell, rent, lease, or trade personal information to third parties for commercial or marketing purposes. <em>We do not sell your data.</em>
            </p>

            <h3 className="font-heading font-semibold text-xl text-text-body mt-6 mb-3">
              5.2 Third-Party Service Providers
            </h3>
            <p className="text-text-body">
              We may disclose information to third-party vendors, contractors, or service providers who assist with website hosting, data storage, communications, security, analytics, or operational support. Such disclosures are limited to what is reasonably necessary, and providers are required to maintain appropriate confidentiality and safeguards.
            </p>

            <h3 className="font-heading font-semibold text-xl text-text-body mt-6 mb-3">
              5.3 Legal, Regulatory, and Protective Disclosures
            </h3>
            <p className="text-text-body">
              We may disclose information when we determine, <em>in good faith</em>, that disclosure is necessary or appropriate to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Comply with applicable law, regulation, subpoena, or court order</li>
              <li>Respond to lawful governmental or regulatory requests</li>
              <li>Enforce contracts, policies, or legal rights</li>
              <li>Investigate or prevent fraud, misuse, or security incidents</li>
              <li>Protect the rights, property, safety, or interests of the Company, users, or others</li>
            </ul>

            {/* Section 6 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              6. Data Retention and Storage
            </h2>
            <p className="text-text-body">
              We retain personal information only for as long as reasonably necessary to fulfill business, legal, regulatory, or contractual purposes. Retention periods may vary based on:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Nature and sensitivity of the information</li>
              <li>Legal or regulatory requirements</li>
              <li>Ongoing or potential disputes</li>
              <li>Internal recordkeeping needs</li>
            </ul>
            <p className="text-text-body mt-4">
              We reserve the right to delete information at our discretion unless retention is legally required.
            </p>

            {/* Section 7 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              7. Data Security and Risk Acknowledgment
            </h2>
            <p className="text-text-body">
              We implement commercially reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-text-body">
              However, <em>no method of transmission over the internet or electronic storage is completely secure</em>. You acknowledge and accept that:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Transmission of information is at your own risk</li>
              <li>We cannot guarantee absolute security</li>
              <li>We are not responsible for breaches beyond our reasonable control</li>
            </ul>

            {/* Section 8 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              8. No Confidentiality or Professional Reliance
            </h2>
            <p className="text-text-body">
              Information submitted through the Site is <em>not</em> considered confidential unless expressly agreed to in writing. Do not submit proprietary, sensitive, or confidential information unless requested and contractually protected.
            </p>
            <p className="text-text-body">
              Nothing on the Site constitutes legal advice, construction advice, engineering advice, architectural advice, or a <em>guarantee</em> of services, pricing, timelines, or outcomes.
            </p>

            {/* Section 9 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              9. Third-Party Websites and External Services
            </h2>
            <p className="text-text-body">
              The Site may contain links to third-party websites or services. We do not control and are not responsible for the privacy practices, content, accuracy, or security of third-party sites. Accessing third-party resources is at your own risk.
            </p>

            {/* Section 10 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-text-body">
              The Site is not directed to individuals under the age of eighteen (18). We do not knowingly collect personal information from minors. If we become aware that such information has been collected, we will take reasonable steps to remove it.
            </p>

            {/* Section 11 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              11. Geographic Scope and Jurisdiction
            </h2>
            <p className="text-text-body">
              The Site is operated in the United States and intended for U.S. users. This Privacy Policy is governed by the laws of the State of Texas, without regard to conflict-of-law principles.
            </p>

            {/* Section 12 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              12. Limitation of Liability
            </h2>
            <p className="text-text-body">
              To the <em>maximum extent permitted by law</em>, the Company disclaims liability for damages arising from:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Use or inability to use the Site</li>
              <li>Unauthorized access to or disclosure of information</li>
              <li>Errors, omissions, or interruptions</li>
              <li>Reliance on information submitted or received</li>
            </ul>

            {/* Section 13 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              13. Policy Modifications
            </h2>
            <p className="text-text-body">
              We reserve the right to modify this Privacy Policy at any time <em>without prior notice</em>. Updates are effective immediately upon posting. Continued use of the Site constitutes acceptance of any revised terms.
            </p>

            {/* Section 14 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              14. Contact Information
            </h2>
            <p className="text-text-body">
              Questions regarding this Privacy Policy may be submitted through the Site&apos;s contact form or directed to:
            </p>
            <p className="text-text-body mt-2">
              <strong>Lazo Construction LLC</strong><br />
              Email: privacy@lazoconstructiontx.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
