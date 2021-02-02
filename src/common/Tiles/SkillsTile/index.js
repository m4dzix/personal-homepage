import React from "react";
import { Container, Title, ContentContainer, List, Item } from "./styled";

const SkillsTile = ({ title, skills }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ContentContainer>
        <List>
          {skills.map((skill) => (
            <Item key={skill}>{skill}</Item>
          ))}
        </List>
      </ContentContainer>
    </Container>
  );
};

export default SkillsTile;
