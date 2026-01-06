import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { loginService, signupService, logoutService } from "../services/auth.service";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) => loginService(email, password);
  const signup = (email, password) => signupService(email, password);
  const logout = () => logoutService();

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
