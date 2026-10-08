import { Mail, MapPin, Phone } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import JsonLd from "@/components/seo/JsonLd";
import { telHref } from "@/lib/utils";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

const title = "Contact Us: Phone, Email & Address";
const description =
  "Contact AMREN Ventures in Sharjah Media City, UAE. Call +971 50 587 5088 or email hello@amren.ae for digital marketing, fresh produce or general enquiries.";
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
  keywords: ["contact AMREN Ventures", "AMREN Ventures phone number", "AMREN Ventures email", "Sharjah Media City"],
});

export default function ContactPage() {
  const { email, phones } = siteConfig.contact;

  return (
    <>
      <JsonLd
        nodes={[
          webPageJsonLd({ name: title, description, path: "/contact", type: "ContactPage" }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        label="Contact"
        title="Contact AMREN Ventures"
        description="For business enquiries, partnerships or general questions, contact our team using the details below."
      />

      <section className="section-pad bg-sand">
        <div className="container-amren grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand">Get in touch</h2>
              <ul className="mt-5 grid gap-3">
                {phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-sand p-4 transition-colors duration-200 hover:border-brand"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory text-brand">
                        <Phone size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm text-muted">Phone</span>
                        <span className="block text-base font-medium text-brand">{phone}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-sand p-4 transition-colors duration-200 hover:border-brand"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory text-brand">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">Email</span>
                      <span className="block text-base font-medium text-brand">{email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-line bg-sand p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory text-brand">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <address className="not-italic">
                    <span className="block text-sm text-muted">Office</span>
                    <span className="block text-base font-medium text-brand">{siteConfig.location.street}</span>
                    <span className="block text-sm text-muted">
                      {siteConfig.location.city}, {siteConfig.location.country}
                    </span>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-sand p-7 md:rounded-[36px] md:p-10">
            <h2 className="text-2xl font-semibold text-brand">Send an enquiry</h2>
            <p className="mb-8 mt-2 text-sm text-muted">Fields marked * are required.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
