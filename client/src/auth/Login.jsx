import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [e, setE] = useState("");
  const [p, setP] = useState("");

  const navigate = useNavigate();

  async function submitHandler() {
    const obj = {
      email: e,
      password: p,
    };

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const data = await response.text();

      if (!response.ok) {
        throw new Error(data);
      }

      // ✅ Store JWT correctly
      localStorage.setItem("token", data);

      alert("Login successful");
      navigate("/admin");

    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  }

  return (
    <div>
      <h3>Login</h3>

      <input
        type="email"
        placeholder="email"
        onChange={(e) => setE(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setP(e.target.value)}
      />
      <br /><br />

      <button onClick={submitHandler}>Login</button>

      <br /><br />

      <Link to="/signup">Go to Signup Page</Link>
    </div>
  );
}

export default Login;
