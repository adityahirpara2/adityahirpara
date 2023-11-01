import React from "react";
import Navbar from "./Navbar";
import Routering from "./Routering";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";
const App = () => {
  const Name = () => {
    return <h1>Name Page</h1>;
  };
  return (
    <>
      <Navbar />
      <Routering/>
      <Footer/>
    </>
  );
};

export default App;
