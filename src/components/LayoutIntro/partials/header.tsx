import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import DrawerMenu from "./drawerMenu";
import DrawerItem from "./drawerItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { red } from "@mui/material/colors";
import { cfMonoton } from "@/lib/constants";

const MenuItem = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Apps",
    path: "/apps",
  },
  {
    label: "My List",
    path: "/list",
  },
];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Box component={Link} href={href}>
      <motion.span
        transition={{ duration: 0.5 }}
        style={{
          color: "white",
          position: "relative",
        }}
      >
        <Typography
          color="inherit"
          fontSize="1.2rem"
          fontWeight={isActive(href) ? 700 : 500}
        >
          {children}
        </Typography>
        {isActive(href) && (
          <motion.span
            layoutId="underline"
            style={{
              position: "absolute",
              width: "100%",
              height: "2px",
              bottom: -4,
              display: "block",
              backgroundColor: "white",
            }}
          />
        )}
      </motion.span>
    </Box>
  );
};

export default function IntroHeader() {
  const [openNotif, setOpenNotif] = React.useState(false);
  const [openInput, setOpenInput] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);

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

  return (
    <Fragment>
      <motion.header
        ref={ref}
        style={{
          marginTop: "calc(7 * 8px)",
          paddingInline: conditionalStyle ? 24 : 80,
          paddingBlock: conditionalStyle ? 24 : "unset",
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
                  textShadow: "-4px 0px 6px black",
                  userSelect: "none",
                }}
              >
                <Box
                  component="span"
                  color={red[100]}
                  className={cfMonoton.className}
                >
                  v
                </Box>
                <Box
                  component="span"
                  color={red[300]}
                  className={cfMonoton.className}
                >
                  i
                </Box>
                <Box
                  component="span"
                  color={red[600]}
                  className={cfMonoton.className}
                >
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
              <Stack direction="row" alignItems="center" gap={4}>
                <Stack flexDirection="row" gap={3}>
                  {MenuItem.map(({ label, path }, i) => (
                    <NavLink key={i} href={path}>
                      {label}
                    </NavLink>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" gap={3}>
              <IconButton onClick={() => setOpenNotif(true)}>
                <Icon icon="mdi:bell-badge-outline" color="white" height={24} />
              </IconButton>
              <IconButton onClick={() => setOpenInput(true)}>
                <Icon icon="mdi:login-variant" color="white" height={24} />
              </IconButton>
              <IconButton>
                <Icon icon="mdi:cog-outline" color="white" height={24} />
              </IconButton>
              <IconButton onClick={() => setOpenAccount(true)}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: "white" }}>
                  <Typography fontSize="0.7rem">CT</Typography>
                </Avatar>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </motion.header>
      <DrawerMenu open={openNotif} onclose={() => setOpenNotif(false)}>
        <DrawerItem title="Notifications" menu="notification" />
      </DrawerMenu>
      <DrawerMenu open={openInput} onclose={() => setOpenInput(false)}>
        <DrawerItem title="Input Source" menu="input" />
      </DrawerMenu>
      <DrawerMenu open={openAccount} onclose={() => setOpenAccount(false)}>
        <DrawerItem title="Account" menu="account" />
      </DrawerMenu>
    </Fragment>
  );
}
