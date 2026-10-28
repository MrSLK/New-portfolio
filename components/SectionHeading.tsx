export default function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-brand">
          {kicker}
        </p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-[-.055em] sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-sm leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}
