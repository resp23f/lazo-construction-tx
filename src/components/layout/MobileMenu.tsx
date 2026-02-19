"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { X, Phone } from "lucide-react";
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
  const [visible, setVisible] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  // Derive visible state from isOpen (no setState in effect)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setVisible(false);
    }
  }

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Full-screen white background */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col h-full transition-all duration-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {/* Header — matches main header height */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" onClick={handleClose} className="-ml-2 -my-6">
            <Image
              src="/logo.png"
              alt="LAZO Construction LLC"
              width={320}
              height={100}
              className="h-28 w-auto"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-text hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-6 pt-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className="block py-3 text-lg font-medium text-text hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-6 pb-8">
          {/* Phone numbers */}
          <div className="border-t border-gray-100 pt-5 mb-5">
            <p className="text-xs text-text-muted uppercase tracking-wide mb-3">
              {t("mobileMenu.callUs")}
            </p>
            <a
              href="tel:+12814066787"
              className="flex items-center gap-2 py-1.5 text-primary font-medium text-sm"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              (281) 406-6787
            </a>
            <a
              href="tel:+18328583834"
              className="flex items-center gap-2 py-1.5 text-primary font-medium text-sm"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              (832) 858-3834
            </a>
          </div>

          {/* CTA */}
          <Button href="/contact" className="w-full" onClick={handleClose}>
            {t("mobileMenu.getAQuote")}
          </Button>
        </div>
      </div>
    </div>
  );
}
