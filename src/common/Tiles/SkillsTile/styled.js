import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "title"
    "content";
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-rows: auto;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.title};
  font-size: 30px;
  line-height: 36px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightLine};
  margin: 12px 0 0 0;
  ${(props) =>
    props.skillsIWantToLearn &&
    css`
      padding-bottom: 15px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkLine};
    `}
`;

export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 32px 0;
  list-style-image: ${({ theme }) => theme.imagesToStyling.listStyle};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: none;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
