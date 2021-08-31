import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const authenticate = () => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
