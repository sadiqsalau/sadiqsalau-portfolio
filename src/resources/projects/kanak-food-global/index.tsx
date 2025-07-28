import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Kanak Food Global",
  link: "https://kanakfoodglobal.com.ng",
  tags: ["Client", "Developer", "TwelveSquares", "Corporate Website"],
  description: "Corporate website for a food distribution company.",
  overview: () => (
    <>
      <p>
        This was a contract delivered through{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          TwelveSquares
        </HyperLink>
        . I handled the full development and deployment of the corporate website
        for <strong>Kanak Food Global</strong>—a food supply and cold storage
        company based in Abuja, Nigeria.
      </p>

      <p>
        The site serves as a professional online presence for the business,
        focusing on clarity and accessibility for their customer base in Lugbe
        and beyond.
      </p>
    </>
  ),
} as Project;
