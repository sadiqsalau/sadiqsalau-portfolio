import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Kanak Food Global",
  link: "https://kanakfoodglobal.com.ng",
  tags: ["Client", "Developer", "TwelveSquares", "Corporate Website"],
  description: "Corporate website for a food distribution company.",

  metaTitle: "Kanak Food Global – Corporate Website by Sadiq Salau",
  metaDescription:
    "Corporate website for Kanak Food Global, a food distribution and cold storage company in Abuja. Developed and deployed by Sadiq Salau using Bootstrap.",
  keywords: [
    "Kanak Food Global Website",
    "Food Distribution Company Website",
    "Bootstrap Developer Portfolio",
    "Sadiq Salau Projects",
    "Corporate Website Development",
  ],
  overview: () => (
    <>
      <p>
        This was a contract delivered through{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          TwelveSquares
        </HyperLink>
        . I handled the full development and deployment of the corporate website
        for <strong>Kanak Food Global</strong> — a food supply and cold storage
        company based in Lugbe, Abuja, Nigeria.
      </p>

      <p>
        I built the site with <strong>Bootstrap</strong>.
      </p>
    </>
  ),
};

export default project;
