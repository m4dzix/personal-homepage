import React from "react";
import { StyledSection } from "../common/StyledSection";
import TileWithNoBackground from "../common/Tiles/TileWithNoBackground";

const AboutMe = () => {
  return (
    <StyledSection>
      <TileWithNoBackground
        aboutMe={true}
        inset={"this is"}
        title={"Magdalena Chęciński"}
        typeOfContent={"aboutMe"}
        description={
          "  My name is Magdalena. I am an ambitious person taking my first steps in the front-end. I recently completed the Become a Front-End Developer course, organized by Youcode.pl. I've already learned a lot about HTML, CSS, JS and also React- which I love. I would like to further expand my knowledge and skills. Below are some of my projects"
        }
      ></TileWithNoBackground>
    </StyledSection>
  );
};

export default AboutMe;
