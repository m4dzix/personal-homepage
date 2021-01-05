import React from "react";
import Section from "../common/Section";
import Tile from "../common/Tile";

const ListsOfSkills = () => {
  return (
    <Section
      body={
        <>
          {" "}
          <Tile
            mySkills={true}
            title={"My Skillset includes"}
            typeOfContent={"mySkills"}
          ></Tile>{" "}
          <Tile
            skillsIWantToLearn={true}
            title={"Skills I want to learn"}
            typeOfContent={"skillsIWantToLearn"}
          ></Tile>
        </>
      }
    ></Section>
  );
};

export default ListsOfSkills;
