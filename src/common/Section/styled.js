import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-gap: 72px;
  margin: 0 14px;
  ${(props) =>
    props.myGithubProjects &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: none;
      }
    `};
`;
