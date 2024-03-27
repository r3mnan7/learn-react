import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <h1 className="header">Michael Poff</h1>
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

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Information Security" emoji="🔒" color="red" />
      <Skill skill="Systems Administration" emoji="🖥️" color="cyan" />
      <Skill skill="Python" emoji="🐍" color="yellow" />
      <Skill skill="Django" emoji="💪" color="green" />
      <Skill skill="HTML+CSS" emoji="🤏" color="orange" />
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
