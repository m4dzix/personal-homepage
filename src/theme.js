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
    text: "#6E7E91",
    lightLine: "rgba(209, 213, 218, 0.3)",
    darkLine: "rgba(209, 213, 218, 0.3)",
    hoverLine: "rgba(3, 102, 214, 0.2)",
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
    boxColor: " rgba(54, 54, 54, 0.72)",
    title: "#FFFFFF",
    text: "#FFFFFF",
    lightLine: "rgba(209, 213, 218, 0.1)",
    darkLine: "#E5E5E5",
    hoverLine: "rgba(3, 102, 214, 0.5)",
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
  filter: {
    makeIconBlue:
      "invert(0%) sepia(0%) saturate(0%) brightness(500%) contrast(100%)",
  },
};
