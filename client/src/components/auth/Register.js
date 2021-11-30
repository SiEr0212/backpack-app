import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  return (
    <div>
      <h1>Register a new account</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Verify your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
