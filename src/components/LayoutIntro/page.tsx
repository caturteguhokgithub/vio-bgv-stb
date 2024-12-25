"use client";

import React, { Fragment } from "react";
import { Stack } from "@mui/material";
import IntroHeader from "./partials/header";

export default function LayoutIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <IntroHeader />
      <Stack px={10} pb={7}>
        {children}
      </Stack>
    </Fragment>
  );
}
