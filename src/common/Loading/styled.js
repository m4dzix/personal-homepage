import styled, { keyframes } from "styled-components";
import loader from "../Assets/loader.svg";

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
`;

export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 88px;
`;

export const Loader = styled.div`
  background-image: url(${loader});
  animation: ${rotate} 1s linear infinite;
  width: 160px;
  height: 160px;
  margin-bottom: 88px;
`;
