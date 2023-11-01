import React from "react";
import Card from "./Card";
import web from "../src/images/bike2.jpg";

const Services = (props) => {
  return (
    <>
      <div id="header" className="container-fluid">
        <div className="row">
          <div className="col-12 my-5">
            <h1 className="text-center text-success">Our Services</h1>
          </div>
          <div className="col-10 mx-auto">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 col-4 mx-auto">
                <Card
                  name="Welcome to Services Page"
                  imgSrc={web}
                  visit="/about"
                  visitName="About Me"
                />
              </div>
              <div className="col-md-4 col-4 mx-auto">
                <Card
                  name="Welcome to Services Page"
                  imgSrc={web}
                  visit="/about"
                  visitName="About Me"
                />
              </div>
              <div className="col-md-4 col-4 mx-auto">
                <Card
                  name="Welcome to Services Page"
                  imgSrc={web}
                  visit="/about"
                  visitName="About Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
