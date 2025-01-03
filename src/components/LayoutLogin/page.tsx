"use client";

import CompanyLogo from "@/components/CompanyLogo/page";
import { Box, Button, Stack } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { Fragment } from "react";
import React from "react";
import useBreakpoints from "@/themes/breakpoints";
import Link from "next/link";
import Iconify from "../Icon/iconify";

export default function LayoutLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const { onlySmallScreen } = useBreakpoints();

  return (
    <Fragment>
      <Stack
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            width: "35%",
            height: "55%",
            backgroundColor: red[600],
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            filter: "blur(200px)",
            opacity: 0.2,
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Box
          maxWidth={onlySmallScreen ? "90%" : 400}
          px={4}
          py={5}
          boxShadow="0 8px 32px 0 rgba(221, 0, 0, 0.1)"
          borderRadius={3}
          border="1px solid rgba( 255, 255, 255, 0.1)"
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            // background:
            //   "linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
            backdropFilter: "blur(5px)",
          }}
        >
          <Stack direction="row" justifyContent="center">
            <CompanyLogo dark />
          </Stack>
          {children}
          <Stack direction="row" justifyContent="center" mt={3}>
            <Button
              LinkComponent={Link}
              href="/"
              startIcon={
                <Iconify name="mdi:arrow-left" size={18} color={blue[600]} />
              }
              sx={{
                color: `${blue[600]} !important`,
                textTransform: "none",
              }}
            >
              Back to Home
            </Button>
          </Stack>
          {/* <Stack>
              <Typography fontSize="12px" color={grey[500]} align="center">
                Copyright {new Date().getFullYear()} &copy; Vio BGV Set Top Box
              </Typography>
            </Stack> */}
        </Box>
      </Stack>
    </Fragment>
  );
}
