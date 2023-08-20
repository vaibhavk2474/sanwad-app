import {
  AppLogoImage,
  AppLogoText,
  CommonAppBox,
  CustomLink,
  HeadingText,
  LogoImage,
  LowerBox,
  ParaText,
  UpperBox,
} from "@/styles/homePageStyles";

import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <UpperBox>
        <LogoImage src="/logo/logo.jpeg" alt="logo" width={100} height={100} />
        <HeadingText>Let&apos;s Start SANWAD</HeadingText>
        <ParaText>You can select here any following app.</ParaText>
      </UpperBox>
      <LowerBox>
        <Grid container spacing={2} className="grid-container">
          <Grid item>
            <CustomLink href="/sanwad">
              <CommonAppBox>
                <AppLogoImage
                  src="/logo/logo.jpeg"
                  alt="img"
                  width={20}
                  height={20}
                />
                <AppLogoText>Sanvad</AppLogoText>
              </CommonAppBox>
            </CustomLink>
          </Grid>
          <Grid item>
            <CommonAppBox>
              <AppLogoImage
                src="/logo/logo.jpeg"
                alt="img"
                width={20}
                height={20}
              />
              <AppLogoText>Sanvad</AppLogoText>
            </CommonAppBox>
          </Grid>
          <Grid item>
            <CommonAppBox>
              <AppLogoImage
                src="/logo/logo.jpeg"
                alt="img"
                width={20}
                height={20}
              />
              <AppLogoText>Sanvad</AppLogoText>
            </CommonAppBox>
          </Grid>
          <Grid item>
            <CommonAppBox>
              <AppLogoImage
                src="/logo/logo.jpeg"
                alt="img"
                width={20}
                height={20}
              />
              <AppLogoText>Sanvad</AppLogoText>
            </CommonAppBox>
          </Grid>
        </Grid>
      </LowerBox>
    </Box>
  );
}
