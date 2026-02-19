"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileMenuProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  // Derive visible state from isOpen (no setState in effect)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setVisible(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.dataset.mobileMenuOpen = "true";
      requestAnimationFrame(() => setVisible(true));

      return () => {
        document.body.style.overflow = "";
        delete document.body.dataset.mobileMenuOpen;
      };
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Full-screen white background */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content — starts below the sticky header */}
      <div
        className={`relative z-10 flex flex-col h-full pt-20 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Nav links */}
        <nav className="flex-1 px-6 pt-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block py-3.5 text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-text hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive(link.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    )}
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 pb-8">
          <div className="flex gap-3">
            <Button href="/contact" className="flex-1" onClick={onClose}>
              {t("mobileMenu.getAQuote")}
            </Button>
            <Button
              href="tel:+12814066787"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {t("nav.callNow")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
