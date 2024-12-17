import React, { useState } from "react";
import './AgeCalculator.css'; // Import CSS for styling

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    // Clear previous error
    setError("");

    if (!birthDate) {
      setError("Please enter your birthdate.");
      return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthDate);

    // Validate if the birthdate is in the future
    if (birthDateObj > today) {
      setError("Birthdate cannot be in the future.");
      return;
    }

    const ageInMilliseconds = today - birthDateObj;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <div className="input-container">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="input-field"
        />
        <button onClick={calculateAge} className="calculate-button">
          Calculate Age
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {age !== null && !error && (
        <div className="result">
          <h3>Your age is: {age} years</h3>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
