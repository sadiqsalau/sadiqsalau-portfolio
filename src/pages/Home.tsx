import Hero from "../components/Hero";
import PageSEO from "../components/PageSEO";

export default function Home() {
  return (
    <>
      <PageSEO
        title="Sadiq Salau - Web Applications Developer & Software Engineer"
        description="Explore the portfolio of Sadiq Salau, a software engineer in Abuja, Nigeria. Specializing in performance-driven PWAs, UX-focused design, and offline-first web applications."
        images={["https://sadiqsalau.vercel.app/og.jpg"]}
        keywords={[
          "Sadiq Salau",
          "Software Engineer Abuja",
          "Web Applications Developer Nigeria",
          "PWA Developer Portfolio",
          "Hire Software Engineer Abuja",
        ]}
      />
      <Hero />
    </>
  );
}
