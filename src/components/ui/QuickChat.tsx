"use client";

import { useState, useRef } from "react";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

export default function QuickChat() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showErrors, setShowErrors] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Hide on /contact page
  if (pathname === "/contact") return null;

  const errors: Record<string, string> = {};
  if (!formData.name.trim()) errors.name = t("quickChat.errName");
  if (!formData.phone.trim()) errors.phone = t("quickChat.errPhone");
  if (!formData.message.trim()) errors.message = t("quickChat.errMessage");
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    if (hasErrors || !turnstileToken) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitize(formData.name),
          email: "quick-chat@lazoconstructiontx.com",
          phone: sanitize(formData.phone),
          serviceType: "Quick Message",
          message: sanitize(formData.message),
          turnstileToken,
        }),
      });
      if (response.ok) {
        setStatus("success");
        setShowErrors(false);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
        turnstileRef.current?.reset();
      }
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (status === "success") {
      setTimeout(() => setStatus("idle"), 300);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center ${
          isOpen ? "" : "animate-pulse-ring"
        }`}
        aria-label="Quick message"
      >
        {isOpen ? (
          <X className="h-7 w-7" strokeWidth={2} />
        ) : (
          <MessageCircle className="h-7 w-7" strokeWidth={2} />
        )}
      </button>

      {/* Chat Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-[104px] right-6 z-50 w-[380px] max-h-[560px] bg-white rounded-2xl shadow-2xl border border-primary/30 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white font-heading font-bold text-sm">
                {t("quickChat.title")}
              </h3>
              <p className="text-white/70 text-xs">{t("quickChat.subtitle")}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-7 w-7 text-green-600" strokeWidth={2} />
              </div>
              <h4 className="font-heading font-bold text-lg text-text mb-1">
                {t("quickChat.successTitle")}
              </h4>
              <p className="text-text-muted text-sm">{t("quickChat.successMsg")}</p>
              <button
                onClick={handleClose}
                className="mt-4 text-primary text-sm font-medium hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={`${t("quickChat.name")} *`}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:ring-2 focus:outline-none transition-all ${
                    showErrors && errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {showErrors && errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={`${t("quickChat.phone")} *`}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:ring-2 focus:outline-none transition-all ${
                    showErrors && errors.phone
                      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {showErrors && errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={200}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={`${t("quickChat.message")} *`}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:ring-2 focus:outline-none transition-all resize-none ${
                    showErrors && errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {showErrors && errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-xs text-red-600 bg-red-50 rounded-lg p-2">
                  {t("quickChat.errorMsg")}
                </p>
              )}

              <div className="flex flex-col items-center gap-3">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                  onSuccess={setTurnstileToken}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                  options={{ theme: "light", size: "normal" }}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !turnstileToken}
                  className="w-full py-2.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    t("quickChat.sending")
                  ) : (
                    <>
                      <Send className="h-4 w-4" strokeWidth={2} />
                      {t("quickChat.send")}
                    </>
                  )}
                </button>
              </div>


            </form>
          )}
        </div>
      </div>
    </>
  );
}
