"use client";

import React, { Fragment } from "react";
import { Box, Container, GlobalStyles, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { grey } from "@mui/material/colors";
import HeaderCustomer from "./partials/header";
import SidemenuCustomer from "./partials/sideMenu";

export default function LayoutCustomer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Fragment>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: grey[50],
          },
        }}
      />
      <HeaderCustomer />
      <Stack pt={5} pb={2}>
        <Container>
          <Grid container spacing={6}>
            <Grid size={2.5}>
              <SidemenuCustomer />
            </Grid>
            <Grid size={9.5}>
              <Stack direction="column" minHeight="calc(100vh - 140px)" gap={2}>
                <Typography fontSize="1.5rem" fontWeight={600}>
                  {title}
                </Typography>
                <Box flexGrow={1}>{children}</Box>
                <Typography fontSize="12px" color={grey[500]}>
                  Copyright {new Date().getFullYear()} &copy; Vio BGV Set Top
                  Box. All Rights Reserved
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Fragment>
  );
}
