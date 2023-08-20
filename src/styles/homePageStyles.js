import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

export const UpperBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2rem",
}));

export const LowerBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5rem",

  "& .grid-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const LogoImage = styled(Image)(() => ({
  color: "transparent",
  height: "70px",
  width: "70px",
  borderRadius: "50%",
  border: "1px solid #EEEEEE",
  marginBottom: "1rem",
}));

export const HeadingText = styled(Typography)(() => ({
  fontSize: "20px",
}));

export const ParaText = styled(Typography)(() => ({
  fontSize: "15px",
}));

export const CommonAppBox = styled(Box)(() => ({
  border: "1px solid #E0E0E0",
  borderRadius: "10px",
  height: "150px",
  width: "150px",

  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#FAFAFA",
  },
}));

export const AppLogoImage = styled(Image)(() => ({
  color: "transparent",
  height: "70px",
  width: "70px",
  borderRadius: "50%",
  border: "1px solid #EEEEEE",
  marginBottom: "1rem",
}));

export const AppLogoText = styled(Typography)(() => ({
  fontSize: "15px",
}));

export const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));
