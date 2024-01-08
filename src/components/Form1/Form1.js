import React from 'react';
import "./Form1.css"

function Form1({ onContinue }) {
    return (
        <div>
            <p>Create Your Profile</p>
            <div className="fullname">
                <label for="name">Name:</label>
                <input type="text" id="fname" placeholder="First Name" /><br />
                <input type="text" id="mname" placeholder="Middle Name" /><br />
                <input type="text" id="lname" placeholder="Last Name" />
            </div>

            <div id="genderContainer">
                <label for="gender">Gender:</label>
                <input type="radio" name="gender" value="male" id="genderMale" />
                <label className="glabel" for="genderMale">
                    Male
                </label>
                <input type="radio" name="gender" value="female" id="genderFemale" />
                <label className="glabel" for="genderFemale">
                    Female
                </label>
            </div>
            <div id="dateContainer">
                <label htmlFor="date">Date of Birth:</label>
                <input type="date" name="date" id="date" />
            </div>
            <button type="button" onClick={onContinue}>Continue</button>
        </div>
    )
}

export default Form1