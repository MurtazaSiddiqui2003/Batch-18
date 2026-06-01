import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './login.css'
import { v4 as uuidv4 } from 'uuid';
import uuid4 from 'uuid4';

const Login = () => {
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
    naviagte('/')
  }

  return (
    <div className='loginpage'>
      <div id="loginform">
        <h1>Log In</h1>
        <div className="input">
          <input type="text" id="name" name="name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <br />
          <label for="name" id='namelabel'>Name:</label>
          <br />
        </div>
        <div className="input">
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <br />
          <label for="email" id='emaillabel'>Email:</label>
          <br />
        </div>
        <div className="input">
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <br />
          <label for="password" id='passwordlabel'>Password</label>
          <br />
        </div>
        <div id='btndiv' style={{ display: 'flex', justifyContent: 'center' }}>
          <button id="btn" onClick={submitForm} disabled={isFormInvalid}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login