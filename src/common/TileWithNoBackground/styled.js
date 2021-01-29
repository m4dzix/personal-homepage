import styled, { css } from "styled-components";
import myPhoto from "./image.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "photo title"
    "photo content";
  padding: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-rows: auto;
    grid-template-areas:
      "photo"
      "title"
      "content";
  }
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

export const Inset = styled.h3`
  margin: 0px;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  grid-area: title;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.title};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  padding-bottom: 0px;
  margin: 24px 0 0 0;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.05em;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  margin: 35px 0 0 0;
  ${(props) =>
    props.contact &&
    css`
      margin-top: 24px;
    `}
`;

export const Button = styled.button`
  font-weight: 600;
  width: 154px;
  font-size: 20.0584px;
  line-height: 24px;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  margin-top: 32px;
  transition: 0.3s;
  &:hover {
    ${(props) =>
      props.darkMode
        ? "box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;"
        : "box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;"};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
  margin: 56px 0;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.img`
  filter: ${(props) =>
    props.darkMode
      ? "invert(0%) sepia(0%) saturate(0%) brightness(500%) contrast(100%)"
      : "invert(10%) sepia(0%) saturate(0%) brightness(50%) contrast(100%)"};
  transition: 0.3s;
  &:hover {
    filter: none;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.mainBlue};
  line-height: 140%;
  padding: 2px;
  border-bottom: 1px solid rgba(3, 103, 216, 0.2);
`;
