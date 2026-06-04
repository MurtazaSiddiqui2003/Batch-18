import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './login.css'
import { v4 as uuidv4 } from 'uuid';
import uuid4 from 'uuid4';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router';
import { app, auth, db } from '../../src/lib/firebase';

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFormInvalid =  !password.trim() || !email.trim();
  const naviagte = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        console.log('User Data', userData)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  return (
    <div className='loginpage'>
      <div id="loginform">
        <form onSubmit={loginUser}>
          <h1>Log In</h1>
          {/* <div className="input">
            <input type="text" id="name" name="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <label htmlFor="name" id='namelabel'>Name:</label>
            <br />
          </div> */}
          <div className="input">
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label htmlFor="email" id='emaillabel'>Email:</label>
            <br />
          </div>
          <div className="input">
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <label htmlFor="password" id='passwordlabel'>Password</label>
            <br />
          </div>
          <div id='btndiv' style={{ display: 'flex', justifyContent: 'center' }}>
            <button id="btn" disabled={isFormInvalid}>Login</button>
          </div>
          <div className='signupDiv' style={{ display: 'flex', justifyContent: 'center' }}>
            <p>New User? <a href="#" id="login" onClick={() => naviagte('/signup')}>Sign Up</a></p>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Login