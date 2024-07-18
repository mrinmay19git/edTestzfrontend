
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const { authTokens } = useAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:4010/api/appointments', {
          headers: {
            Authorization: `Bearer ${authTokens}`,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [authTokens]);

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Date: {new Date(appointment.date).toLocaleString()}</p>
            <p>Description: {appointment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
