import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recupera el estado de autenticación del almacenamiento local
    return localStorage.getItem("user") === "true";
  });

  useEffect(() => {
    // Guarda el estado de autenticación en el almacenamiento local
    localStorage.setItem("user", user);
  }, [user]);

  const Logout = () => {
    setUser(false);
  };

  const Login = () => {
    setUser(true);
  };

  return (
    <UserContext.Provider value={{ user, Logout, Login }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
