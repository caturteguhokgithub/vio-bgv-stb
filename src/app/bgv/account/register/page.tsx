"use client";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React, { Fragment } from "react";
import Iconify from "@/components/Icon/iconify";
import LayoutLogin from "@/components/LayoutLogin/page";
import { sxTfPassword } from "@/lib/constants";
import CompanyLogo from "@/components/CompanyLogo/page";
import useBreakpoints from "@/themes/breakpoints";

export default function Register() {
  const [togglePassword, setTogglePassword] = React.useState(false);

  const { onlySmallScreen, onlyMediumScreen, onlyLargeScreen } =
    useBreakpoints();

  const FormContent = (
    <Box
      // maxWidth={onlySmallScreen ? "90%" : 400}
      margin="0 auto"
      p={4}
      boxShadow="0 8px 32px 0 rgba(0, 0, 221, 0.1)"
      borderRadius={3}
      border="1px solid rgba( 255, 255, 255, 0.1)"
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        // background:
        //   "linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Create Username"
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                input: {
                  color: "white",
                  backgroundColor: "rgba( 255, 255, 255, 0.1)",
                  border: "1px solid rgba( 255, 255, 255, 0.5)",
                  borderRadius: 2,

                  "&::placeholder": {
                    color: grey[400],
                    opacity: 1,
                  },
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Add Email"
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                input: {
                  color: "white",
                  backgroundColor: "rgba( 255, 255, 255, 0.1)",
                  border: "1px solid rgba( 255, 255, 255, 0.5)",
                  borderRadius: 2,

                  "&::placeholder": {
                    color: grey[400],
                    opacity: 1,
                  },
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Add Phone Number"
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                input: {
                  color: "white",
                  backgroundColor: "rgba( 255, 255, 255, 0.1)",
                  border: "1px solid rgba( 255, 255, 255, 0.5)",
                  borderRadius: 2,

                  "&::placeholder": {
                    color: grey[400],
                    opacity: 1,
                  },
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              type={togglePassword ? "text" : "password"}
              placeholder="Create Password"
              variant="outlined"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        <Iconify
                          name={togglePassword ? "mdi:eye-off" : "mdi:eye"}
                          size={20}
                          color="white"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  // onKeyPress: (e) => {
                  //   if (e.key === "Enter") {
                  //     doLogin();
                  //   }
                  // },
                },
                inputLabel: { shrink: true },
              }}
              sx={sxTfPassword}
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              type={togglePassword ? "text" : "password"}
              placeholder="Retype Password"
              variant="outlined"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        <Iconify
                          name={togglePassword ? "mdi:eye-off" : "mdi:eye"}
                          size={20}
                          color="white"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  // onKeyPress: (e) => {
                  //   if (e.key === "Enter") {
                  //     doLogin();
                  //   }
                  // },
                },
                inputLabel: { shrink: true },
              }}
              sx={sxTfPassword}
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Add Referral Code"
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                input: {
                  color: "white",
                  backgroundColor: "rgba( 255, 255, 255, 0.1)",
                  border: "1px solid rgba( 255, 255, 255, 0.5)",
                  borderRadius: 2,

                  "&::placeholder": {
                    color: grey[400],
                    opacity: 1,
                  },
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid size={12} py={1}>
          <FormControl fullWidth>
            <Button
              LinkComponent={Link}
              href="/bgv/account/verification"
              variant="contained"
              color="primary"
              sx={{
                py: 2,
                borderRadius: 2,
                color: "white !important",

                "&:hover": {
                  bgcolor: blue[800],
                },
              }}
            >
              Create Account
            </Button>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <Typography color={grey[400]} align="center" fontSize="0.9rem">
            Already have an acount?{" "}
            <Typography
              fontSize="0.9rem"
              component={Link}
              href={"/bgv/account/login"}
              sx={{
                color: "white !important",
                transition: "all 300ms ease",
                "&:hover": {
                  color: `${blue[500]} !important`,
                },
              }}
            >
              Login Here
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const LogoContent = (
    <Stack width="100vw" alignItems="center" gap={onlyMediumScreen ? 2 : 3}>
      <CompanyLogo dark company="bgv" />
      <Stack gap={1}>
        <Typography
          component="h1"
          fontSize="2rem"
          color="white"
          fontWeight={600}
          textAlign="center"
          lineHeight={1}
        >
          Create Your Account
        </Typography>
        <Typography
          component="p"
          fontSize="1rem"
          color={grey[400]}
          textAlign="center"
          px={4}
        >
          You will use this to watch on your favorite devices
        </Typography>
      </Stack>
      {!onlyMediumScreen && (
        <Stack pb={3}>
          <Typography fontSize="12px" color={grey[500]} align="center">
            Copyright {new Date().getFullYear()} &copy; Vio BGV Set Top Box
          </Typography>
        </Stack>
      )}
    </Stack>
  );

  return (
    <Fragment>
      {/* <LayoutLogin
        loginLayout
        title="Create Your Account"
        desc="You will use this to watch on your favorite devices"
      >
        {FormContent}
      </LayoutLogin> */}
      <Stack
        minHeight="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            width: "35%",
            height: "55%",
            backgroundColor: blue[600],
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            filter: "blur(200px)",
            opacity: 0.2,
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          },
        }}
      >
        <Stack
          maxWidth={onlyLargeScreen ? "80vw" : "50vw"}
          direction={onlyMediumScreen ? "column" : "row"}
          alignItems="center"
          gap={onlyMediumScreen ? 3 : 10}
        >
          {LogoContent}
          {FormContent}
        </Stack>
      </Stack>
    </Fragment>
  );
}
