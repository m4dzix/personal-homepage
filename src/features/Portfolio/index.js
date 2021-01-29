import React from "react";
import { StyledSection } from "../../common/StyledSection";
import githubIcon from "../../common/Assets/lightMode/github.svg";
import { Container, Inset, Title, Subheader } from "./styled.js";
const Portfolio = () => {
  return (
    <StyledSection>
      <Container>
        <Inset>
          <img src={githubIcon} alt="Magdalena Checinski" />
        </Inset>
        <Title>Portfolio</Title>
        <Subheader>My recent projects</Subheader>
      </Container>
    </StyledSection>
  );
};

export default Portfolio;
