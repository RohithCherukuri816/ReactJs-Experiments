import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
