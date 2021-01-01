import React from "react";
import Section from "../common/Section";
import Tile from "../common/Tile";

const AboutMe = () => {
  return (
    <Section
      body={
        <Tile
          aboutMe={true}
          inset={"this is"}
          title={"Magdalena Chęciński"}
          typeOfContent={"aboutMe"}
        ></Tile>
      }
    ></Section>
  );
};

export default AboutMe;
