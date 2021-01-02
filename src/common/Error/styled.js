import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Subheader = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
`;
export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-bottom: 32px;
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
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }
`;
