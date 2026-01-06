import React, { useState } from "react";

function Signup() {
  let [n, setN] = useState("username");
  let [e, setE] = useState("mail");
  let [p, setP] = useState("pass");

    function submitHandeler(){
        let obj={
            "name":n,
            "email":e,
            "password":p
        }
        console.log(obj);
    }

  return (
    <>
      <div>
        <h3>create account</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setN(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setE(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setP(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={submitHandeler}>submit</button>
        <br />
        <h4>name : {n}</h4>
        <h4>email : {e}</h4>
        <h4>password : {p}</h4>
      </div>
    </>
  );
}

export default Signup;
