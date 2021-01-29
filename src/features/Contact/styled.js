import styled from "styled-components";

export const Item = styled.li`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.img`
  filter: ${({ theme }) => theme.filter.makeIconBlue};
  transition: 0.3s;
  &:hover {
    filter: none;
  }
`;
