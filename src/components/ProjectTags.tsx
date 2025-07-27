interface ProjectTagsProps {
  tags: string[];
}
export default function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <ul className="flex gap-1 flex-wrap">
      {tags.map((tag, i) => (
        <li
          key={i}
          className="bg-stone-700 text-sm px-2 rounded-full self-start"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
