import React from "react";
import { StyledSection } from "./styled";

const Section = ({ body, myGithubProjects, portfolio }) => (
  <StyledSection myGithubProjects={myGithubProjects} portfolio={portfolio}>
    {body}
  </StyledSection>
);

export default Section;
