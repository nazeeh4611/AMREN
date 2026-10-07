import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { liveBusinesses } from "@/data/businesses";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-sand pt-[92px]">
      <div className="container-amren py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand sm:text-5xl">Page not found</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          The page you requested does not exist or has moved. Try one of these instead:
        </p>
        <ul className="mt-6 space-y-2 text-base">
          {liveBusinesses.map((business) => (
            <li key={business.id}>
              <Link href={`/businesses/${business.slug}`} className="text-brand underline decoration-gold underline-offset-4">
                {business.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="text-brand underline decoration-gold underline-offset-4">
              Contact AMREN Ventures
            </Link>
          </li>
        </ul>
        <div className="mt-10">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
