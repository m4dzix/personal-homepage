import styled, { css } from "styled-components";
import myPhoto from "./image.jpg";

export const Container = styled.aside`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "photo title"
    "photo content";
  padding: 32px;
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
`;
export const Inset = styled.h1`
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.slateGray};
`;
export const Title = styled.h1`
  grid-area: title;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 0;
  padding-bottom: 15px;
`;
export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.slateGray};
  letter-spacing: 0.05em;
`;
export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
  margin-top: 35px;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  margin-top: 32px;
  transition: 0.3;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }
`;

export const Item = styled.li`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
`;
