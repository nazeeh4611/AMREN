"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-sand transition-colors duration-200",
        scrolled || menuOpen ? "border-line" : "border-sand"
      )}
    >
      <div className="container-amren flex h-[92px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-ivory hover:text-brand",
                pathname === link.href ? "bg-ivory text-brand" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" showArrow={false} className="px-5 py-2.5">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-sand text-brand lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 top-[92px] z-40 overflow-y-auto border-t border-line bg-sand lg:hidden"
      >
        <nav className="container-amren flex flex-col py-6" aria-label="Mobile">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-line py-4 text-2xl font-semibold tracking-tight text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="mt-8 justify-center">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
