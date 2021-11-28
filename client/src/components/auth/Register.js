import React from 'react';

export default function Register() {
    return (
        <div>
          <h1>Register a new account</h1>  
          <form >
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Verify your password" />
          <button type="submit">Register</button>
          </form>
        </div>
    )
}
