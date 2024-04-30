import React from "react";
import ReactDOM from "react-dom";
import { animals } from "./animals.js";

const title = "";
const images = [];
const showBackground ="false"

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const animalsFacts = (
  <div>
    <h1> {title == "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const fact = animals[e.target.alt].facts;
  const randomNum = Math.floor(Math.random() * fact.length);
  const facts = fact[randomNum];
  document.getElementById("fact").innerHTML = facts;
}

ReactDOM.render(animalsFacts, document.getElementById("root"));
