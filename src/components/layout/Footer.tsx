import Link from "next/link";
import Container from "./Container";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container>
        <div className="py-12">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div>
              <div className="font-heading font-bold text-xl mb-4">
                LAZO Construction
              </div>
              <p className="text-gray-300 text-sm">
                Professional residential and commercial construction services
                across Texas. Quality craftsmanship since day one.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+12814066787"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    (281) 406-6787
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18328583834"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    (832) 858-3834
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@lazoconstructiontx.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" strokeWidth={2} />
                    info@lazoconstructiontx.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Service Areas
              </h3>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>
                  Austin, Houston, Manor & surrounding areas in Central and
                  Southeast Texas
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} LAZO Construction LLC. All
                rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
