import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Kazeem Tanimu",
  link: "https://kazeemtanimu.com",
  tags: ["Client", "Developer", "TwelveSquares", "Corporate Website"],
  description:
    "Personal brand website for a fashion entrepreneur and strategist.",
  overview: () => (
    <>
      <p>
        This project was contracted through{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          TwelveSquares
        </HyperLink>
        , similar to the{" "}
        <HyperLink target="_blank" href="https://emmanjoku.com">
          Emma Njoku
        </HyperLink>{" "}
        site. I handled the full development of Kazeem Tanimu's official
        website—a personal brand platform for a Nigerian fashion entrepreneur
        and strategist.
      </p>

      <p>
        What stood out for me on this project was how well the visuals and
        layout 😍 blended. I first built it using plain HTML, CSS, and
        JavaScript, then later{" "}
        <strong>rebuilt it using React and TailwindCSS</strong> for better
        maintainability and responsiveness.
      </p>

      <p>
        The goal was to deliver a clean and modern design that reflects his
        leadership profile and diverse portfolio, and I'm proud of how it turned
        out.
      </p>
    </>
  ),
} as Project;
