import React from "react";
import Common from "./Common";
import web from "../src/images/bike.jpg"

const About = (props) => {
  return (
    <>
      <Common name="Welcome to About Page" imgSrc={web} visit="/contact" visitName="Contact Me" heading={props.name} />
    </>
  );
};

export default About;
