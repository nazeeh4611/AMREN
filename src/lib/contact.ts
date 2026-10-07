export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: "digital" | "fresh" | "store" | "general";
  message: string;
};

export type ContactSubmitResult = {
  success: boolean;
  message: string;
};

export const serviceLabels: Record<ContactFormValues["service"], string> = {
  general: "General enquiry",
  digital: "AMREN Digital",
  fresh: "AMREN Fresh",
  store: "AMREN Store",
};

export async function submitContactForm(
  values: ContactFormValues & { website?: string }
): Promise<ContactSubmitResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const result = (await response.json().catch(() => null)) as ContactSubmitResult | null;
  return (
    result ?? {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    }
  );
}
