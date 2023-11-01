import React from "react";
import web from "../src/images/apple.png";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
        
      <section id="header" className="">
      <div className="container-fluid">
          <div className="row">
            <div className="col-12 my-5">
              <h1 className="text-center text-success">{props.heading}</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    {props.name}
                    <strong className="brand_name"> AdityaHirpara</strong>
                  </h1>
                  <h5 className="my-3">
                    We are the best team of nodejs developers
                  </h5>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary rounded-pill"
                    >
                      {props.visitName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header_image">
                  <img
                    src={props.imgSrc}
                    alt="home image"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
