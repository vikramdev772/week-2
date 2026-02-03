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
      console.log("Response:", data);

      if (!response.ok) {
        throw new Error(data);
      }

      alert(data);
      
      localStorage.setItem("token ",data);

      navigate("/admin");

    } catch (error) {
      console.error("Error:", error);
      alert("Login failed");
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

      <h4>email : {e}</h4>
      <h4>password : {p}</h4>
    </div>
  );
}

export default Login;
