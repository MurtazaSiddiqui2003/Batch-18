import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import './signup.css'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';

const Signup = () => {
  const auth = getAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFormInvalid = !username.trim() || !password.trim() || !email.trim();
  const naviagte = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("userCredential", userCredential);
        await updateProfile(userCredential.user, {
          displayName: username,
        })
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div className='signupPage'>
      <div className="signupform">
        <h2>SignUp</h2>
        <form onSubmit={signupUser}>
          <input type="text" id="name" placeholder="Enter Your Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" id="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="terms">
            <p><input type="checkbox" id="agree" />
              <label htmlFor="agree">I agree to <a href="#">Terms & Conditions</a></label></p>
          </div>
          <div className="btndiv">
            <button type="submit" id="reg" disabled={isFormInvalid} >Sign Up</button>
          </div>
          <div className="logindiv">
            <p>Already have an account? <a href="#" id="login" onClick={() => naviagte('/login')}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup