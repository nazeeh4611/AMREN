import Button from "@/components/ui/Button";

type ContactCTAProps = {
  title?: string;
  description?: string;
};

export default function ContactCTA({
  title = "Work with AMREN Ventures",
  description = "For business enquiries, partnerships or general questions, get in touch with our team.",
}: ContactCTAProps) {
  return (
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="rounded-3xl bg-brand-deep md:rounded-[40px]">
        <div className="container-amren flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-warmwhite sm:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-mist md:text-lg">{description}</p>
          </div>
          <Button href="/contact" variant="gold" className="shrink-0 self-start md:self-center">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
