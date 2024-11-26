import React from "react";
// import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./componets/MainHeader"
import About from "./pages/About";
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
          

          <Routes>
                  <Route path="/" element={<MainHeader/>}>
                         
                          <Route index element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>

                  </Route>
          </Routes>
      
    </div>
  )
};

export default App;
