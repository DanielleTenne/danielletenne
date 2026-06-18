const DEFAULT_TAGS = [
  "Product design",
  "UX/UI Design",
  "Design systems",
  "User research",
  "Usability testing",
  "Web design",
  "Prototyping",
];

export function ProjectMetadataTags({ tags = DEFAULT_TAGS }: { tags?: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-none border-[0.5px] border-[#D7D7D1] bg-transparent px-3 py-1 text-sm font-medium text-[#10100E]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
