export function ProjectMetadataTags() {
  const tags = [
    "Product design",
    "UX/UI Design",
    "Design systems",
    "User research",
    "Usability testing",
    "Web design",
    "Prototyping",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border border-border bg-accent/5 px-3 py-1 text-sm font-medium text-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
