import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Emma Njoku",
  link: "https://emmanjoku.com",
  tags: ["Client", "Developer", "TwelveSquares", "Corporate Website"],
  description: "Corporate website for a global entrepreneur and executive.",
  overview: () => (
    <>
      <p>
        This was a corporate website built for Emma Njoku, a global entrepreneur
        and executive. I handled the entire frontend using React as part of a
        freelance contract with{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          TwelveSquares
        </HyperLink>
        .
      </p>
      <p>
        I was responsible for everything from layout and styling to
        responsiveness and deployment. Even though the site credits{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          TwelveSquares
        </HyperLink>
        , the development work was done entirely by me.
      </p>
    </>
  ),
} as Project;
