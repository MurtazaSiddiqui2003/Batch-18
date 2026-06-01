import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import './signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFormInvalid = !username.trim() || !password.trim() || !email.trim();
  const naviagte = useNavigate();
  const submitForm = () => {
    const user = {
      username,
      email,
      password,
      uid: uuidv4()
    };
    console.log('User: ', user);
    localStorage.setItem('AuthState', JSON.stringify(user));
    setUsername('')
    setEmail('')
    setPassword('')
    naviagte('/login')
  }
  return (
    <div className='signupPage'>
      <div className="signupform">
        <h2>SignUp</h2>
        <input type="text" id="name" placeholder="Enter Your Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" id="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="terms">
          <p><input type="checkbox" id="agree" />
            <label for="agree">I agree to <a href="#">Terms & Conditions</a></label></p>
        </div>
        <div className="btndiv">
          <button type="submit" id="reg" onClick={submitForm} disabled={isFormInvalid} >Sign Up</button>
        </div>
        <div className="logindiv">
          <p>Already have an account? <a href="#" id="login">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup