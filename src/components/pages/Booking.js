import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Booking = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const { authTokens } = useAuth();

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4010/api/appointments',
        { date, description },
        {
          headers: {
            Authorization: `Bearer ${authTokens}`,
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
      setMessage('Booking failed');
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Book Appointment</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Booking;
