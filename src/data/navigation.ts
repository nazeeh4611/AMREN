export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About AMREN", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Contact", href: "/contact" },
];

export const footerBusinessLinks: NavLink[] = [
  { label: "AMREN Digital", href: "/businesses/amren-digital" },
  { label: "AMREN Fresh", href: "/businesses/amren-fresh" },
  { label: "AMREN Store", href: "/businesses#amren-store" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
