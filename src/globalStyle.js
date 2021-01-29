import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
 box-sizing: border-box;
}

*, ::after, ::before{
 box-sizing: inherit;
}

body {
 font-family: 'Inter', sans-serif;
 background-color: ${({ theme }) => theme.colors.background};
 transition: 0.3s;
 letter-spacing: 0.05em;
  line-height: 1.4;
}

a {
color: ${({ theme }) => theme.colors.title};
text-decoration: none;
transition: 0.3s linear;
&:hover {
  color: ${({ theme }) => theme.colors.mainBlue};
  }
}
`;
