import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ],
  [
    "Max's React Course is the top on Udemy.",
    "It will teach you how to land a React job."
  ]
];

const blank_content = [""];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [evenContentIndex, setEvenContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={(evenContentIndex % 2 === 0) ? "even" : ""}
            onClick={() => setEvenContentIndex(2)}
          >
            Related Resources
          </button>
          <button className={activeContentIndex === 3 ? "active" : ""}
          onClick={()=> setEvenContentIndex(3)}
          >
          Vanilla Javascript vs React
          </button>
          <button className={activeContentIndex === 4 ? "purchase_active" : ""}
          onClick={()=>setActiveContentIndex(4)}>
          Buy Max's React Course
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {activeContentIndex !== 5 ? content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            )) : content[evenContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}}
          </ul>
          <ul>
            {
          </ul>
        </div>
      </div>
    </div>
  );
}
