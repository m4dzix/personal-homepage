import React from "react";
import Section from "../common/Section";
import TileWithNoBackground from "../common/TileWithNoBackground";

const AboutMe = () => {
  return (
    <Section
      body={
        <TileWithNoBackground
          aboutMe={true}
          inset={"this is"}
          title={"Magdalena Chęciński"}
          typeOfContent={"aboutMe"}
          description={
            "  My name is Magdalena. I am an ambitious person taking my first steps in the front-end. I recently completed the Become a Front-End Developer course, organized by Youcode.pl. I've already learned a lot about HTML, CSS, JS and also React- which I love. I would like to further expand my knowledge and skills. Below are some of my projects"
          }
        ></TileWithNoBackground>
      }
    ></Section>
  );
};

export default AboutMe;
