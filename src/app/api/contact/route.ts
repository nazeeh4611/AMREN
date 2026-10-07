import { siteConfig } from "@/data/site";
import { serviceLabels, type ContactFormValues } from "@/lib/contact";
import { isValidEmail, isValidPhone } from "@/lib/utils";

const MAX_LENGTH = { name: 120, email: 200, phone: 40, company: 160, message: 5000 };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function reply(success: boolean, message: string, status = 200) {
  return Response.json({ success, message }, { status });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | (Partial<ContactFormValues> & { website?: string })
    | null;
  if (!body) return reply(false, "Invalid request.", 400);

  // Honeypot: real visitors never see or fill the "website" field.
  if (body.website) return reply(true, "Thank you. Your enquiry has been received.");

  const values = {
    name: String(body.name ?? "").trim().slice(0, MAX_LENGTH.name),
    email: String(body.email ?? "").trim().slice(0, MAX_LENGTH.email),
    phone: String(body.phone ?? "").trim().slice(0, MAX_LENGTH.phone),
    company: String(body.company ?? "").trim().slice(0, MAX_LENGTH.company),
    message: String(body.message ?? "").trim().slice(0, MAX_LENGTH.message),
    service: (body.service && body.service in serviceLabels ? body.service : "general") as ContactFormValues["service"],
  };

  if (!values.name || !values.message || !isValidEmail(values.email) || !isValidPhone(values.phone)) {
    return reply(false, "Please complete all required fields.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; enquiry not sent.");
    return reply(false, `Sorry, the form is unavailable right now. Please email ${siteConfig.contact.email}.`, 503);
  }

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Phone", values.phone || "-"],
    ["Company", values.company || "-"],
    ["Enquiry type", serviceLabels[values.service]],
  ];

  const html = `
    <h2>New website enquiry</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>`;

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${values.message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || `AMREN Website <website@amren.ae>`,
      to: [process.env.CONTACT_TO_EMAIL || siteConfig.contact.email],
      reply_to: values.email,
      subject: `Website enquiry: ${serviceLabels[values.service]} from ${values.name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return reply(false, `Sorry, your message could not be sent. Please email ${siteConfig.contact.email}.`, 502);
  }

  return reply(true, "Thank you. Your enquiry has been received and our team will reply shortly.");
}
