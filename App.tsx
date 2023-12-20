import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {ProfileCard} from "./view/ProfileCard";

function App() {
  return (
         <BrowserRouter>
          <ProfileCard/>
         </BrowserRouter>
  );
}
export default App;
