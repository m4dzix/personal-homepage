import React from "react";
import { Container, Title, ContentContainer, List, Item } from "./styled";
import { MySkills, SkillsIWantToLearn } from "./arraysWithSkills";

const SkillsTile = ({ skillsIWantToLearn, mySkills, typeOfContent, title }) => {
  return (
    <Container>
      <Title mySkills={mySkills} skillsIWantToLearn={skillsIWantToLearn}>
        {title}
      </Title>
      <ContentContainer>
        {(() => {
          switch (typeOfContent) {
            case "mySkills":
              return (
                <List>
                  {MySkills.map((skill) => (
                    <Item key={skill}>{skill}</Item>
                  ))}
                </List>
              );
            case "skillsIWantToLearn":
              return (
                <List>
                  {SkillsIWantToLearn.map((skill) => (
                    <Item key={skill}>{skill}</Item>
                  ))}
                </List>
              );
            default:
              return <p>sialala</p>;
          }
        })()}
      </ContentContainer>
    </Container>
  );
};

export default SkillsTile;
