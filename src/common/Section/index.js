import React from "react";
import { StyledSection } from "./styled";

const Section = ({ body, myGithubProjects }) => (
  <StyledSection myGithubProjects={myGithubProjects}>{body}</StyledSection>
);

export default Section;
