import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:4010/api/login', {
        username,
        password,
      });
      const tokens = response.data.token; // Adjust according to your backend response structure
      setAuthTokens(tokens);
    } catch (err) {
      console.error("Sign-In Error:", err);
      setError('Failed to sign in. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
