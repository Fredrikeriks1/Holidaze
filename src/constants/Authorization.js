import React, { createContext, useState } from "react";

const Authorization = createContext();

const AuthorizationProvider = ({ children }) => {
  const existingUser = localStorage.getItem("user") || null;
  const [admin, setUser] = useState(existingUser);

  function registerUser(username) {
    localStorage.setItem("user", username);
    setUser(username);
  }

  function registerEmail(email) {
    localStorage.setItem("email", JSON.stringify(email));
    setUser(email);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("email");
  }

  return (
    <Authorization.Provider
      value={{ admin, registerUser, registerEmail, logout }}
    >
      {children}
    </Authorization.Provider>
  );
};

export { Authorization, AuthorizationProvider };
