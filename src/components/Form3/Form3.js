import React from "react";
import "./Form3.css";

function Form3({ onContinue, onBack }) {
  return (
    <div>
      <p>Education and Career</p>
      <div className="education">
        <label for="name">Education:</label>
        <input type="text" id="education" placeholder="Highest Education" />
      </div>
      <div className="job">
        <label for="name">Job Details:</label>
        <div className="jobdiv">
          <input type="text" id="occupation" placeholder="Occupation" />
          <input type="text" id="jobLoc" placeholder="Job Location" />
          <input type="number" id="income" placeholder="Annual Income" />
        </div>
      </div>
      <div className="btn">
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Form3;
