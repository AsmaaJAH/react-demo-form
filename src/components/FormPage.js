// src/components/FormPage.js
import React, { useState } from 'react'; // Removed useEffect from import
import { useNavigate } from 'react-router-dom';
import './FormPage.css'; // Make sure to include your CSS for styling

function FormPage() {
  const [formData, setFormData] = useState({
    phone: '',
    room: '',
    startDate: '',
    endDate: ''
  });
  const navigate = useNavigate();

  // Set the minimum start date to today
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      alert('End date must be after the start date.');
      return;
    }
    navigate('/accept-policy', { state: formData });
  };

  return (
    <div className="form-container">
      <h1 style={{ paddingTop: "50px" }}>Room Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="room">Room Type:</label>
        <select
          name="room"
          id="room"
          value={formData.room}
          onChange={handleChange}
          required
        >
          <option value="">Please Select The Room Type</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
        </select>

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          min={today} // Disable past dates
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
          min={formData.startDate} 
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;

