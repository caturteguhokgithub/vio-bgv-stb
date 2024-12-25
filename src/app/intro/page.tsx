"use client";

import React from "react";
import { Stack } from "@mui/material";
import SectionFavorite from "./partials/favorite";
import SectionLiveTv from "./partials/liveTv";
import LayoutIntro from "@/components/LayoutIntro/page";
import IntroBgTitle from "./partials/bg";

export default function Intro() {
  return (
    <LayoutIntro>
      <IntroBgTitle />
      <Stack gap={6} mt="8vh">
        <SectionFavorite />
        <SectionLiveTv />
        <SectionFavorite />
        <SectionLiveTv />
      </Stack>
    </LayoutIntro>
  );
}
