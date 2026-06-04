import React from 'react';
import { getAuth } from 'firebase/auth';
import './home.css';

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className='homePage'>
      <div className="data">
        <h1>
          Hello! {user?.displayName}, Welcome To REACT JS
        </h1>
      </div>
    </div>
  );
};

export default Home;