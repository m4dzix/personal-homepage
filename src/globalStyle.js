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
}

a {
color: ${({ theme }) => theme.colors.title};
text-decoration: none;
transition: 0.3s;
&:hover {
  color: ${({ theme }) => theme.colors.mainBlue};
  }
}
`;
