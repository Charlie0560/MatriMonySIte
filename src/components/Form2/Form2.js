import React from 'react';
import "./Form2.css"

export default function Form2({ onContinue, onBack }) {
    return (
        <div>
            <p>Personal Details</p>
            <div id="origin">
                <label htmlFor="placeOfBirth">Birth Place:</label>
                <input type="text" id="placeOfOrigin" name="placeOfBirth" />
            </div>
            <div className='details'>
                <label htmlFor="birthTime">Birth Time:</label>
                <input type='time' id='birthTime' />
            </div>
            <div className="details">
                <label htmlFor="placeOfBirth">Height:</label>
                <input type="number" id="height" name="placeOfBirth" />
            </div>
            <div className='details'>
                <label htmlFor="birthTime">Weight:</label>
                <input type='number' id='weight' />
            </div>
            
            <div className='address'>
                <label for="name">Current Address:</label>
                <input type="text" id="addressC" placeholder="" />
            </div>
            <div className='address'>
                <label for="name">Permanent Address:</label>
                <input type="text" id="addressP" placeholder="" />
            </div>
            <div className="details">
                <label htmlFor="placeOfBirth">Complexion:</label>
                <input type="text" id="complexion" name="placeOfBirth" />
            </div>
            <div className='details'>
                <label htmlFor="birthTime">Blood Group:</label>
                <select id='bloodgroup'>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="O">O</option>
                    <option value="AB">AB</option>
                </select>
                <select id='status'>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
            </div>
            <div className='btn'>
                <button type="button" onClick={onBack}>Back</button>
                <button type="button" onClick={onContinue}>Continue</button>
            </div>
        </div>
    )
}
