import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [p, setP] = useState("");

  const navigate = useNavigate();

  async function submitHandler() {
    const obj = {
      name: n,
      email: e,
      password: p,
    };

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      alert("Signup successful");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Signup failed");
    }
  }

  return (
    <div>
      <h3>Create Account</h3>

      <input
        type="text"
        placeholder="name"
        onChange={(e) => setN(e.target.value)}
      />
      <br />

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

      <button onClick={submitHandler}>Submit</button>

      <br /><br />

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
