import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainRouter from "../mainRouter";



const App = () => {
  return(
    <BrowserRouter>
      
      <MainRouter/>
      
    </BrowserRouter>
  );
};

export default App
