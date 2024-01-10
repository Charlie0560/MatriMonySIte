import React from 'react'
import "./Form4.css"

export default function Form4({onContinue,onBack}) {
  return (
    <div>
          <p>Parent Details</p>
          <div className="parent">
              <label for="name">Parents Details:</label>
              <input type="text" id="father" placeholder="Father Name" /><br />
              <input type="text" id="father-job" placeholder="Father Ocuupation" /><br />
              <input type="number" id="father-mob" placeholder="Father Mobile No" /><br />
              {/* <input type="text" id="mother" placeholder="Mother Name" /><br />
              <input type="text" id="mother-job" placeholder="Mother Ocuupation" /><br />
              <input type="number" id="mother-mob" placeholder="Mother Mobile No" /><br /> */}
          </div>
          <div className="parent">
              <label for="name">Maternal Uncle:</label>
              <input type="text" id="maternal-uncle" placeholder="Name" /><br />
              <input type="text" id="maternal-uncle-place" placeholder="Place" /><br />
              <input type="number" id="maternal-uncle-mob" placeholder="Mobile No" />
          </div>
          <div className='btn'>
              <button type="button" onClick={onBack}>Back</button>
              <button type="button" onClick={onContinue}>Continue</button>
          </div>
    </div>
  )
}
