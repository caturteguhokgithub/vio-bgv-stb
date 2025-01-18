"use client";

import React from "react";
import { Stack } from "@mui/material";
import LayoutIntro from "@/components/LayoutIntro/page";
import IntroBgTitle from "./partials/bg";
import useBreakpoints from "@/themes/breakpoints";
import SectionTvChannel from "./partials/tv";
import SectionOtt from "./partials/ott";
import SectionGames from "./partials/games";
import SectionContinue from "./partials/continue";
import SectionOttVideo from "./partials/ottVideo";

export default function Intro() {
  const { onlySmallScreen } = useBreakpoints();

  return (
    <LayoutIntro>
      {/* <IntroBgTitle /> */}
      <Stack gap={6} mt={onlySmallScreen ? "6vh" : "8vh"}>
        <SectionTvChannel />
        <SectionOtt />
        <SectionGames />
        <SectionOttVideo />
        <SectionContinue />
      </Stack>
    </LayoutIntro>
  );
}
