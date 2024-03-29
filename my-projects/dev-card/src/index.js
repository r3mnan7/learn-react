import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Information Security",
    level: "advanced",
    color: "#FF0000",
  },
  {
    skill: "Data Science",
    level: "beginner",
    color: "#1F77B4",
  },
  {
    skill: "Machine Learning",
    level: "beginner",
    color: "#8A2BE2",
  },
  {
    skill: "Systems Administration",
    level: "intermediate",
    color: "#00FFFF",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#FFFF00",
  },
  {
    skill: "Django",
    level: "advanced",
    color: "#008000",
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#FFA500",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="header">Michael Poff (r3mnan7)</h1>
      <p className="intro">
        I am an information security leader by trade and a web developer for
        fun. I create apps to help make the security trade better and alleviate
        common problems prevalent in the industry. I love open source software
        and believe strongly in making useful tools available to as many people
        as possible.
      </p>
    </div>
  );
}

function Avatar() {
  return <img src="./avatar.png" alt="avatar" className="avatar" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "beginner" && "👶"}
        {skillObject.level === "intermediate" && "👍"}
        {skillObject.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
