"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="bg-primary/5 rounded-lg p-4 flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-primary" strokeWidth={2} />
        </div>
        <div>
          <p className="font-medium text-text text-sm">{t("contactInfo.quickResponse")}</p>
          <p className="text-text-muted text-xs">{t("contactInfo.quickResponseDesc")}</p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" strokeWidth={2} />
          {t("contactInfo.callUs")}
        </h3>
        <div className="space-y-2 pl-6">
          <a href="tel:+12814066787" className="block text-text-muted hover:text-primary transition-colors">(281) 406-6787</a>
          <a href="tel:+18328583834" className="block text-text-muted hover:text-primary transition-colors">(832) 858-3834</a>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" strokeWidth={2} />
          {t("contactInfo.email")}
        </h3>
        <a href="mailto:info@lazoconstructiontx.com" className="block text-text-muted hover:text-primary transition-colors pl-6 text-sm">
          info@lazoconstructiontx.com
        </a>
      </div>

      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" strokeWidth={2} />
          {t("contactInfo.hours")}
        </h3>
        <div className="text-text-muted text-sm space-y-1 pl-6">
          <p>{t("contactInfo.monFri")}</p>
          <p>{t("contactInfo.sat")}</p>
          <p>{t("contactInfo.sun")}</p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-base text-text mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" strokeWidth={2} />
          {t("contactInfo.serviceAreas")}
        </h3>
        <p className="text-text-muted text-sm pl-6">{t("contactInfo.serviceAreasDesc")}</p>
      </div>
    </div>
  );
}
