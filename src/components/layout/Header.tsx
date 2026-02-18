"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import { Menu, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-surface border-b border-gray-100 sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* LAZO Logo */}
            <Link href="/" className="flex items-center -ml-4 -my-10">
              <Image
                src="/logo.png"
                alt="LAZO Construction LLC"
                width={320}
                height={100}
                className="h-44 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-text uppercase text-sm tracking-wide hover:text-primary transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs + Language Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden text-xs font-semibold">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 transition-colors ${
                    lang === "en"
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 transition-colors ${
                    lang === "es"
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  ES
                </button>
              </div>

              <Button variant="outline" href="tel:+12814066787">
                <Phone className="h-4 w-4" strokeWidth={2} />
                {t("nav.callNow")}
              </Button>
              <Button href="/contact">{t("nav.getAQuote")}</Button>
            </div>

            {/* Mobile: Language Toggle + Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden text-xs font-semibold">
                <button
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 transition-colors ${
                    lang === "en"
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-2.5 py-1 transition-colors ${
                    lang === "es"
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  ES
                </button>
              </div>

              <button
                type="button"
                className="p-2 text-text"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navLinks={navLinks}
        />
    </header>
  );
}
