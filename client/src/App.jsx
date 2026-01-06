import React from "react";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Loader from "./ui/Loader";
import Signup from "./auth/Signup";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route  path="/"  element={<Loader/>} />
            <Route  path="/signup"  element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
