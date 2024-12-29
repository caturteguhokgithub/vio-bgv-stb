import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import CompanyLogo from "@/components/CompanyLogo/page";
import { grey, red } from "@mui/material/colors";
import Iconify from "@/components/Icon/iconify";
import Link from "next/link";

export default function HeaderCustomer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack bgcolor="white" borderBottom={`1px solid ${grey[300]}`}>
      <Container>
        <Stack direction="row" justifyContent="space-between" py={2}>
          <Box className="blurInBottom">
            <Link href="/customer">
              <CompanyLogo />
            </Link>
          </Box>
          <IconButton onClick={handleClick}>
            <Avatar sx={{ width: 28, height: 28, bgcolor: "red" }}>
              <Typography fontSize="0.7rem" color="white">
                CT
              </Typography>
            </Avatar>
          </IconButton>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Iconify name="mdi:account-outline" size={22} />
            </ListItemIcon>
            <ListItemText>
              <Typography>Account</Typography>
            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Iconify name="mdi:cog-outline" size={22} />
            </ListItemIcon>
            <ListItemText>
              <Typography>Manage Profiles</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Typography>Switch Profile</Typography>
          </MenuItem>
          <MenuItem sx={{ a: { width: "100%" } }}>
            <Link href="/">
              <Typography color={red[700]}>Sign Out</Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Stack>
  );
}
