import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.app_background,
  backgroundImage: `linear-gradient(180deg,${theme.app_background},${theme.app_background_deeper})`,
  height: "100vh",
  width: "100vw",

  "&::after": {
    content: `""`,
    width: "100%",
    height: "127px",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: theme.app_background_stripe,
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.intro_background,
  position: "fixed",
  zIndex: 9999,
  left: "2rem",
  top: "2rem",
  bottom: "2rem",
  right: "2rem",

  display: "flex",
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "30%",
  maxWidth: "30%",
  // border: "1px solid red",
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "70%",
}));

export const EmptyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  "-webkit-user-select": "none",
  "-khtml-user-select": "none",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "-o-user-select": "none",
  userSelect: "none",
}));

export const SanwadHeading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: theme.primary_title,

  marginTop: "2rem",
}));

export const SanwadPara = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: theme.primary_title,
  opacity: 0.6,
  marginTop: "1rem",

  textAlign: "center",
}));
