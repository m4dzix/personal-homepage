import React from "react";
import Section from "../common/Section";
import Tile from "../common/Tile";

const AboutMe = () => {
  return (
    <Section
      body={
        <Tile
          introducingYourself={true}
          inset={"this is"}
          title={"Magdalena Chęciński"}
          typeOfContent={"introducingYourself"}
        ></Tile>
      }
    ></Section>
  );
};

export default AboutMe;
