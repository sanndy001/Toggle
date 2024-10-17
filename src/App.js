import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const showRegister = () => {
    setIsLogin(false);
  };

  const showLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="button-group">
          <button onClick={showRegister}>Register</button>
          <button onClick={showLogin}>Login</button>
        </div>
        <div className="navbar">{isLogin ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
}

export default App;
