import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { blue, red } from "@mui/material/colors";

const MenuItem = [
  {
    icon: "mdi:home-account",
    label: "Overview",
    path: "/customer",
  },
  {
    icon: "mdi:card-account-details-star",
    label: "Membership",
    path: "/customer/membership",
  },
  {
    icon: "mdi:shield-lock",
    label: "Security",
    path: "/customer/security",
  },
  {
    icon: "mdi:monitor-cellphone",
    label: "Devices",
    path: "/customer/device",
  },
  {
    icon: "mdi:account-box-multiple",
    label: "Profiles",
    path: "/customer/profile",
  },
];

const NavLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: string;
}) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Box
      component={Link}
      href={href}
      px={3}
      py={1.5}
      position="relative"
      display="flex"
      alignItems="center"
    >
      <motion.span
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          lineHeight: 1,
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Stack
          component="span"
          direction="row"
          display="inline-flex"
          alignItems="center"
          gap={2}
          lineHeight={1}
        >
          <Iconify name={icon} sx={{ position: "relative", zIndex: 1 }} />
          <Typography
            component="span"
            color="inherit"
            fontSize="1rem"
            fontWeight={isActive(href) ? 600 : 500}
            position="relative"
            zIndex={1}
            lineHeight={1}
          >
            {children}
          </Typography>
        </Stack>
      </motion.span>
      {isActive(href) && (
        <motion.span
          layoutId="underline"
          initial={{ opacity: 0.5, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          exit={{ opacity: 0.5, width: 0 }}
          style={{
            backgroundColor: red[100],
            borderRadius: 8,
            position: "absolute",
            width: "100%",
            height: "42px",
            top: 0,
            left: 0,
            display: "block",
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
};

export default function SidemenuCustomer() {
  return (
    <Stack gap={4}>
      <Button
        href="/"
        startIcon={<Iconify name="mdi:arrow-left" />}
        sx={{
          color: `${blue[700]} !important`,
          textTransform: "none",
          px: 0,
          justifyContent: "flex-start",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        Back to Home
      </Button>
      <Stack gap={2}>
        {MenuItem.map(({ label, path, icon }, i) => (
          <NavLink key={i} href={path} icon={icon}>
            {label}
          </NavLink>
        ))}
      </Stack>
    </Stack>
  );
}
