import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import {
  CustomContainer,
  EmptyBox,
  LeftContainer,
  MainContainer,
  RightContainer,
  SanwadHeading,
  SanwadPara,
} from "@/styles/sanwad-styles/sanwandPageStyles";
import EmptyChatIcon from "@/Icons/EmptyChatIcon";
import { Box } from "@mui/material";

function SanwadHomePage() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <CustomContainer>
          <LeftContainer>Left</LeftContainer>
          <RightContainer>
            <EmptyBox>
              <EmptyChatIcon />
              <SanwadHeading>Ready To Go For Sanwad</SanwadHeading>
              <SanwadPara>
                Send and receive messages using our web app.
                <br />
                Use Sanwad to connect or chat with your freinds with 100%
                privacy.
              </SanwadPara>
            </EmptyBox>
          </RightContainer>
        </CustomContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default SanwadHomePage;
