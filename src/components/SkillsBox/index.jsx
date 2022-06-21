import classNames from "classnames";
import "./index.scss";

const SkillsBox = ({ className }) => {
  const skills = [
    {
      title: "HTML5",
      tag: "html5",
      icon: "fa-fw fab fa-html5",
    },
    {
      title: "CSS3",
      tag: "css3",
      icon: "fa-fw fab fa-css3-alt",
    },
    {
      title: "JS",
      tag: "js",
      icon: "fa-fw fab fa-js",
    },
    {
      title: "Bootstrap",
      tag: "bootstrap",
      icon: "fa-fw fab fa-bootstrap",
    },
    {
      title: "Sass",
      tag: "sass",
      icon: "fa-fw fab fa-sass",
    },
    {
      title: "React",
      tag: "react",
      icon: "fa-fw fab fa-react",
    },
    {
      title: "PHP",
      tag: "php",
      icon: "fa-fw fab fa-php",
    },
  ];
  return (
    <ul className={classNames(className, "skills-box")}>
      {skills.map(({ title, tag, icon }, i) => (
        <li className={classNames("skills-item", tag)} title={title} key={i}>
          <i className={icon}></i>
        </li>
      ))}
    </ul>
  );
};

export default SkillsBox;
