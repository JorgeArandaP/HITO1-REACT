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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Logout = () => {
    localStorage.setItem("token", null);
    setUser(false);
  };

  const Register = async (e) => {
    e.preventDefault();

    console.log(email, password);

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.trim().length < 6) {
      alert("Password debe contener mas de 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords no coinciden");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    console.log(data.token);

    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };

  const Login = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.trim().length < 6) {
      alert("Password debe contener mas de 6 caracteres");
      return;
    }
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    setEmail("");

    setPassword("");

    setUser(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        Logout,
        Login,
        Register,
        setEmail,
        setPassword,
        email,
        password,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
