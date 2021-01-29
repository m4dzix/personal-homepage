import React from "react";
import { Container, Title, ContentContainer, List, Item } from "./styled";
import { MySkills, SkillsIWantToLearn } from "./arraysWithSkills";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../projectsSlice";

const SkillsTile = ({ skillsIWantToLearn, mySkills, typeOfContent, title }) => {
  const darkMode = useSelector(selectDarkMode);

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
                <List darkMode={darkMode}>
                  {MySkills.map((skill) => (
                    <Item key={skill}>{skill}</Item>
                  ))}
                </List>
              );
            case "skillsIWantToLearn":
              return (
                <List darkMode={darkMode}>
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
