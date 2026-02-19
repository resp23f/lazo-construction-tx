"use client";

import Container from "@/components/layout/Container";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyContent() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <LegalPageHeader titleEn="Privacy Policy" titleEs="Política de Privacidad" />

      <section className="py-12 sm:py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm sm:prose-lg">
            <p className="text-text-body text-sm">
              {es ? "Última actualización: 15 de enero de 2026" : "Last Updated: January 15, 2026"}
            </p>
            <p className="text-text-body font-medium mt-4">
              {es
                ? "Esta Política de Privacidad es efectiva a partir del 1 de diciembre de 2025."
                : "This Privacy Policy is effective as of December 1st, 2025."}
            </p>
            <p className="text-text-body mt-6">
              {es
                ? <>Esta Política de Privacidad (<em>&quot;Política&quot;</em>) describe las políticas y procedimientos de Lazo Construction LLC (<em>&quot;Compañía,&quot; &quot;nosotros,&quot;</em> o <em>&quot;nuestro&quot;</em>) con respecto a la recopilación, uso, almacenamiento, procesamiento, divulgación y protección de información obtenida a través de este sitio web y cualquier servicio en línea relacionado, comunicaciones, formularios o herramientas digitales (colectivamente, el <em>&quot;Sitio&quot;</em>).</>
                : <>This Privacy Policy (<em>&quot;Policy&quot;</em>) describes the policies and procedures of Lazo Construction LLC (<em>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;</em> or <em>&quot;our&quot;</em>) regarding the collection, use, storage, processing, disclosure, and protection of information obtained through this website and any related online services, communications, forms, or digital tools (collectively, the <em>&quot;Site&quot;</em>).</>}
            </p>
            <p className="text-text-body">
              {es
                ? "Al acceder, navegar, enviar información o usar el Sitio de cualquier manera, usted reconoce que ha leído, comprendido y acepta estar sujeto a esta Política de Privacidad. Si no está de acuerdo, debe dejar de usar el Sitio inmediatamente."
                : "By accessing, browsing, submitting information to, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, you must discontinue use of the Site immediately."}
            </p>

            {/* Section 1 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "1. Alcance, Intención y Aplicabilidad" : "1. Scope, Intent, and Applicability"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Esta Política de Privacidad se aplica únicamente a la información recopilada a través del Sitio e interacciones digitales relacionadas. No se aplica a información recopilada por medios fuera de línea, incluyendo pero no limitado a llamadas telefónicas, reuniones en persona, contratos escritos, sitios de trabajo, inspecciones, propuestas, facturas u otros tratos comerciales a menos que se indique expresamente lo contrario."
                : "This Privacy Policy applies solely to information collected through the Site and related digital interactions. It does not apply to information collected through offline means, including but not limited to phone calls, in-person meetings, written contracts, job sites, inspections, proposals, invoices, or other business dealings unless expressly stated otherwise."}
            </p>
            <p className="text-text-body">
              {es
                ? "Esta Política tiene la intención de cumplir con las leyes de privacidad aplicables de Estados Unidos y Texas; sin embargo, no tiene la intención de crear derechos contractuales o legales más allá de los requeridos por la ley."
                : "This Policy is intended to comply with applicable United States and Texas privacy laws; however, it is not intended to create any contractual or legal rights beyond those required by law."}
            </p>
            <p className="text-text-body">
              {es
                ? <>El uso del Sitio no establece una relación contratista-cliente, fiduciaria, profesional o confidencial a menos y hasta que un acuerdo escrito sea <em>completamente ejecutado</em> por todas las partes.</>
                : <>Use of the Site does not establish a contractor-client, fiduciary, professional, or confidential relationship unless and until a written agreement is <em>fully executed</em> by all parties.</>}
            </p>

            {/* Section 2 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "2. Categorías de Información que Recopilamos" : "2. Categories of Information We Collect"}
            </h2>
            <h3 className="font-heading font-semibold text-base sm:text-xl text-text-body mt-5 sm:mt-6 mb-2 sm:mb-3">
              {es ? "2.1 Información Proporcionada Voluntariamente por Usted" : "2.1 Information Voluntarily Provided by You"}
            </h3>
            <p className="text-text-body">
              {es
                ? "Podemos recopilar información personal o comercial que usted proporcione voluntariamente, incluyendo pero no limitado a:"
                : "We may collect personal or business information that you knowingly and voluntarily provide, including but not limited to:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Nombre legal, nombre comercial o nombre de entidad" : "Legal name, business name, or entity name"}</li>
              <li>{es ? "Dirección de correo electrónico y número de teléfono" : "Email address and telephone number"}</li>
              <li>{es ? "Dirección postal, dirección de facturación o ubicación del proyecto" : "Mailing address, billing address, or project location"}</li>
              <li>{es ? "Detalles de propiedad, descripciones de proyectos, presupuestos, plazos o información de alcance" : "Property details, project descriptions, budgets, timelines, or scope information"}</li>
              <li>{es ? "Fotos, planos, dibujos, permisos, documentos o archivos adjuntos" : "Photos, plans, drawings, permits, documents, or attachments"}</li>
              <li>{es ? "Comunicaciones enviadas a través de formularios, correos electrónicos o herramientas de mensajería" : "Communications submitted through forms, emails, or messaging tools"}</li>
              <li>{es ? "Cualquier otra información que elija divulgar" : "Any other information you choose to disclose"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? "Usted reconoce que cualquier información que envíe se proporciona bajo su propia discreción y riesgo. Usted es el único responsable de garantizar la precisión e integridad de la información enviada."
                : "You acknowledge that any information you submit is provided at your own discretion and risk. You are solely responsible for ensuring the accuracy and completeness of submitted information."}
            </p>

            <h3 className="font-heading font-semibold text-base sm:text-xl text-text-body mt-5 sm:mt-6 mb-2 sm:mb-3">
              {es ? "2.2 Información Técnica y de Uso Recopilada Automáticamente" : "2.2 Automatically Collected Technical and Usage Information"}
            </h3>
            <p className="text-text-body">
              {es
                ? "Cuando accede al Sitio, podemos recopilar automáticamente ciertos datos no identificables o técnicos, incluyendo:"
                : "When you access the Site, we may automatically collect certain non-identifying or technical data, including:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Dirección IP y ubicación geográfica general" : "IP address and general geographic location"}</li>
              <li>{es ? "Tipo de navegador, tipo de dispositivo y sistema operativo" : "Browser type, device type, and operating system"}</li>
              <li>{es ? "Tiempos de acceso, URLs de referencia y páginas de salida" : "Access times, referring URLs, and exit pages"}</li>
              <li>{es ? "Páginas visitadas, interacciones y patrones de uso" : "Pages viewed, interactions, and usage patterns"}</li>
              <li>{es ? "Registros de errores, métricas de rendimiento y señales de seguridad" : "Error logs, performance metrics, and security signals"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? "Esta información se recopila para mantener la funcionalidad del sitio, garantizar la seguridad, diagnosticar problemas, mejorar el rendimiento y respaldar análisis internos."
                : "This information is collected to maintain site functionality, ensure security, diagnose issues, improve performance, and support internal analytics."}
            </p>

            {/* Section 3 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "3. Cookies, Análisis y Tecnologías de Seguimiento" : "3. Cookies, Analytics, and Tracking Technologies"}
            </h2>
            <p className="text-text-body">
              {es
                ? "El Sitio puede utilizar cookies, registros del servidor, píxeles o tecnologías similares necesarias para:"
                : "The Site may utilize cookies, server logs, pixels, or similar technologies that are necessary for:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Funcionalidad básica y navegación" : "Core functionality and navigation"}</li>
              <li>{es ? "Seguridad del sitio y prevención de fraude" : "Site security and fraud prevention"}</li>
              <li>{es ? "Optimización del rendimiento y detección de errores" : "Performance optimization and error detection"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? "No utilizamos tecnologías de seguimiento para publicidad dirigida ni vendemos datos de comportamiento. Deshabilitar las cookies puede afectar ciertas funciones del Sitio."
                : "We do not knowingly use tracking technologies for targeted advertising or sell behavioral data. Disabling cookies through browser settings may impair certain Site features, and we are not responsible for any resulting loss of functionality."}
            </p>

            {/* Section 4 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "4. Propósito y Uso de la Información Recopilada" : "4. Purpose and Use of Collected Information"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Podemos usar la información recopilada para fines comerciales legítimos, incluyendo pero no limitado a:"
                : "We may use collected information for legitimate business purposes, including but not limited to:"}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Responder a consultas, solicitudes o comunicaciones" : "Responding to inquiries, requests, or communications"}</li>
              <li>{es ? "Preparar y entregar estimados, ofertas o propuestas" : "Preparing and delivering estimates, bids, or proposals"}</li>
              <li>{es ? "Evaluar la viabilidad y alcance del proyecto" : "Evaluating project feasibility and scope"}</li>
              <li>{es ? "Comunicar sobre programación, servicios o cambios" : "Communicating regarding scheduling, services, or changes"}</li>
              <li>{es ? "Mantener registros internos y documentación" : "Maintaining internal records and documentation"}</li>
              <li>{es ? "Mejorar la seguridad, rendimiento y usabilidad del sitio" : "Enhancing site security, performance, and usability"}</li>
              <li>{es ? "Prevenir mal uso, fraude o acceso no autorizado" : "Preventing misuse, fraud, or unauthorized access"}</li>
              <li>{es ? "Cumplir con leyes, regulaciones u obligaciones legales aplicables" : "Complying with applicable laws, regulations, or legal obligations"}</li>
            </ul>
            <p className="text-text-body mt-4">
              {es
                ? "La información enviada a través del Sitio no constituye aceptación de ninguna oferta, acuerdo u obligación por parte de la Compañía."
                : "Information submitted through the Site does not constitute acceptance of any offer, agreement, or obligation by the Company."}
            </p>

            {/* Section 5 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "5. Divulgación y Compartición de Información" : "5. Disclosure and Sharing of Information"}
            </h2>
            <h3 className="font-heading font-semibold text-base sm:text-xl text-text-body mt-5 sm:mt-6 mb-2 sm:mb-3">
              {es ? "5.1 No Venta Comercial de Información Personal" : "5.1 No Commercial Sale of Personal Information"}
            </h3>
            <p className="text-text-body">
              {es
                ? <><em>No vendemos, alquilamos, arrendamos ni intercambiamos información personal a terceros con fines comerciales o de marketing. No vendemos sus datos.</em></>
                : <>We do not sell, rent, lease, or trade personal information to third parties for commercial or marketing purposes. <em>We do not sell your data.</em></>}
            </p>
            <h3 className="font-heading font-semibold text-base sm:text-xl text-text-body mt-5 sm:mt-6 mb-2 sm:mb-3">
              {es ? "5.2 Proveedores de Servicios Terceros" : "5.2 Third-Party Service Providers"}
            </h3>
            <p className="text-text-body">
              {es
                ? "Podemos divulgar información a proveedores, contratistas o prestadores de servicios terceros que asisten con alojamiento web, almacenamiento de datos, comunicaciones, seguridad, análisis o soporte operativo. Tales divulgaciones se limitan a lo razonablemente necesario."
                : "We may disclose information to third-party vendors, contractors, or service providers who assist with website hosting, data storage, communications, security, analytics, or operational support. Such disclosures are limited to what is reasonably necessary, and providers are required to maintain appropriate confidentiality and safeguards."}
            </p>
            <h3 className="font-heading font-semibold text-base sm:text-xl text-text-body mt-5 sm:mt-6 mb-2 sm:mb-3">
              {es ? "5.3 Divulgaciones Legales, Regulatorias y de Protección" : "5.3 Legal, Regulatory, and Protective Disclosures"}
            </h3>
            <p className="text-text-body">
              {es
                ? <>Podemos divulgar información cuando determinemos, <em>de buena fe</em>, que la divulgación es necesaria o apropiada para:</>
                : <>We may disclose information when we determine, <em>in good faith</em>, that disclosure is necessary or appropriate to:</>}
            </p>
            <ul className="text-text-body list-disc pl-6 space-y-2">
              <li>{es ? "Cumplir con leyes, regulaciones, citaciones u órdenes judiciales aplicables" : "Comply with applicable law, regulation, subpoena, or court order"}</li>
              <li>{es ? "Responder a solicitudes gubernamentales o regulatorias legales" : "Respond to lawful governmental or regulatory requests"}</li>
              <li>{es ? "Hacer cumplir contratos, políticas o derechos legales" : "Enforce contracts, policies, or legal rights"}</li>
              <li>{es ? "Investigar o prevenir fraude, mal uso o incidentes de seguridad" : "Investigate or prevent fraud, misuse, or security incidents"}</li>
              <li>{es ? "Proteger los derechos, propiedad, seguridad o intereses de la Compañía, usuarios u otros" : "Protect the rights, property, safety, or interests of the Company, users, or others"}</li>
            </ul>

            {/* Section 6 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "6. Retención y Almacenamiento de Datos" : "6. Data Retention and Storage"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Retenemos información personal solo durante el tiempo razonablemente necesario para cumplir propósitos comerciales, legales, regulatorios o contractuales."
                : "We retain personal information only for as long as reasonably necessary to fulfill business, legal, regulatory, or contractual purposes. Retention periods may vary based on:"}
            </p>
            {!es && (
              <ul className="text-text-body list-disc pl-6 space-y-2">
                <li>Nature and sensitivity of the information</li>
                <li>Legal or regulatory requirements</li>
                <li>Ongoing or potential disputes</li>
                <li>Internal recordkeeping needs</li>
              </ul>
            )}
            <p className="text-text-body mt-4">
              {es
                ? "Nos reservamos el derecho de eliminar información a nuestra discreción a menos que la retención sea legalmente requerida."
                : "We reserve the right to delete information at our discretion unless retention is legally required."}
            </p>

            {/* Section 7 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "7. Seguridad de Datos y Reconocimiento de Riesgo" : "7. Data Security and Risk Acknowledgment"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Implementamos medidas administrativas, técnicas y físicas comercialmente razonables diseñadas para proteger la información contra acceso, alteración, divulgación o destrucción no autorizados."
                : "We implement commercially reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, alteration, disclosure, or destruction."}
            </p>
            <p className="text-text-body">
              {es
                ? <>Sin embargo, <em>ningún método de transmisión por internet o almacenamiento electrónico es completamente seguro</em>. Usted reconoce y acepta que la transmisión de información es bajo su propio riesgo, no podemos garantizar seguridad absoluta, y no somos responsables de violaciones fuera de nuestro control razonable.</>
                : <>However, <em>no method of transmission over the internet or electronic storage is completely secure</em>. You acknowledge and accept that transmission of information is at your own risk, we cannot guarantee absolute security, and we are not responsible for breaches beyond our reasonable control.</>}
            </p>

            {/* Section 8 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "8. Sin Confidencialidad ni Dependencia Profesional" : "8. No Confidentiality or Professional Reliance"}
            </h2>
            <p className="text-text-body">
              {es
                ? <>La información enviada a través del Sitio <em>no</em> se considera confidencial a menos que se acuerde expresamente por escrito. No envíe información propietaria, sensible o confidencial a menos que sea solicitada y protegida contractualmente.</>
                : <>Information submitted through the Site is <em>not</em> considered confidential unless expressly agreed to in writing. Do not submit proprietary, sensitive, or confidential information unless requested and contractually protected.</>}
            </p>
            <p className="text-text-body">
              {es
                ? <>Nada en el Sitio constituye asesoría legal, de construcción, ingeniería, arquitectura, ni una <em>garantía</em> de servicios, precios, plazos o resultados.</>
                : <>Nothing on the Site constitutes legal advice, construction advice, engineering advice, architectural advice, or a <em>guarantee</em> of services, pricing, timelines, or outcomes.</>}
            </p>

            {/* Section 9 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "9. Sitios Web de Terceros y Servicios Externos" : "9. Third-Party Websites and External Services"}
            </h2>
            <p className="text-text-body">
              {es
                ? "El Sitio puede contener enlaces a sitios web o servicios de terceros. No controlamos ni somos responsables de las prácticas de privacidad, contenido, precisión o seguridad de sitios de terceros. Acceder a recursos de terceros es bajo su propio riesgo."
                : "The Site may contain links to third-party websites or services. We do not control and are not responsible for the privacy practices, content, accuracy, or security of third-party sites. Accessing third-party resources is at your own risk."}
            </p>

            {/* Section 10 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "10. Privacidad de Menores" : "10. Children's Privacy"}
            </h2>
            <p className="text-text-body">
              {es
                ? "El Sitio no está dirigido a personas menores de dieciocho (18) años. No recopilamos intencionalmente información personal de menores. Si nos enteramos de que se ha recopilado dicha información, tomaremos medidas razonables para eliminarla."
                : "The Site is not directed to individuals under the age of eighteen (18). We do not knowingly collect personal information from minors. If we become aware that such information has been collected, we will take reasonable steps to remove it."}
            </p>

            {/* Section 11 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "11. Alcance Geográfico y Jurisdicción" : "11. Geographic Scope and Jurisdiction"}
            </h2>
            <p className="text-text-body">
              {es
                ? "El Sitio se opera en Estados Unidos y está destinado a usuarios de EE.UU. Esta Política de Privacidad se rige por las leyes del Estado de Texas, sin considerar principios de conflicto de leyes."
                : "The Site is operated in the United States and intended for U.S. users. This Privacy Policy is governed by the laws of the State of Texas, without regard to conflict-of-law principles."}
            </p>

            {/* Section 12 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "12. Limitación de Responsabilidad" : "12. Limitation of Liability"}
            </h2>
            <p className="text-text-body">
              {es
                ? <><em>En la máxima medida permitida por la ley</em>, la Compañía renuncia a la responsabilidad por daños derivados del uso o la imposibilidad de uso del Sitio, acceso no autorizado o divulgación de información, errores, omisiones o interrupciones, y dependencia de información enviada o recibida.</>
                : <>To the <em>maximum extent permitted by law</em>, the Company disclaims liability for damages arising from use or inability to use the Site, unauthorized access to or disclosure of information, errors, omissions, or interruptions, and reliance on information submitted or received.</>}
            </p>

            {/* Section 13 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "13. Modificaciones de la Política" : "13. Policy Modifications"}
            </h2>
            <p className="text-text-body">
              {es
                ? <>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento <em>sin previo aviso</em>. Las actualizaciones son efectivas inmediatamente al publicarse. El uso continuado del Sitio constituye aceptación de cualquier término revisado.</>
                : <>We reserve the right to modify this Privacy Policy at any time <em>without prior notice</em>. Updates are effective immediately upon posting. Continued use of the Site constitutes acceptance of any revised terms.</>}
            </p>

            {/* Section 14 */}
            <h2 className="font-heading font-bold text-lg sm:text-2xl text-text-body mt-8 sm:mt-10 mb-3 sm:mb-4">
              {es ? "14. Información de Contacto" : "14. Contact Information"}
            </h2>
            <p className="text-text-body">
              {es
                ? "Preguntas sobre esta Política de Privacidad pueden enviarse a través del formulario de contacto del Sitio o dirigirse a:"
                : "Questions regarding this Privacy Policy may be submitted through the Site's contact form or directed to:"}
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
