import React from "react";
import { StyledSection } from "../../common/StyledSection";
import SkillsTile from "../../common/Tiles/SkillsTile";
import { MySkills, SkillsIWantToLearn } from "./arraysWithSkills";

const ListsOfSkills = () => {
  return (
    <StyledSection>
      <SkillsTile title={"My Skillset includes"} skills={MySkills}></SkillsTile>
      <SkillsTile
        title={"Skills I want to learn"}
        skills={SkillsIWantToLearn}
      ></SkillsTile>
    </StyledSection>
  );
};

export default ListsOfSkills;
