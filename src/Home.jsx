import React from "react";
import web from "../src/images/apple.png"
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow Your business with{" "}
                  <strong className="brand_name">AdityaHirpara</strong>
                </h1>
                <h5 className="my-3">
                  We are the best team of nodejs developers
                </h5>
                <div className="mt-3">
                  <NavLink to="/services" className="btn btn-outline-primary rounded-pill">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header_image">
                <img src={web} alt="home image" className="img-fluid animated"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
