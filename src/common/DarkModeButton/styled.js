import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-self: flex-end;
  margin-bottom: calc(-72px - 32px);
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  margin-right: 12.47px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const SwichThemeIcon = styled.div`
  transition: 0.5s;
  width: 48px;
  height: 26px;
  background-image: ${({ theme }) => theme.imagesToStyling.modeButton};
`;
