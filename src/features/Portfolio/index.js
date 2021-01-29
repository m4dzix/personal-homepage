import React from "react";
import Section from "../../common/Section";
import githubIcon from "../../common/Assets/lightMode/github.svg";
import { Container, Inset, Title, Subheader } from "./styled.js";
const Portfolio = () => {
  return (
    <Section
      portfolio={true}
      body={
        <Container>
          <Inset>
            <img src={githubIcon} alt="Magdalena Checinski"></img>
          </Inset>
          <Title>Portfolio</Title>
          <Subheader>My recent projects</Subheader>
        </Container>
      }
    ></Section>
  );
};

export default Portfolio;
