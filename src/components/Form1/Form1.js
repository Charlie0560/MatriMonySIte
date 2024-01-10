import React from "react";
import "./Form1.css";

function Form1({ onContinue }) {
  return (
    <div>
      <p>Create Your Profile</p>
      <div className="fullname">
        <label for="name">Full Name:</label>
        <input type="text" id="fname" />
        <br />
      </div>
      <div id="dateContainer">
        <label htmlFor="date">Date of Birth:</label>
        <input type="date" name="date" id="date" />
      </div>
      <div id="genderContainer">
        <label for="gender">Gender:</label>
        <div className="gendiv">
          <input type="radio" name="gender" value="male" id="genderMale" />
          <label className="glabel" for="genderMale">
            Male
          </label>
        </div>
        <div className="gendiv">
          <input type="radio" name="gender" value="female" id="genderFemale" />
          <label className="glabel" for="genderFemale">
            Female
          </label>
        </div>
      </div>
      <button type="button" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}

export default Form1;
