"use client";

import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LayoutCustomer from "@/components/LayoutCustomer/page";
import { grey } from "@mui/material/colors";
import Iconify from "@/components/Icon/iconify";

export default function Device() {
  return (
    <LayoutCustomer title="Devices">
      <Stack>
        <Typography fontSize="1rem" fontWeight={600} color={grey[600]} mb={1}>
          Account Devices
        </Typography>
        <Stack>
          <Grid container spacing={6}>
            <Grid size={6}>
              <Stack>
                <Card
                  variant="outlined"
                  sx={{
                    p: 2,
                  }}
                >
                  <CardActions
                    sx={{
                      p: 0,
                      pb: 2,
                      mb: 2,
                      borderBottom: `1px solid ${grey[300]}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Stack direction="row" gap={1} alignItems="center">
                        <Iconify name="mdi:web-box" size={20} />
                        <Typography fontSize="1rem" fontWeight={600}>
                          Chrome - Web Browser
                        </Typography>
                      </Stack>
                      <Button variant="outlined" color="error" size="small">
                        Sign Out
                      </Button>
                    </Stack>
                  </CardActions>
                  <CardContent sx={{ p: "0 !important" }}>
                    <Stack gap={1.5}>
                      <Stack direction="row" gap={1.5} alignItems="center">
                        <Avatar sx={{ width: 24, height: 24, bgcolor: "red" }}>
                          <Typography fontSize="0.7rem" color="white">
                            CT
                          </Typography>
                        </Avatar>
                        <Typography fontSize="0.9rem" color={grey[700]}>
                          accountnetfix (Last watched)
                        </Typography>
                      </Stack>
                      <Stack direction="row" gap={1.5} alignItems="center">
                        <Iconify
                          name="mdi:clock-time-eight-outline"
                          size={24}
                        />
                        <Typography fontSize="0.9rem" color={grey[700]}>
                          12/25/24, 20:37 GMT+7
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </LayoutCustomer>
  );
}
