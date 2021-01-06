import styled, { keyframes } from "styled-components";
import loader from "../Assets/lightMode/loader.svg";
import darkModeLoader from "../Assets/darkMode/loader.svg";

const rotate = keyframes` 
to {
  transform: rotate(360deg)
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 48px;
`;

export const Loader = styled.div`
  animation: ${rotate} 1s linear infinite;
  width: 160px;
  height: 160px;
  margin-bottom: 88px;
  ${(props) =>
    props.darkMode
      ? `background-image: url(${loader});`
      : `background-image: url(${darkModeLoader});`}
`;
