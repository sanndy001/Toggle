import React from "react";

function Register() {
  return (
    <div>
      <h2>Register</h2>
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
        <div>
          <label>Confirm Password:</label>
          <br />
          <input type="password" required />
        </div>
        <br />
        <button type="submit" className="butt">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
