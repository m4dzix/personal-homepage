import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-gap: 72px;
  ${(props) =>
    props.myGithubProjects &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
    `};
`;
