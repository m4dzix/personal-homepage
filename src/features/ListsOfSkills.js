import React from "react";
import Section from "../common/Section";
import SkillsTile from "../common/SkillsTile";

const ListsOfSkills = () => {
  return (
    <Section
      body={
        <>
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
        </>
      }
    ></Section>
  );
};

export default ListsOfSkills;
