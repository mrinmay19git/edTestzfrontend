import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from './components/utils/PrivateRoute';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Booking from './components/pages/Booking';
import AppointmentHistory from './components/pages/AppointmentHistory';


const App = () => {
  return (

    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <PrivateRoute>
                <AppointmentHistory />
              </PrivateRoute>
            }
          />
       
        </Routes>
      </AuthProvider>
    </Router>

   
  );
};

export default App;




