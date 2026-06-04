import React from "react";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter } from "react-router";
import RoutesComponent from "../utils/routes";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
        {/* <main className="main"> */}
          <RoutesComponent />
        {/* </main> */}
      </div>
    </BrowserRouter>
  );
};

export default App;