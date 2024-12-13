"use client";

import * as React from "react";
import { Breadcrumbs, Button, Link, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";

import { HeaderNav } from "./partials/header";
import { SideNav } from "./partials/sideNav";
import iTheme from "@/themes/themes";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: React.ReactNode;
  actionButton?: React.ReactNode;
}

export default function DashboardLayout({
  children,
  title,
  breadcrumbs,
  actionButton,
}: LayoutProps): React.JSX.Element {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            "--MainNav-zIndex": 1000,
            "--SideNav-width": "280px",
            "--SideNav-zIndex": 1100,
            "--MobileNav-width": "320px",
            "--MobileNav-zIndex": 1100,
          },
        }}
      />
      <Box
        // bgcolor="#fafafb"
        bgcolor="white"
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pl: { lg: "var(--SideNav-width)" },
          }}
        >
          <HeaderNav />
          <Box
            component="main"
            p={3}
            height="calc(100vh - 64px)"
            overflow="hidden"
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
                cursor: "pointer",
              },
            }}
          >
            {/* <Container maxWidth="xl" sx={{ p: 0 }}> */}
            <Stack gap={2}>
              <Stack direction="row" justifyContent="space-between" gap={2}>
                <Stack gap={0.5}>
                  <Typography
                    component="h2"
                    fontSize="1.2rem"
                    fontWeight={500}
                    color={iTheme.palette.secondary.dark}
                    lineHeight={1}
                  >
                    {title}
                  </Typography>
                  {breadcrumbs}
                </Stack>
                <Box>{actionButton}</Box>
              </Stack>
              {children}
            </Stack>
            {/* </Container> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
