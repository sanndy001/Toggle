import React from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <br />
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input type="password" required />
        </div>
        <br />
        <button type="submit" className="butt">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
