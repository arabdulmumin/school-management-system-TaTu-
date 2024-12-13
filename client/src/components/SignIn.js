import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css'; 
const SignIn = () => {
  const history = useHistory();

    const handleSignIn = () => {
        history.push('./ConvergingPoint');
    }
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>WELCOME TO SCHOOL MANAGEMENT SYSTEM</h1>
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>User Identification Number</label>
            <input type="number" placeholder="Enter UIN" required/>

          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button onClick={handleSignIn} type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
