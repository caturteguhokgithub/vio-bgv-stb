import React from "react";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { cfMonoton } from "@/lib/constants";

export default function CompanyLogo({ dark }: { dark?: boolean }) {
  return (
    <Typography
      fontSize="3rem"
      color="white"
      fontWeight={900}
      letterSpacing="-0.15em"
      lineHeight={1}
      position="relative"
      component="div"
      textTransform="uppercase"
      sx={{
        textShadow: `-4px 0px 6px ${dark ? "black" : "white"}`,
        userSelect: "none",
      }}
    >
      <Box component="span" color={red[100]} className={cfMonoton.className}>
        v
      </Box>
      <Box component="span" color={red[300]} className={cfMonoton.className}>
        i
      </Box>
      <Box component="span" color={red[600]} className={cfMonoton.className}>
        o
      </Box>
      {/* <span style={{ width: 8, display: "inline-block" }}> </span>
  <span>b</span>
  <span>g</span>
  <span>v</span>
  <span style={{ width: 8, display: "inline-block" }}> </span>
  <span>s</span>
  <span>t</span>
  <span>b</span> */}
    </Typography>
  );
}
