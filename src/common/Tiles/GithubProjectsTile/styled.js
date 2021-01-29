import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "title"
    "content";
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid ${({ theme }) => theme.colors.lightLine};
  width: 100%;
  transition: 0.3s;
  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.hoverLine};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-rows: auto;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.projectTitle};
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 0px;
  margin: 0;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin: 24px 0 0 0;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr 1fr;
  list-style: none;
  padding: 0px;
  margin: 24px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: none;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.mainBlue};
  line-height: 140%;
  padding: 2px;
  border-bottom: 1px solid rgba(3, 103, 216, 0.2);
`;
