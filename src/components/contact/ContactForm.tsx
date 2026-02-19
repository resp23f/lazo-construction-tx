"use client";

import { useState, useRef } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

export default function ContactForm() {
  const { t } = useLanguage();

  const serviceTypes = [
    { value: "Kitchen Remodel", labelKey: "contactForm.serviceKitchen" },
    { value: "Bathroom Remodel", labelKey: "contactForm.serviceBathroom" },
    { value: "Room Addition", labelKey: "contactForm.serviceAddition" },
    { value: "Interior/Exterior Painting", labelKey: "contactForm.servicePainting" },
    { value: "Drywall Services", labelKey: "contactForm.serviceDrywall" },
    { value: "Commercial Remodel", labelKey: "contactForm.serviceCommRemodel" },
    { value: "Commercial Build-Out", labelKey: "contactForm.serviceCommBuildout" },
    { value: "Other", labelKey: "contactForm.serviceOther" },
  ];

  function getErrors(formData: { name: string; email: string; phone: string; serviceType: string; message: string }) {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = t("contactForm.errName");
    if (!formData.email.trim()) {
      errors.email = t("contactForm.errEmailEmpty");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t("contactForm.errEmailInvalid");
    }
    if (!formData.phone.trim()) errors.phone = t("contactForm.errPhone");
    if (!formData.serviceType) errors.serviceType = t("contactForm.errServiceType");
    if (!formData.message.trim()) {
      errors.message = formData.serviceType === "Other"
        ? t("contactForm.errMessageOther")
        : t("contactForm.errMessage");
    }
    return errors;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const errors = getErrors(formData);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    if (hasErrors || !turnstileToken) return;

    setStatus("loading");
    const sanitizedData = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      phone: sanitize(formData.phone),
      serviceType: sanitize(formData.serviceType),
      message: sanitize(formData.message),
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });
      if (response.ok) {
        setStatus("success");
        setShowErrors(false);
        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      } else {
        setStatus("error");
        turnstileRef.current?.reset();
      }
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-green-800 mb-2">
          {t("contactForm.successTitle")}
        </h3>
        <p className="text-green-700">{t("contactForm.successMsg")}</p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
      showErrors && errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-gray-300 focus:border-primary focus:ring-primary/20"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          {t("contactForm.name")} <span className="text-red-500">*</span>
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass("name")} />
        {showErrors && errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          {t("contactForm.email")} <span className="text-red-500">*</span>
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass("email")} />
        {showErrors && errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          {t("contactForm.phone")} <span className="text-red-500">*</span>
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
        {showErrors && errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-2">
          {t("contactForm.serviceType")} <span className="text-red-500">*</span>
        </label>
        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={`${inputClass("serviceType")} bg-white`}>
          <option value="">{t("contactForm.selectService")}</option>
          {serviceTypes.map((service) => (
            <option key={service.value} value={service.value}>{t(service.labelKey)}</option>
          ))}
        </select>
        {showErrors && errors.serviceType && <p className="mt-1.5 text-sm text-red-600">{errors.serviceType}</p>}
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="message" className="block text-sm font-medium text-text">
            {t("contactForm.projectDesc")} <span className="text-red-500">*</span>
          </label>
          <span className={`text-xs ${formData.message.length > 250 ? 'text-amber-600' : 'text-text-muted'} ${formData.message.length >= 300 ? 'text-red-500' : ''}`}>
            {formData.message.length}/300
          </span>
        </div>
        <textarea
          id="message" name="message" rows={5} maxLength={300}
          value={formData.message} onChange={handleChange}
          placeholder={t("contactForm.errMessage")}
          className={`${inputClass("message")} resize-none`}
        />
        {showErrors && errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {t("contactForm.errorMsg")}
        </div>
      )}

      <div className="flex flex-col items-center gap-4 pt-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: "light", size: "normal" }}
        />
        <Button type="submit" className="w-[300px]" disabled={status === "loading" || !turnstileToken}>
          {status === "loading" ? t("contactForm.sending") : t("contactForm.sendMessage")}
        </Button>
      </div>
    </form>
  );
}
