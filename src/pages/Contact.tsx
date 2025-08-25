import ContactsSection from "../components/ContactsSection";
import PageSEO from "../components/PageSEO";

export default function Contact() {
  return (
    <>
      <PageSEO
        title="Contact Sadiq Salau - Software Engineer"
        description="Reach out to Sadiq Salau, a software engineer in Abuja, for collaboration, projects, or inquiries."
        keywords={[
          "Contact Sadiq Salau",
          "Web Developer Abuja",
          "Hire PWA Developer",
          "Portfolio Contact Sadiq",
        ]}
      />
      <ContactsSection />
    </>
  );
}
