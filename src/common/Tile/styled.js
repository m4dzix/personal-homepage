import styled, { css } from "styled-components";
import myPhoto from "./image.jpg";
import roundListStyle from "../Assets/roundListStyle.svg";

export const Container = styled.aside`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "title"
    "content";
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-rows: auto;
  }
  ${(props) =>
    props.introducingYourself &&
    css`
      grid-template-areas:
        "photo title"
        "photo content";
      background-color: transparent;
      box-shadow: none;
      border: none;
      width: auto;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-areas:
          "photo"
          "title"
          "content";
      }
    `}
  ${(props) =>
    props.myGithubProjects &&
    css`
      padding: 50px;
    `}
  ${(props) =>
    props.contact &&
    css`
      grid-template-areas:
        "title "
        "content ";
      width: 100%;
      max-width: 670px;
    `}
`;
export const Photo = styled.div`
  grid-area: photo;
  background-image: url(${myPhoto});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 398px;
  height: 398px;
  border-radius: 100%;
  margin-right: 66px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132.67px;
    height: 132.67px;
  }
`;
export const Inset = styled.h1`
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.slateGray};
`;
export const Title = styled.h1`
  grid-area: title;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin-bottom: 0px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mercury};
  ${(props) =>
    props.introducingYourself &&
    css`
      padding-bottom: 0;
      border-bottom: none;
    `}
  ${(props) =>
    props.myGithubProjects &&
    css`
      color: ${({ theme }) => theme.colors.scienceBlue};
      font-size: 24px;
      border-bottom: none;
      padding-bottom: 0;
    `}
`;
export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.slateGray};
  letter-spacing: 0.05em;
`;
export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
  margin: 35px 0 0 0;
  ${(props) =>
    props.myGithubProjects &&
    css`
      font-size: 18px;
      margin-top: 24px;
    `}
`;
export const Button = styled.button`
  font-weight: 600;
  width: 154px;
  font-size: 20.0584px;
  line-height: 24px;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  margin-top: 32px;
  transition: 0.3;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }
`;
export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  list-style-image: url(${roundListStyle});
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: none;
  }
  ${(props) =>
    props.myGithubProjects &&
    css`
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
      list-style: none;
      padding: 0px;
      width: auto;
    `}
  ${(props) =>
    props.contact &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: none;
      list-style: none;
      margin-top: 50px;
      padding: 0px;
      grid-gap: 24px;
      width: auto;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
`;
export const Item = styled.li`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
`;
export const Icon = styled.img`
  filter: invert(10%) sepia(0%) saturate(0%) hue-rotate(329deg) brightness(50%)
    contrast(100%);
  &:hover {
    filter: none;
  }
`;
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.scienceBlue};
  border-bottom: 1px solid rgba(3, 103, 216, 0.2);
`;
