import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DrawerMenu from "./drawerMenu";
import DrawerItem from "./drawerItem";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo/page";
import useBreakpoints from "@/themes/breakpoints";
import { MainMenu, MenuItems } from "./mainMenu";
import { grey } from "@mui/material/colors";

export default function IntroHeader() {
  const [openNotif, setOpenNotif] = React.useState(false);
  const [openInput, setOpenInput] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollYProgress, [0.3], ["0"]);

  const [conditionalStyle, setConditionalStyle] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setConditionalStyle(true);
      } else {
        setConditionalStyle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { onlySmallScreen, onlyMediumScreen } = useBreakpoints();

  return (
    <Fragment>
      <motion.header
        ref={ref}
        style={{
          marginTop: onlySmallScreen ? 24 : "calc(7 * 8px)",
          paddingInline: conditionalStyle ? 24 : onlyMediumScreen ? 24 : 80,
          paddingBlock: conditionalStyle ? 16 : "unset",
          position: "sticky",
          top: 0,
          zIndex: 5,
          width: "100%",
          transition: "all 0.3s ease",
          y: headerY,
          backgroundColor: conditionalStyle
            ? "var(--mui-palette-background-default)"
            : "transparent",
        }}
      >
        <Box component="header" position="relative" zIndex={10}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" gap={8}>
              <Link href="/">
                <CompanyLogo dark />
              </Link>
              {!onlyMediumScreen && (
                <Stack direction="row" alignItems="center" gap={4}>
                  <Stack flexDirection="row" gap={3}>
                    {MenuItems.map(({ label, path }, i) => (
                      <MainMenu key={i} href={path}>
                        {label}
                      </MainMenu>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={onlyMediumScreen ? 1 : 3}
            >
              <IconButton onClick={() => setOpenSearch(true)}>
                <Icon icon="mdi:magnify" color="white" height={24} />
              </IconButton>
              {!onlyMediumScreen && (
                <Fragment>
                  <IconButton onClick={() => setOpenNotif(true)}>
                    <Icon
                      icon="mdi:bell-badge-outline"
                      color="white"
                      height={24}
                    />
                  </IconButton>
                  <IconButton onClick={() => setOpenInput(true)}>
                    <Icon icon="mdi:login-variant" color="white" height={24} />
                  </IconButton>
                  <IconButton onClick={() => setOpenSetting(true)}>
                    <Icon icon="mdi:cog-outline" color="white" height={24} />
                  </IconButton>
                </Fragment>
              )}
              <IconButton onClick={() => setOpenAccount(true)}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: "white" }}>
                  <Typography fontSize="0.7rem">CT</Typography>
                </Avatar>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </motion.header>
      <DrawerMenu
        position="top"
        open={openSearch}
        onclose={() => setOpenSearch(false)}
      >
        <Stack p={3} direction="row" gap={3}>
          {!onlyMediumScreen && <CompanyLogo dark />}
          <TextField
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:magnify" color="white" height={28} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 2,
                "&:hover": {
                  outline: `1px solid ${grey[400]}`,
                },
              },
              ".MuiInputBase-input": {
                color: "white",
              },
              fieldset: {
                borderColor: grey[700],
              },
            }}
          />
        </Stack>
      </DrawerMenu>
      <DrawerMenu open={openNotif} onclose={() => setOpenNotif(false)}>
        <DrawerItem title="Notifications" menu="notification" />
      </DrawerMenu>
      <DrawerMenu open={openInput} onclose={() => setOpenInput(false)}>
        <DrawerItem title="Input Source" menu="input" />
      </DrawerMenu>
      <DrawerMenu open={openSetting} onclose={() => setOpenSetting(false)}>
        <DrawerItem title="Settings" menu="setting" />
      </DrawerMenu>
      <DrawerMenu
        mobileView={onlyMediumScreen}
        open={openAccount}
        onclose={() => setOpenAccount(false)}
      >
        {onlyMediumScreen ? (
          <DrawerItem menu="mobile" />
        ) : (
          <DrawerItem title="Account" menu="account" />
        )}
      </DrawerMenu>
    </Fragment>
  );
}
