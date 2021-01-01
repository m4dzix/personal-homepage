import React from "react";
import Section from "../common/Section";
import Tile from "../common/Tile";

const Portfolio = () => {
  return (
    <Section
      portfolio={true}
      body={
        <Tile
          portfolio={true}
          title={"Portfolio"}
          typeOfContent={"portfolio"}
        ></Tile>
      }
    ></Section>
  );
};

export default Portfolio;
