import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 71.5px;
  margin-bottom: 48px;
`;

export const Subheader = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.05em;
  margin: 23.16px 0 0 0;
`;
export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin: 32px 0 0 0;
  text-align: center;
  letter-spacing: 0.05em;
`;
export const GoToGithubButton = styled.a`
  font-weight: 600;
  font-size: 20.0584px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: #ffffff;
  margin: 44px 0 0 0;
  &:hover {
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.mainBlue};
  }
  &:hover {
    ${(props) =>
      props.darkMode
        ? "box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;"
        : "box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;"};
  }
`;
