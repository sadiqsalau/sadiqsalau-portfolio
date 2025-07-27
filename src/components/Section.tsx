interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl py-12 px-4 flex flex-col gap-4">
      <h1 className="text-4xl font-light text-green-500">{title}</h1>
      {children}
    </section>
  );
}
