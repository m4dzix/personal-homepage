import styled from "styled-components";

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
