import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/businesses";
import SectionLabel from "@/components/ui/SectionLabel";

type FaqProps = {
  title: React.ReactNode;
  faqs: FaqItem[];
  className?: string;
};

export default function Faq({ title, faqs, className = "bg-sand" }: FaqProps) {
  return (
    <section className={`section-pad ${className}`} aria-labelledby="faq-heading">
      <div className="container-amren grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-heading" className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq-item group rounded-2xl border border-line bg-sand px-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <h3 className="text-base font-medium text-brand md:text-lg">{faq.question}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ivory text-brand">
                  <Plus size={16} className="faq-icon transition-transform duration-300" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
