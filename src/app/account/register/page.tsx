"use client";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React from "react";
import Iconify from "@/components/Icon/iconify";
import LayoutLogin from "@/components/LayoutLogin/page";
import { sxTfPassword } from "@/lib/constants";

export default function Register() {
  const [togglePassword, setTogglePassword] = React.useState(false);

  return (
    <LayoutLogin>
      <Grid container spacing={2} mt={4}>
        <Grid size={12}>
          <FormControl fullWidth>
            <TextField
              placeholder="Add Email or Phone Number"
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
              placeholder="Add Password"
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
        <Grid size={12} py={1}>
          <FormControl fullWidth>
            <Button
              variant="contained"
              color="error"
              sx={{
                py: 2,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: blue[800],
                },
              }}
            >
              Register Account
            </Button>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <Typography color={grey[400]} align="center" fontSize="0.9rem">
            Already have an acount?{" "}
            <Typography
              fontSize="0.9rem"
              component={Link}
              href={"/account/login"}
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
    </LayoutLogin>
  );
}