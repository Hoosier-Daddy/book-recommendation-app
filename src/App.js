import "./styles.css";
import { useState } from "react";

var items = {
  javascript: ["Eloquent JavaScript", "You Don't Know JS"],

  fiction: ["Shiva Trilogy", "Harry Potter and the Sorcerer's Stone"],

  business: ["Never Split the Difference", "Loonshots"]
};

export default function App() {
  var [category, setCategory] = useState("");
  function buttonHandler(event) {
    var buttonValue = items[event.target.innerText];

    setCategory(buttonValue);
  }

  return (
    <div className="App">
      <h1>
        <span>📚</span> goodbooks
      </h1>
      <p>Check out my favourite books.Select a genre to get started</p>
      <button onClick={buttonHandler}>javascript</button>
      <button onClick={buttonHandler}>fiction</button>
      <button onClick={buttonHandler}>business</button>
      <hr></hr>
      <ul>
        <li>{category[0]}</li>
        <li>{category[1]}</li>
      </ul>
    </div>
  );
}
