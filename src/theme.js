import loader from "./common/Assets/lightMode/loader.svg";
import darkModeLoader from "./common/Assets/darkMode/loader.svg";
import modeButton from "./common/Assets/lightMode/modeButton.svg";
import darkModeButton from "./common/Assets/darkMode/modeButton.svg";
import roundListStyle from "./common/Assets/lightMode/roundListStyle.svg";
import darkModeRoundListStyle from "./common/Assets/darkMode/roundListStyle.svg";

export const lightTheme = {
  colors: {
    background: "#FBFBFE",
    boxColor: "#FFFFFF",
    title: "#252525",
    projectTitle: "#0366D6",
    text: "#6E7E91",
    lightLine: "#D1D5DA4D",
    darkLine: "#D1D5DA4D",
    hoverLine: "#0366D633",
    mainBlue: "#0366D6",
  },
  breakpoints: {
    mobileMax: 812,
  },
  imagesToStyling: {
    loader: `url(${loader})`,
    modeButton: `url(${modeButton})`,
    listStyle: `url(${roundListStyle})`,
  },
  boxShadow: {
    button:
      "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;",
  },
  filter: {
    makeIconBlue:
      "invert(10%) sepia(0%) saturate(0%) brightness(50%) contrast(100%)",
  },
};

export const darkTheme = {
  colors: {
    background: "#252525",
    boxColor: "#363636b8",
    title: "#FFFFFF",
    projectTitle: "#FFFFFF",
    text: "#FFFFFF",
    lightLine: "#D1D5DA1A",
    darkLine: "#E5E5E5",
    hoverLine: "#0366D680",
    mainBlue: "#2188FF",
  },
  breakpoints: {
    mobileMax: 812,
  },
  imagesToStyling: {
    loader: `url(${darkModeLoader})`,
    modeButton: `url(${darkModeButton})`,
    listStyle: `url(${darkModeRoundListStyle})`,
  },
  boxShadow: {
    button:
      "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;",
  },
  filter: {
    makeIconBlue:
      "invert(0%) sepia(0%) saturate(0%) brightness(500%) contrast(100%)",
  },
};
