import githubIcon from "../../common/Assets/lightMode/github.svg";
import linkedinIcon from "../../common/Assets/lightMode/linkedin.svg";
import facebookIcon from "../../common/Assets/lightMode/facebook.svg";
import instagramIcon from "../../common/Assets/lightMode/instagram.svg";
import darkModeGithubIcon from "../../common/Assets/darkMode/github.svg";
import darkModeLinkedinIcon from "../../common/Assets/darkMode/linkedin.svg";
import darkModeFacebookIcon from "../../common/Assets/darkMode/facebook.svg";
import darkModeInstagramIcon from "../../common/Assets/darkMode/instagram.svg";

export const useSocialMedia = (darkMode) => {
  return [
    {
      name: "github",
      socialMediaIcon: () => (!darkMode ? githubIcon : darkModeGithubIcon),
      urlAdress: "https://github.com/m4dzix",
      alt: "Link to my github",
    },
    {
      name: "facebook",
      socialMediaIcon: () => (!darkMode ? facebookIcon : darkModeFacebookIcon),
      urlAdress: "https://github.com/m4dzix",
      alt: "Link to my facebook",
    },
    {
      name: "linkedin",
      socialMediaIcon: () => (!darkMode ? linkedinIcon : darkModeLinkedinIcon),
      urlAdress: "https://github.com/m4dzix",
      alt: "Link to my linkedin",
    },
    {
      name: "instagram",
      socialMediaIcon: () =>
        !darkMode ? instagramIcon : darkModeInstagramIcon,
      urlAdress: "https://github.com/m4dzix",
      alt: "Link to my instagram",
    },
  ];
};
