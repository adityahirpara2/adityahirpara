import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Routering = () =>{
  return (
    <>
      <div className="first_section">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About name="About Us" />} />
          <Route
            exact
            path="/services"
            element={<Services name="Services789" />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default Routering;
