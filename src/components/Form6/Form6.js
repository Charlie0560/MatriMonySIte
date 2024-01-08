import React from "react";
import "./Form6.css"

export default function Form6({onSubmit,onBack}) {
  return (
    <div>
      <p>Registration Details</p>
      <div id="emailField">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div id="contactField">
        <label htmlFor="contact">Contact:</label>
        <input type="number" id="contact" name="contact" />
      </div>
      <div id="contactField">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="contact" />
      </div>
          <div className='btn'>
              <button type="button" onClick={onBack}>Back</button>
              <button type="button" onClick={onSubmit}>Submit</button>
          </div>
    </div>
  );
}
