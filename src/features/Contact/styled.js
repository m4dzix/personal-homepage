import styled from "styled-components";

export const Item = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.img`
  filter: ${({ theme }) => theme.filter.makeIconBlue};
  transition: 0.3s;
  &:hover {
    filter: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 31.94px;
  }
`;
