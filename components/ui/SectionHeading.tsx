type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
