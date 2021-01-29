import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 0px;
`;

export const Inset = styled.h3`
  margin: 0;
`;

export const Title = styled.h1`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.title};
  font-size: 30px;
  line-height: 36px;
  padding-bottom: 0px;
  margin: 12px 0 0 0;
`;

export const Subheader = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 8px;
  font-weight: normal;
`;
