type LegalSection = {
  heading: string;
  body: string[];
};

type LegalContentProps = {
  updated: string;
  sections: LegalSection[];
};

export default function LegalContent({ updated, sections }: LegalContentProps) {
  return (
    <section className="section-pad bg-sand">
      <div className="container-amren">
        <div className="max-w-3xl">
          <p className="text-sm text-muted">Last updated: {updated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold text-brand">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
