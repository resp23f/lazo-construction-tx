"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-gray-200 text-text">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 justify-items-center lg:justify-items-stretch items-start">
            {/* Logo & Description */}
            <div className="flex flex-col items-center -mt-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="LAZO Construction LLC"
                  width={160}
                  height={50}
                  className="h-28 sm:h-40 w-auto"
                />
              </Link>
              <p className="font-heading text-text-muted text-xs italic -mt-3">
                {lang === "es" ? <>Su Visión, Nuestro Oficio<sup className="text-xs">™</sup></> : <>Your Vision, Our Craft<sup className="text-xs">™</sup></>}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.facebook.com/JonnySCompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text-muted hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Instagram" className="text-text-muted hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Google Business" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center">
              <h3 className="font-heading font-bold text-lg mb-4">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2 text-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-muted hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center">
              <h3 className="font-heading font-bold text-lg mb-4">
                {t("footer.contactUs")}
              </h3>
              <ul className="space-y-2 flex flex-col items-center">
                <li>
                  <a href="tel:+12814066787" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                    <span>(281) 406-6787</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+18328583834" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                    <span>(832) 858-3834</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@lazoconstructiontx.com" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm">
                    <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                    <span className="break-all sm:break-normal">info@lazoconstructiontx.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="flex flex-col items-center">
              <h3 className="font-heading font-bold text-lg mb-4">
                {t("footer.serviceAreas")}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                <span className="text-text-muted text-sm">{t("footer.greaterAustin")}</span>
                <span className="text-text-muted text-sm">{t("footer.greaterHouston")}</span>
                <span className="text-text-muted text-sm">{t("footer.centralTexas")}</span>
                <span className="text-text-muted text-sm">{t("footer.southeastTexas")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Row */}
      <div className="border-t border-gray-300">
        <Container>
          <div className="py-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-center md:text-left">
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                &copy; {new Date().getFullYear()} LAZO Construction LLC. {t("footer.rights")}
              </p>
              <div className="flex justify-center md:justify-end gap-6">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors text-xs uppercase tracking-wide">
                  {t("footer.privacy")}
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors text-xs uppercase tracking-wide">
                  {t("footer.terms")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
