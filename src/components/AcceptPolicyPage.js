// src/components/AcceptPolicyPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AcceptPolicyPage.css'; // Ensure this is imported

function AcceptPolicyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAccepted, setIsAccepted] = useState(false);

  const formData = location.state;

  const handleAccept = () => {
    if (isAccepted) {
      alert('Form submitted successfully!');
      navigate('/');
    } else {
      alert('Please accept the policy to proceed.');
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Accept Policy</h1>
      <p>Phone Number: {formData.phone}</p>
      <p>Room: {formData.room}</p>
      <p>Start Date: {formData.startDate}</p>
      <p>End Date: {formData.endDate}</p>

      <div className="policy-container">
        <h3>Terms and Conditions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
          vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
          venenatis euismod malesuada.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>

      <label>
        <input
          type="checkbox"
          checked={isAccepted}
          onChange={() => setIsAccepted(!isAccepted)}
        />
        I accept the terms and conditions
      </label>

      <div className="button-container">
        <button onClick={handleAccept}>Confirm</button>
      </div>
    </div>
  );
}

export default AcceptPolicyPage;


