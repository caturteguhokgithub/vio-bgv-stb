import React from "react";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function IntroHeader() {
  return (
    <Box component="header">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={4}>
          <Link href="#" underline="hover">
            <Typography color="white" fontSize="1.2rem">
              Home
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography color="white" fontSize="1.2rem">
              Shop
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography color="white" fontSize="1.2rem">
              Apps
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3}>
          <IconButton>
            <Icon icon="mdi:login-variant" color="white" height={24} />
          </IconButton>
          <IconButton>
            <Icon icon="mdi:cog-outline" color="white" height={24} />
          </IconButton>
          <IconButton>
            <Avatar sx={{ width: 24, height: 24 }}>
              <Typography fontSize="0.7rem">CT</Typography>
            </Avatar>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
