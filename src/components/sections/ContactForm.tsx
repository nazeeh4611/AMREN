"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormValues } from "@/lib/contact";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "general",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [website, setWebsite] = useState("");

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!isValidEmail(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!isValidPhone(values.phone)) next.phone = "Please enter a valid phone number.";
    if (!values.message.trim()) next.message = "Please tell us how we can help.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setFeedback("");

    try {
      const result = await submitContactForm({ ...values, website });
      if (result.success) {
        setStatus("success");
        setFeedback(result.message);
        trackEvent({ name: "contact_form_submit", params: { service: values.service } });
        setValues(initialValues);
      } else {
        setStatus("error");
        setFeedback(result.message);
      }
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or email us directly.");
    }
  }

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-sand px-4 py-3 text-[15px] text-charcoal placeholder:text-muted transition-colors focus:border-brand focus:bg-sand focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-status">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand">
            Full name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand">
            Email <span className="text-gold-dark">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-300">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-brand">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-brand">
          Enquiry type
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => updateField("service", e.target.value as ContactFormValues["service"])}
          className={inputClasses}
        >
          <option value="general">General enquiry</option>
          <option value="digital">AMREN Digital: website, SEO or marketing</option>
          <option value="fresh">AMREN Fresh: produce supply</option>
          <option value="store">AMREN Store</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand">
          Message <span className="text-gold-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClasses}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field: hidden from people, filled in by spam bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We reply to every enquiry by email or phone.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex h-14 w-full items-center justify-between gap-6 rounded-full bg-brand pl-7 pr-2 text-base font-medium text-warmwhite transition-colors duration-200 hover:bg-brand-deep disabled:cursor-not-allowed disabled:bg-slate sm:w-auto"
        >
          <span>{status === "submitting" ? "Sending..." : "Send Enquiry"}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 group-hover:translate-x-0.5">
            {status === "submitting" ? (
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            ) : (
              <ArrowRight size={18} aria-hidden="true" />
            )}
          </span>
        </button>
      </div>

      <div id="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-300">
            <CheckCircle2 size={16} aria-hidden="true" />
            {feedback}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-300">
            <AlertCircle size={16} aria-hidden="true" />
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
