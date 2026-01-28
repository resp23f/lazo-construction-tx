import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Phone Numbers */}
      <div>
        <h3 className="font-heading font-bold text-lg text-text mb-4 flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" strokeWidth={2} />
          Call Us
        </h3>
        <div className="space-y-2">
          <a
            href="tel:+12814066787"
            className="block text-text-muted hover:text-primary transition-colors"
          >
            (281) 406-6787 <span className="text-sm">(Main)</span>
          </a>
          <a
            href="tel:+18328583834"
            className="block text-text-muted hover:text-primary transition-colors"
          >
            (832) 858-3834
          </a>
        </div>
      </div>

      {/* Email */}
      <div>
        <h3 className="font-heading font-bold text-lg text-text mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" strokeWidth={2} />
          Email
        </h3>
        <a
          href="mailto:info@lazoconstructiontx.com"
          className="text-text-muted hover:text-primary transition-colors"
        >
          info@lazoconstructiontx.com
        </a>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="font-heading font-bold text-lg text-text mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" strokeWidth={2} />
          Service Areas
        </h3>
        <ul className="text-text-muted space-y-1">
          <li>Austin</li>
          <li>Houston</li>
          <li>Manor</li>
          <li>Central Texas</li>
          <li>Southeast Texas</li>
        </ul>
      </div>
    </div>
  );
}
