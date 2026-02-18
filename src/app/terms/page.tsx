import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | LAZO Construction LLC",
  description: "Terms and conditions for LAZO Construction LLC website.",
};

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12">
        <Container>
          <ScrollReveal>
            <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
            <h1 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl tracking-tight">
              Terms and Conditions
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
              These Terms and Conditions are effective as of December 1st, 2025.
            </p>
            
            <p className="text-text-body mt-6">
              These Terms and Conditions (<em>&quot;Terms&quot;</em>) constitute a legally binding agreement governing all access to and use of the website operated by Lazo Construction LLC, a Texas limited liability company (<em>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;</em> or <em>&quot;our&quot;</em>), including all pages, content, forms, tools, communications, uploads, and features (collectively, the <em>&quot;Site&quot;</em>).
            </p>
            
            <p className="text-text-body">
              By accessing, browsing, submitting information to, or otherwise using the Site, you affirm that you have read, understood, and agree to be bound by these Terms <em>without limitation or qualification</em>. If you do not agree, you must immediately discontinue use of the Site.
            </p>

            {/* Section 1 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              1. Website Use Is Informational Only — No Offer, No Contract, No Duty
            </h2>
            <p className="text-text-body">
              The Site is provided strictly for general informational and marketing purposes. Nothing contained on the Site shall be construed as:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>An offer to perform construction or contracting services</li>
              <li>A binding estimate, quote, or proposal</li>
              <li>A commitment to pricing, scope, materials, timelines, or availability</li>
              <li>Professional advice of any kind</li>
              <li>A guarantee of outcomes, results, or compliance</li>
            </ul>
            <p className="text-text-body mt-4">
              No contractor-client relationship, fiduciary duty, or professional obligation is created by your use of the Site or submission of information. Any services provided by the Company require a <em>separately executed written agreement</em>, signed by all parties.
            </p>

            {/* Section 2 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              2. No Reliance; User Assumes All Risk
            </h2>
            <p className="text-text-body">
              You expressly acknowledge and agree that:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Any reliance on information found on the Site is unreasonable and at your own risk</li>
              <li>Preliminary information may be incomplete, outdated, generalized, or inaccurate</li>
              <li>Conditions affecting construction projects change frequently and unpredictably</li>
            </ul>
            <p className="text-text-body mt-4">
              The Company disclaims any responsibility for decisions made based on Site content, communications, or automated responses.
            </p>

            {/* Section 3 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              3. Eligibility, Authority, and Representations
            </h2>
            <p className="text-text-body">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>You are at least eighteen (18) years of age</li>
              <li>You are legally capable of entering into binding agreements</li>
              <li>You are authorized to submit information regarding any property, project, or entity referenced</li>
              <li>Information submitted is truthful, accurate, and complete</li>
            </ul>
            <p className="text-text-body mt-4">
              Submission of false, misleading, or unauthorized information may result in denial of services and potential legal action.
            </p>

            {/* Section 4 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              4. Permitted and Prohibited Use
            </h2>
            <p className="text-text-body">
              You agree not to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Submit speculative, abusive, fraudulent, or bad-faith inquiries</li>
              <li>Use the Site to solicit competing services</li>
              <li>Reverse engineer, scrape, or harvest data</li>
              <li>Upload viruses, malware, or harmful code</li>
              <li>Interfere with Site security, availability, or integrity</li>
              <li>Attempt to access restricted systems or data</li>
            </ul>
            <p className="text-text-body mt-4">
              The Company may suspend or permanently block access <em>without notice</em> for any misuse or suspected misuse.
            </p>

            {/* Section 5 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              5. Estimates, Quotes, Pricing, and Scheduling — Explicit Non-Binding Nature
            </h2>
            <p className="text-text-body">
              Any estimates, pricing ranges, timelines, or descriptions provided through the Site, email, text, or other digital communication are:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Preliminary only</li>
              <li>Subject to change without notice</li>
              <li>Based on limited information</li>
              <li>Non-binding and non-guaranteed</li>
            </ul>
            <p className="text-text-body mt-4">
              Final pricing, scope, and scheduling depend on written contracts, site inspections, permits, material costs, labor availability, and third-party performance. The Company is <em>not obligated</em> to honor preliminary figures.
            </p>

            {/* Section 6 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              6. Construction Is Inherently Uncertain — Allocation of Risk
            </h2>
            <p className="text-text-body">
              You acknowledge that construction and remodeling inherently involve unknown and latent conditions, including but not limited to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Structural deficiencies</li>
              <li>Electrical, plumbing, or mechanical defects</li>
              <li>Prior non-code-compliant work</li>
              <li>Concealed water intrusion or mold</li>
              <li>Hazardous materials (including asbestos or lead)</li>
              <li>Soil movement, foundation instability, or drainage issues</li>
            </ul>
            <p className="text-text-body mt-4">
              The Company shall <em>not</em> be responsible for conditions that are hidden, undiscoverable, or not reasonably identifiable prior to commencement of work.
            </p>

            {/* Section 7 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              7. Permits, Inspections, and Governmental Delays
            </h2>
            <p className="text-text-body">
              Permitting, inspections, approvals, and governmental actions are outside the Company&apos;s control. Delays, rejections, re-inspections, or code changes may occur.
            </p>
            <p className="text-text-body">
              The Company makes <em>no representation or guarantee</em> regarding approval timelines, inspector availability, or governmental outcomes.
            </p>

            {/* Section 8 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              8. Subcontractors, Suppliers, and Independent Contractors
            </h2>
            <p className="text-text-body">
              The Company may retain subcontractors, suppliers, engineers, inspectors, or other third parties. All such parties are independent contractors.
            </p>
            <p className="text-text-body">
              The Company is not liable for:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Delays caused by subcontractors or suppliers</li>
              <li>Material shortages or substitutions</li>
              <li>Acts or omissions of third parties beyond contractual control</li>
            </ul>

            {/* Section 9 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              9. Website Content; &quot;As-Is&quot; Disclaimer
            </h2>
            <p className="text-text-body">
              THE SITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
            </p>
            <p className="text-text-body mt-4">
              THE COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>ACCURACY</li>
              <li>COMPLETENESS</li>
              <li>MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
            </ul>
            <p className="text-text-body mt-4">
              The Company does not warrant uninterrupted access, error-free operation, or that defects will be corrected.
            </p>

            {/* Section 10 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              10. Limitation of Liability — Texas-Maximum Protection
            </h2>
            <p className="text-text-body">
              TO THE MAXIMUM EXTENT PERMITTED BY TEXAS LAW:
            </p>
            <p className="text-text-body mt-4">
              THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>LOSS OF PROFITS</li>
              <li>DELAYS OR SUSPENSION OF WORK</li>
              <li>DIMINUTION IN PROPERTY VALUE</li>
              <li>COST OVERRUNS</li>
              <li>BUSINESS INTERRUPTION</li>
            </ul>
            <p className="text-text-body mt-4">
              REGARDLESS OF THEORY OF LIABILITY AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-text-body mt-4">
              Total liability, if any, shall not exceed the amount paid under a written agreement with the Company.
            </p>

            {/* Section 11 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              11. Indemnification — Broad and One-Sided
            </h2>
            <p className="text-text-body">
              You agree to indemnify, defend, and hold harmless the Company, its members, managers, employees, agents, and subcontractors from any claims, damages, liabilities, losses, costs, or expenses (including attorneys&apos; fees) arising out of:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Your use or misuse of the Site</li>
              <li>Information you submit</li>
              <li>Violations of these Terms</li>
              <li>Violations of law or third-party rights</li>
            </ul>

            {/* Section 12 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              12. Communications; No Confidentiality
            </h2>
            <p className="text-text-body">
              All communications through the Site are deemed non-confidential. Do not submit sensitive, proprietary, or confidential information unless expressly requested and contractually protected.
            </p>
            <p className="text-text-body">
              Electronic communications may be intercepted or misdirected, and the Company disclaims responsibility for unauthorized disclosures.
            </p>

            {/* Section 13 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              13. Force Majeure — Broadly Defined
            </h2>
            <p className="text-text-body">
              The Company shall not be liable for delays or failures caused by events beyond its reasonable control, including but not limited to:
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>Severe weather</li>
              <li>Natural disasters</li>
              <li>Labor disputes</li>
              <li>Supply chain disruptions</li>
              <li>Government actions or emergencies</li>
              <li>Utility outages</li>
              <li>Pandemics or public health events</li>
            </ul>

            {/* Section 14 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              14. Binding Arbitration and Class Action Waiver
            </h2>
            <p className="text-text-body">
              <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</strong>
            </p>
            <p className="text-text-body mt-4">
              Any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or any services provided by the Company shall be resolved by <em>binding arbitration</em> administered by the American Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration Rules, rather than in court.
            </p>
            <p className="text-text-body mt-4">
              Arbitration shall take place in the State of Texas, in a county chosen by the Company. The arbitrator&apos;s decision shall be final and binding. Judgment on the award may be entered in any court of competent jurisdiction.
            </p>
            <p className="text-text-body mt-4">
              <strong>CLASS ACTION WAIVER:</strong> You agree that any arbitration or legal proceeding shall be conducted <em>only on an individual basis</em> and not as a class action, collective action, or representative action. You expressly waive any right to participate in a class action lawsuit or class-wide arbitration against the Company.
            </p>
            <p className="text-text-body mt-4">
              If this arbitration provision is found unenforceable, the dispute shall proceed in state or federal court in Texas, and you consent to exclusive jurisdiction and venue therein.
            </p>

            {/* Section 15 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              15. Governing Law, Venue, and Jurisdiction
            </h2>
            <p className="text-text-body">
              These Terms are governed by the laws of the <strong>State of Texas</strong>, without regard to conflict-of-law principles.
            </p>
            <p className="text-text-body">
              To the extent any dispute is not subject to arbitration, it shall be brought exclusively in a state or federal court located within Texas. You irrevocably consent to jurisdiction and venue.
            </p>

            {/* Section 16 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              16. Attorneys&apos; Fees and Costs
            </h2>
            <p className="text-text-body">
              In any dispute arising from these Terms or use of the Site, the prevailing party shall be entitled to recover reasonable attorneys&apos; fees, court costs, and expenses.
            </p>

            {/* Section 17 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              17. Severability and Enforcement
            </h2>
            <p className="text-text-body">
              If any provision is found unenforceable, the remaining provisions shall remain in full force. Failure to enforce any provision does not constitute waiver.
            </p>

            {/* Section 18 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              18. Modifications and Continued Use
            </h2>
            <p className="text-text-body">
              The Company may modify these Terms at any time <em>without notice</em>. Continued use of the Site constitutes acceptance of any modifications.
            </p>

            {/* Section 19 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              19. Entire Agreement
            </h2>
            <p className="text-text-body">
              These Terms constitute the entire agreement regarding use of the Site and supersede all prior communications.
            </p>

            {/* Section 20 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              20. Intellectual Property
            </h2>
            <p className="text-text-body">
              All content on the Site, including but not limited to text, images, photographs, graphics, logos, trademarks, trade dress, page layout, and design elements, is the exclusive property of the Company or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-text-body mt-4">
              You may not reproduce, distribute, modify, create derivative works from, publicly display, republish, download, store, transmit, or otherwise use any content from the Site without the prior written consent of the Company, except for temporary caching or as necessary to view the Site for personal, non-commercial use.
            </p>
            <p className="text-text-body mt-4">
              Unauthorized use of any content may violate copyright, trademark, and other laws and is subject to legal action.
            </p>

            {/* Section 21 */}
            <h2 className="font-heading font-bold text-2xl text-text-body mt-10 mb-4">
              21. Contact Information
            </h2>
            <p className="text-text-body">
              Questions regarding these Terms may be submitted through the Site&apos;s contact form or directed to:
            </p>
            <p className="text-text-body mt-2">
              <strong>Lazo Construction LLC</strong><br />
              Email: legal@lazoconstructiontx.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
