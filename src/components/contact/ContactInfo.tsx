import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Response Time Badge */}
      <div className="bg-primary/5 rounded-lg p-4 flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-primary" strokeWidth={2} />
        </div>
        <div>
          <p className="font-medium text-text text-sm">Quick Response</p>
          <p className="text-text-muted text-xs">We respond within 24 hours</p>
        </div>
      </div>

      {/* Phone Numbers */}
      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" strokeWidth={2} />
          Call Us
        </h3>
        <div className="space-y-2 pl-6">
          <a
            href="tel:+12814066787"
            className="block text-text-muted hover:text-primary transition-colors"
          >
            (281) 406-6787
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
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" strokeWidth={2} />
          Email
        </h3>
        <a
          href="mailto:info@lazoconstructiontx.com"
          className="block text-text-muted hover:text-primary transition-colors pl-6 text-sm"
        >
          info@lazoconstructiontx.com
        </a>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" strokeWidth={2} />
          Business Hours
        </h3>
        <div className="text-text-muted text-sm space-y-1 pl-6">
          <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
          <p>Sat: 8:00 AM - 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" strokeWidth={2} />
          Service Areas
        </h3>
        <p className="text-text-muted text-sm pl-6">
          Austin, Houston, Manor & surrounding areas in Central and Southeast Texas
        </p>
      </div>
    </div>
  );
}
