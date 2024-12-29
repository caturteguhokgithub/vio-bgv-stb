"use client";

import React from "react";
import { Stack } from "@mui/material";
import SectionFavorite from "./partials/favorite";
import SectionLiveTv from "./partials/liveTv";
import LayoutIntro from "@/components/LayoutIntro/page";
import IntroBgTitle from "./partials/bg";
import useBreakpoints from "@/themes/breakpoints";

export default function Intro() {
  const { onlySmallScreen } = useBreakpoints();

  return (
    <LayoutIntro>
      <IntroBgTitle />
      <Stack gap={6} mt={onlySmallScreen ? "6vh" : "8vh"}>
        <SectionFavorite />
        <SectionLiveTv />
        <SectionFavorite />
        <SectionLiveTv />
      </Stack>
    </LayoutIntro>
  );
}
