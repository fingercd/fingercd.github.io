interface SectionHeadingProps {
  label: string;
  title: string;
  description: string;
  compact?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${compact ? " is-compact" : ""}`}>
      <p className="section-label">{label}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
