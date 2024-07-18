
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens'));

  const setTokens = (data) => {
    localStorage.setItem('authTokens', data);
    setAuthTokens(data);
  };

  console.log("AuthContext Provider:", { authTokens, setAuthTokens });

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
