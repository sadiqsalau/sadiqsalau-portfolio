import AboutSection from "../components/AboutSection";
import PageSEO from "../components/PageSEO";

export default function About() {
  return (
    <>
      <PageSEO
        title="About Sadiq Salau - Software Engineer"
        description="Discover the journey of Sadiq Salau, a software engineer specializing in PWAs, custom apps, and performance-focused solutions."
        keywords={[
          "About Sadiq Salau",
          "Software Engineer Abuja",
          "PWA Developer Portfolio",
          "Sadiq Salau Profile",
          "Purrfect Farmer Creator",
          "PWABucket Creator",
        ]}
      />
      <AboutSection />
    </>
  );
}
