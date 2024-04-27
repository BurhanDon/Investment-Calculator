import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 7,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInvestment) => {
      return { ...prevInvestment, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput} />}
      <p id="app-p">
        Created by
        <a target="_blank" href="https://www.linkedin.com/in/burhan-siraj/">
          {" "}
          Burhan Uddin
        </a>
      </p>
    </>
  );
}

export default App;
