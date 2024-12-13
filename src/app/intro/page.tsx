import React from "react";
import { Stack } from "@mui/material";
import SectionFavorite from "./partials/favorite";
import SectionLiveTv from "./partials/liveTv";
import IntroHeader from "./partials/header";
import IntroBgTitle from "./partials/bg";

export default function Intro() {
  return (
    <Stack height="100vh" overflow="auto" px={10} py={7}>
      <IntroHeader />
      <IntroBgTitle />
      <Stack gap={6} mt="8vh">
        <SectionFavorite />
        <SectionLiveTv />
      </Stack>
    </Stack>
  );
}
