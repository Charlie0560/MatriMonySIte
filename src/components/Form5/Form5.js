import React from 'react';
import "./Form5.css"

export default function Form5({onContinue,onBack}) {
  return (
    <div>
    <p>Other Details</p>
        <div className='expectations'>
              <label for="name">What are your expectations?</label><br/><br/>
              <textarea rows={5} cols={50}></textarea>
        </div>
          <div id="profile">
              <label htmlFor="profile">Choose a profile Picture:</label><br /><br />
              <input type="file" id="profilePic" name="profile" />
          </div>
          <div className='btn'>
              <button type="button" onClick={onBack}>Back</button>
              <button type="button" onClick={onContinue}>Continue</button>
          </div>
    </div>
  )
}
