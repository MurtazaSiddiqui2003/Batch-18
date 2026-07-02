import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/lib/firebase.js"; Navbar

import PrivateRoutes from "./privateRoutes.jsx";
import PublicRoutes from "./publicRoutes.jsx";

import Navbar from "../src/components/navbar/navbar.jsx";
import './routes.css'


const RoutesComponent = () => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedin(user);
    });

    return () => subscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedin(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isUserLoggedin === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isUserLoggedin ? (
        <div className="everything">
          <Navbar />
          <PrivateRoutes />
        </div>
      ) : (
        <PublicRoutes />
      )}
    </>
  );
};

export default RoutesComponent;