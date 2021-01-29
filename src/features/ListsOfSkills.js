import React from "react";
import { StyledSection } from "../common/StyledSection";
import SkillsTile from "../common/Tiles/SkillsTile";

const ListsOfSkills = () => {
  return (
    <StyledSection>
      <SkillsTile
        mySkills={true}
        title={"My Skillset includes"}
        typeOfContent={"mySkills"}
      ></SkillsTile>
      <SkillsTile
        skillsIWantToLearn={true}
        title={"Skills I want to learn"}
        typeOfContent={"skillsIWantToLearn"}
      ></SkillsTile>
    </StyledSection>
  );
};

export default ListsOfSkills;
