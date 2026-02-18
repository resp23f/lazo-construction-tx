"use client";

import { useState, useRef } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import Button from "@/components/ui/Button";

// Sanitize input to prevent XSS
function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

const serviceTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Room Addition",
  "Interior/Exterior Painting",
  "Drywall Services",
  "Commercial Remodel",
  "Commercial Build-Out",
  "Other",
];

function getErrors(formData: { name: string; email: string; phone: string; serviceType: string; message: string }) {
  const errors: Record<string, string> = {};
  if (!formData.name.trim()) errors.name = "Please enter your name so we know who to contact.";
  if (!formData.email.trim()) {
    errors.email = "We need your email to send you a response.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "That doesn't look like a valid email. Double-check it?";
  }
  if (!formData.phone.trim()) {
    errors.phone = "A phone number helps us reach you faster.";
  }
  if (!formData.serviceType) {
    errors.serviceType = "Let us know what type of service you're looking for.";
  }
  if (!formData.message.trim()) {
    errors.message = formData.serviceType === "Other"
      ? "Since you selected 'Other', please describe what you need so we can help."
      : "Tell us a bit about your project so we can help.";
  }
  return errors;
}

export default function ContactForm() {
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

    if (hasErrors || !turnstileToken) {
      return;
    }

    setStatus("loading");

    // Sanitize all form data before sending
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
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
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thanks! We&apos;ll be in touch within 24 hours.
        </p>
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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass("name")}
        />
        {showErrors && errors.name && (
          <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass("email")}
        />
        {showErrors && errors.email && (
          <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass("phone")}
        />
        {showErrors && errors.phone && (
          <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-2">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`${inputClass("serviceType")} bg-white`}
        >
          <option value="">Select a service...</option>
          {serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {showErrors && errors.serviceType && (
          <p className="mt-1.5 text-sm text-red-600">{errors.serviceType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="message" className="block text-sm font-medium text-text">
            Project Description <span className="text-red-500">*</span>
          </label>
          <span className={`text-xs ${formData.message.length > 250 ? 'text-amber-600' : 'text-text-muted'} ${formData.message.length >= 300 ? 'text-red-500' : ''}`}>
            {formData.message.length}/300
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={300}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClass("message")} resize-none`}
        />
        {showErrors && errors.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Turnstile + Submit */}
      <div className="flex flex-col items-center gap-4 pt-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: "light", size: "normal" }}
        />
        <Button type="submit" className="px-16" disabled={status === "loading" || !turnstileToken}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
