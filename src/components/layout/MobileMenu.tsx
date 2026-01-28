"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { X, Phone } from "lucide-react";

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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-heading font-bold text-lg text-primary">
              Menu
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-text"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 px-4 font-medium text-text hover:bg-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Numbers */}
          <div className="p-4 border-t">
            <p className="text-sm text-text-muted mb-3">Call us directly:</p>
            <a
              href="tel:+12814066787"
              className="flex items-center gap-2 py-2 text-primary font-medium"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              (281) 406-6787
            </a>
            <a
              href="tel:+18328583834"
              className="flex items-center gap-2 py-2 text-primary font-medium"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              (832) 858-3834
            </a>
          </div>

          {/* CTA */}
          <div className="p-4 border-t">
            <Button href="/contact" className="w-full" onClick={onClose}>
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
