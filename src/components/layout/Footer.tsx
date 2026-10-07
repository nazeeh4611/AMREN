import Link from "next/link";
import { footerBusinessLinks, footerCompanyLinks, footerLegalLinks, type NavLink } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Logo from "@/components/layout/Logo";
import { telHref } from "@/lib/utils";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-medium text-warmwhite">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-mist hover:text-warmwhite">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { email, phones } = siteConfig.contact;

  return (
    <footer className="bg-brand-deep text-warmwhite">
      <div className="container-amren grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            {siteConfig.legalName}, registered in {siteConfig.location.street}, {siteConfig.location.city},
            United Arab Emirates.
          </p>
        </div>

        <FooterColumn title="Company" links={footerCompanyLinks} />
        <FooterColumn title="Businesses" links={footerBusinessLinks} />

        <div>
          <p className="text-sm font-medium text-warmwhite">Contact</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-mist">
            <p>
              <a href={`mailto:${email}`} className="hover:text-warmwhite">
                {email}
              </a>
            </p>
            {phones.map((phone) => (
              <p key={phone}>
                <a href={telHref(phone)} className="hover:text-warmwhite">
                  {phone}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-amren flex flex-col gap-4 py-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-warmwhite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
