import Hero from "../components/Hero";
import PageSEO from "../components/PageSEO";

export default function Home() {
  return (
    <>
      <PageSEO
        isFullTitle
        title="Sadiq Salau — Software Engineer"
        description="A curated showcase of my best work. I focus on performance, UX, and offline-first readiness."
        images={["https://sadiqsalau.vercel.app/og.jpg"]}
      />
      <Hero />
    </>
  );
}
