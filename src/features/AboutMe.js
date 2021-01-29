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
        ></TileWithNoBackground>
      }
    ></Section>
  );
};

export default AboutMe;
