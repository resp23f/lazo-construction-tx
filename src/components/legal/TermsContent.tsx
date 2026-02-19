"use client";

import Container from "@/components/layout/Container";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <LegalPageHeader titleEn="Terms and Conditions" titleEs="Términos y Condiciones" />

      <section className="py-12 sm:py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm sm:prose-lg">
            <p className="text-text-body text-sm">
              {es ? "Última actualización: 15 de enero de 2026" : "Last Updated: January 15, 2026"}
            </p>
            <p className="text-text-body font-medium mt-4">
              {es
                ? "Estos Términos y Condiciones son efectivos a partir del 1 de diciembre de 2025."
                : "These Terms and Conditions are effective as of December 1st, 2025."}
            </p>
            <p className="text-text-body mt-6">
              {es
                ? <>Estos Términos y Condiciones (<em>&quot;Términos&quot;</em>) constituyen un acuerdo legalmente vinculante que rige todo acceso y uso del sitio web operado por Lazo Construction LLC, una compañía de responsabilidad limitada de Texas (<em>&quot;Compañía,&quot; &quot;nosotros,&quot;</em> o <em>&quot;nuestro&quot;</em>), incluyendo todas las páginas, contenido, formularios, herramientas, comunicaciones, cargas y funciones (colectivamente, el <em>&quot;Sitio&quot;</em>).</>
                : <>These Terms and Conditions (<em>&quot;Terms&quot;</em>) constitute a legally binding agreement governing all access to and use of the website operated by Lazo Construction LLC, a Texas limited liability company (<em>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;</em> or <em>&quot;our&quot;</em>), including all pages, content, forms, tools, communications, uploads, and features (collectively, the <em>&quot;Site&quot;</em>).</>}
            </p>
            <p className="text-text-body">
              {es
                ? <>Al acceder, navegar, enviar información o usar el Sitio de cualquier manera, usted afirma que ha leído, comprendido y acepta estar sujeto a estos Términos <em>sin limitación ni restricción</em>. Si no está de acuerdo, debe dejar de usar el Sitio inmediatamente.</>
                : <>By accessing, browsing, submitting information to, or otherwise using the Site, you affirm that you have read, understood, and agree to be bound by these Terms <em>without limitation or qualification</em>. If you do not agree, you must immediately discontinue use of the Site.</>}
            </p>

            {/* Section 1 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "1. El Uso del Sitio es Solo Informativo — Sin Oferta, Sin Contrato, Sin Obligación" : "1. Website Use Is Informational Only — No Offer, No Contract, No Duty"}
            </h2>
            <p className="text-text-body">
              {es
                ? "El Sitio se proporciona estrictamente con fines informativos generales y de marketing. Nada contenido en el Sitio se interpretará como:"
                : "The Site is provided strictly for general informational and marketing purposes. Nothing contained on the Site shall be construed as:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Una oferta para realizar servicios de construcción o contratación" : "An offer to perform construction or contracting services"}</li>
              <li>{es ? "Un estimado, cotización o propuesta vinculante" : "A binding estimate, quote, or proposal"}</li>
              <li>{es ? "Un compromiso de precios, alcance, materiales, plazos o disponibilidad" : "A commitment to pricing, scope, materials, timelines, or availability"}</li>
              <li>{es ? "Asesoría profesional de ningún tipo" : "Professional advice of any kind"}</li>
              <li>{es ? "Una garantía de resultados o cumplimiento" : "A guarantee of outcomes, results, or compliance"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? <>No se crea ninguna relación contratista-cliente, deber fiduciario u obligación profesional por su uso del Sitio. Cualquier servicio proporcionado por la Compañía requiere un <em>acuerdo escrito separado firmado</em> por todas las partes.</>
                : <>No contractor-client relationship, fiduciary duty, or professional obligation is created by your use of the Site or submission of information. Any services provided by the Company require a <em>separately executed written agreement</em>, signed by all parties.</>}
            </p>

            {/* Section 2 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "2. Sin Dependencia; El Usuario Asume Todo el Riesgo" : "2. No Reliance; User Assumes All Risk"}
            </h2>
            <p className="text-text-body">
              {es ? "Usted reconoce y acepta expresamente que:" : "You expressly acknowledge and agree that:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Cualquier dependencia de información encontrada en el Sitio es irrazonable y bajo su propio riesgo" : "Any reliance on information found on the Site is unreasonable and at your own risk"}</li>
              <li>{es ? "La información preliminar puede estar incompleta, desactualizada, generalizada o ser inexacta" : "Preliminary information may be incomplete, outdated, generalized, or inaccurate"}</li>
              <li>{es ? "Las condiciones que afectan proyectos de construcción cambian frecuente e impredeciblemente" : "Conditions affecting construction projects change frequently and unpredictably"}</li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "3. Elegibilidad, Autoridad y Representaciones" : "3. Eligibility, Authority, and Representations"}
            </h2>
            <p className="text-text-body">
              {es ? "Al usar el Sitio, usted representa y garantiza que:" : "By using the Site, you represent and warrant that:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Tiene al menos dieciocho (18) años de edad" : "You are at least eighteen (18) years of age"}</li>
              <li>{es ? "Es legalmente capaz de celebrar acuerdos vinculantes" : "You are legally capable of entering into binding agreements"}</li>
              <li>{es ? "Está autorizado para enviar información sobre cualquier propiedad, proyecto o entidad referenciada" : "You are authorized to submit information regarding any property, project, or entity referenced"}</li>
              <li>{es ? "La información enviada es veraz, precisa y completa" : "Information submitted is truthful, accurate, and complete"}</li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "4. Uso Permitido y Prohibido" : "4. Permitted and Prohibited Use"}
            </h2>
            <p className="text-text-body">
              {es ? "Usted acepta no:" : "You agree not to:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Enviar consultas especulativas, abusivas, fraudulentas o de mala fe" : "Submit speculative, abusive, fraudulent, or bad-faith inquiries"}</li>
              <li>{es ? "Usar el Sitio para solicitar servicios competidores" : "Use the Site to solicit competing services"}</li>
              <li>{es ? "Realizar ingeniería inversa, extraer o recopilar datos" : "Reverse engineer, scrape, or harvest data"}</li>
              <li>{es ? "Cargar virus, malware o código dañino" : "Upload viruses, malware, or harmful code"}</li>
              <li>{es ? "Interferir con la seguridad, disponibilidad o integridad del Sitio" : "Interfere with Site security, availability, or integrity"}</li>
              <li>{es ? "Intentar acceder a sistemas o datos restringidos" : "Attempt to access restricted systems or data"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? <> La Compañía puede suspender o bloquear permanentemente el acceso <em>sin previo aviso</em> por cualquier uso indebido.</>
                : <>The Company may suspend or permanently block access <em>without notice</em> for any misuse or suspected misuse.</>}
            </p>

            {/* Section 5 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "5. Estimados, Cotizaciones, Precios y Programación — Naturaleza Explícitamente No Vinculante" : "5. Estimates, Quotes, Pricing, and Scheduling — Explicit Non-Binding Nature"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Cualquier estimado, rango de precios, plazos o descripciones proporcionados a través del Sitio, correo electrónico, texto u otra comunicación digital son:"
                : "Any estimates, pricing ranges, timelines, or descriptions provided through the Site, email, text, or other digital communication are:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Solo preliminares" : "Preliminary only"}</li>
              <li>{es ? "Sujetos a cambios sin previo aviso" : "Subject to change without notice"}</li>
              <li>{es ? "Basados en información limitada" : "Based on limited information"}</li>
              <li>{es ? "No vinculantes y no garantizados" : "Non-binding and non-guaranteed"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? <>Los precios finales, alcance y programación dependen de contratos escritos, inspecciones del sitio, permisos, costos de materiales, disponibilidad de mano de obra y desempeño de terceros. La Compañía <em>no está obligada</em> a honrar cifras preliminares.</>
                : <>Final pricing, scope, and scheduling depend on written contracts, site inspections, permits, material costs, labor availability, and third-party performance. The Company is <em>not obligated</em> to honor preliminary figures.</>}
            </p>

            {/* Section 6 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "6. La Construcción es Inherentemente Incierta — Asignación de Riesgo" : "6. Construction Is Inherently Uncertain — Allocation of Risk"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Usted reconoce que la construcción y remodelación implican inherentemente condiciones desconocidas y latentes, incluyendo pero no limitado a:"
                : "You acknowledge that construction and remodeling inherently involve unknown and latent conditions, including but not limited to:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Deficiencias estructurales" : "Structural deficiencies"}</li>
              <li>{es ? "Defectos eléctricos, de plomería o mecánicos" : "Electrical, plumbing, or mechanical defects"}</li>
              <li>{es ? "Trabajo previo que no cumple con códigos" : "Prior non-code-compliant work"}</li>
              <li>{es ? "Intrusión de agua oculta o moho" : "Concealed water intrusion or mold"}</li>
              <li>{es ? "Materiales peligrosos (incluyendo asbesto o plomo)" : "Hazardous materials (including asbestos or lead)"}</li>
              <li>{es ? "Movimiento del suelo, inestabilidad de cimientos o problemas de drenaje" : "Soil movement, foundation instability, or drainage issues"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? <>La Compañía <em>no</em> será responsable de condiciones ocultas, no descubribles o no razonablemente identificables antes del inicio del trabajo.</>
                : <>The Company shall <em>not</em> be responsible for conditions that are hidden, undiscoverable, or not reasonably identifiable prior to commencement of work.</>}
            </p>

            {/* Section 7 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "7. Permisos, Inspecciones y Retrasos Gubernamentales" : "7. Permits, Inspections, and Governmental Delays"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Los permisos, inspecciones, aprobaciones y acciones gubernamentales están fuera del control de la Compañía. Pueden ocurrir retrasos, rechazos, reinspecciones o cambios en los códigos."
                : "Permitting, inspections, approvals, and governmental actions are outside the Company's control. Delays, rejections, re-inspections, or code changes may occur."}
            </p>
            <p className="text-text-body">
              {es
                ? <> La Compañía no hace <em>ninguna representación o garantía</em> con respecto a plazos de aprobación, disponibilidad de inspectores o resultados gubernamentales.</>
                : <>The Company makes <em>no representation or guarantee</em> regarding approval timelines, inspector availability, or governmental outcomes.</>}
            </p>

            {/* Section 8 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "8. Subcontratistas, Proveedores y Contratistas Independientes" : "8. Subcontractors, Suppliers, and Independent Contractors"}
            </h2>
            <p className="text-text-body">
              {es
                ? "La Compañía puede contratar subcontratistas, proveedores, ingenieros, inspectores u otros terceros. Todos estos son contratistas independientes. La Compañía no es responsable de retrasos causados por subcontratistas o proveedores, escasez o sustitución de materiales, ni actos u omisiones de terceros fuera del control contractual."
                : "The Company may retain subcontractors, suppliers, engineers, inspectors, or other third parties. All such parties are independent contractors. The Company is not liable for delays caused by subcontractors or suppliers, material shortages or substitutions, or acts or omissions of third parties beyond contractual control."}
            </p>

            {/* Section 9 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "9. Contenido del Sitio; Descargo de Responsabilidad \"Tal Cual\"" : "9. Website Content; \"As-Is\" Disclaimer"}
            </h2>
            <p className="text-text-body">
              {es
                ? "EL SITIO Y TODO SU CONTENIDO SE PROPORCIONAN \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\". LA COMPAÑÍA NO OFRECE GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A: PRECISIÓN, INTEGRIDAD, COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NI NO INFRACCIÓN."
                : "THE SITE AND ALL CONTENT ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" THE COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: ACCURACY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT."}
            </p>

            {/* Section 10 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "10. Limitación de Responsabilidad — Protección Máxima de Texas" : "10. Limitation of Liability — Texas-Maximum Protection"}
            </h2>
            <p className="text-text-body">
              {es
                ? "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY DE TEXAS: LA COMPAÑÍA NO SERÁ RESPONSABLE POR DAÑOS INDIRECTOS, INCIDENTALES, CONSECUENTES, EJEMPLARES O PUNITIVOS, INCLUYENDO: PÉRDIDA DE GANANCIAS, RETRASOS O SUSPENSIÓN DE TRABAJO, DISMINUCIÓN DEL VALOR DE LA PROPIEDAD, EXCESOS DE COSTOS, INTERRUPCIÓN DEL NEGOCIO."
                : "TO THE MAXIMUM EXTENT PERMITTED BY TEXAS LAW: THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING: LOSS OF PROFITS, DELAYS OR SUSPENSION OF WORK, DIMINUTION IN PROPERTY VALUE, COST OVERRUNS, BUSINESS INTERRUPTION."}
            </p>
            <p className="text-text-body mt-4">
              {es
                ? "La responsabilidad total, si la hubiera, no excederá el monto pagado bajo un acuerdo escrito con la Compañía."
                : "Total liability, if any, shall not exceed the amount paid under a written agreement with the Company."}
            </p>

            {/* Section 11 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "11. Indemnización" : "11. Indemnification — Broad and One-Sided"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Usted acepta indemnizar, defender y eximir de responsabilidad a la Compañía, sus miembros, gerentes, empleados, agentes y subcontratistas de cualquier reclamo, daño, responsabilidad, pérdida, costo o gasto (incluyendo honorarios de abogados) que surja de su uso o mal uso del Sitio, información que envíe, violaciones de estos Términos, o violaciones de la ley o derechos de terceros."
                : "You agree to indemnify, defend, and hold harmless the Company, its members, managers, employees, agents, and subcontractors from any claims, damages, liabilities, losses, costs, or expenses (including attorneys' fees) arising out of your use or misuse of the Site, information you submit, violations of these Terms, or violations of law or third-party rights."}
            </p>

            {/* Section 12 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "12. Comunicaciones; Sin Confidencialidad" : "12. Communications; No Confidentiality"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Todas las comunicaciones a través del Sitio se consideran no confidenciales. No envíe información sensible, propietaria o confidencial a menos que sea expresamente solicitada y protegida contractualmente."
                : "All communications through the Site are deemed non-confidential. Do not submit sensitive, proprietary, or confidential information unless expressly requested and contractually protected."}
            </p>

            {/* Section 13 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "13. Fuerza Mayor" : "13. Force Majeure — Broadly Defined"}
            </h2>
            <p className="text-text-body">
              {es
                ? "La Compañía no será responsable de retrasos o fallos causados por eventos fuera de su control razonable, incluyendo pero no limitado a: clima severo, desastres naturales, disputas laborales, interrupciones en la cadena de suministro, acciones gubernamentales o emergencias, cortes de servicios públicos, pandemias o eventos de salud pública."
                : "The Company shall not be liable for delays or failures caused by events beyond its reasonable control, including but not limited to: severe weather, natural disasters, labor disputes, supply chain disruptions, government actions or emergencies, utility outages, pandemics or public health events."}
            </p>

            {/* Section 14 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "14. Arbitraje Vinculante y Renuncia a Acción Colectiva" : "14. Binding Arbitration and Class Action Waiver"}
            </h2>
            <p className="text-text-body">
              <strong>{es ? "LEA ESTA SECCIÓN CUIDADOSAMENTE. AFECTA SUS DERECHOS LEGALES." : "PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS."}</strong>
            </p>
            <p className="text-text-body mt-4">
              {es
                ? <>Cualquier disputa, reclamo o controversia que surja de estos Términos, el Sitio o cualquier servicio proporcionado por la Compañía se resolverá mediante <em>arbitraje vinculante</em> administrado por la Asociación Americana de Arbitraje (&quot;AAA&quot;) de acuerdo con sus Reglas de Arbitraje Comercial. El arbitraje se llevará a cabo en el Estado de Texas.</>
                : <>Any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or any services provided by the Company shall be resolved by <em>binding arbitration</em> administered by the American Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration Rules. Arbitration shall take place in the State of Texas.</>}
            </p>
            <p className="text-text-body mt-4">
              <strong>{es ? "RENUNCIA A ACCIÓN COLECTIVA:" : "CLASS ACTION WAIVER:"}</strong>{" "}
              {es
                ? <>Usted acepta que cualquier arbitraje o procedimiento legal se realizará <em>solo de forma individual</em> y no como acción colectiva, acción grupal o acción representativa. Usted renuncia expresamente a cualquier derecho de participar en una demanda colectiva contra la Compañía.</>
                : <>You agree that any arbitration or legal proceeding shall be conducted <em>only on an individual basis</em> and not as a class action, collective action, or representative action. You expressly waive any right to participate in a class action lawsuit or class-wide arbitration against the Company.</>}
            </p>

            {/* Section 15 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "15. Ley Aplicable, Jurisdicción y Competencia" : "15. Governing Law, Venue, and Jurisdiction"}
            </h2>
            <p className="text-text-body">
              {es
                ? <>Estos Términos se rigen por las leyes del <strong>Estado de Texas</strong>, sin considerar principios de conflicto de leyes. En la medida en que cualquier disputa no esté sujeta a arbitraje, se presentará exclusivamente en un tribunal estatal o federal ubicado en Texas.</>
                : <>These Terms are governed by the laws of the <strong>State of Texas</strong>, without regard to conflict-of-law principles. To the extent any dispute is not subject to arbitration, it shall be brought exclusively in a state or federal court located within Texas.</>}
            </p>

            {/* Section 16 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "16. Honorarios de Abogados y Costos" : "16. Attorneys' Fees and Costs"}
            </h2>
            <p className="text-text-body">
              {es
                ? "En cualquier disputa que surja de estos Términos o uso del Sitio, la parte ganadora tendrá derecho a recuperar honorarios razonables de abogados, costos judiciales y gastos."
                : "In any dispute arising from these Terms or use of the Site, the prevailing party shall be entitled to recover reasonable attorneys' fees, court costs, and expenses."}
            </p>

            {/* Section 17 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "17. Divisibilidad y Aplicación" : "17. Severability and Enforcement"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Si alguna disposición resulta inaplicable, las disposiciones restantes permanecerán en pleno vigor. La falta de aplicación de cualquier disposición no constituye renuncia."
                : "If any provision is found unenforceable, the remaining provisions shall remain in full force. Failure to enforce any provision does not constitute waiver."}
            </p>

            {/* Section 18 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "18. Modificaciones y Uso Continuado" : "18. Modifications and Continued Use"}
            </h2>
            <p className="text-text-body">
              {es
                ? <> La Compañía puede modificar estos Términos en cualquier momento <em>sin previo aviso</em>. El uso continuado del Sitio constituye aceptación de cualquier modificación.</>
                : <>The Company may modify these Terms at any time <em>without notice</em>. Continued use of the Site constitutes acceptance of any modifications.</>}
            </p>

            {/* Section 19 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "19. Acuerdo Completo" : "19. Entire Agreement"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Estos Términos constituyen el acuerdo completo con respecto al uso del Sitio y reemplazan todas las comunicaciones anteriores."
                : "These Terms constitute the entire agreement regarding use of the Site and supersede all prior communications."}
            </p>

            {/* Section 20 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "20. Propiedad Intelectual" : "20. Intellectual Property"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Todo el contenido del Sitio, incluyendo pero no limitado a texto, imágenes, fotografías, gráficos, logotipos, marcas comerciales, diseño de páginas y elementos de diseño, es propiedad exclusiva de la Compañía o sus licenciantes y está protegido por las leyes de propiedad intelectual de Estados Unidos e internacionales."
                : "All content on the Site, including but not limited to text, images, photographs, graphics, logos, trademarks, trade dress, page layout, and design elements, is the exclusive property of the Company or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws."}
            </p>
            <p className="text-text-body mt-4">
              {es
                ? "Usted no puede reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, republicar, descargar, almacenar, transmitir o usar de otra manera cualquier contenido del Sitio sin el consentimiento previo por escrito de la Compañía."
                : "You may not reproduce, distribute, modify, create derivative works from, publicly display, republish, download, store, transmit, or otherwise use any content from the Site without the prior written consent of the Company, except for temporary caching or as necessary to view the Site for personal, non-commercial use."}
            </p>

            {/* Section 21 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "21. Información de Contacto" : "21. Contact Information"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Preguntas sobre estos Términos pueden enviarse a través del formulario de contacto del Sitio o dirigirse a:"
                : "Questions regarding these Terms may be submitted through the Site's contact form or directed to:"}
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
