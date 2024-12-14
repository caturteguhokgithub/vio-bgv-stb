import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  alpha,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { blue, grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";
import { MenuItems } from "./menuItems";

export function SideNav({
  toggleCollapse,
}: {
  toggleCollapse: boolean;
}): React.JSX.Element {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [toggleHoverCollapse, setToggleHoverCollapse] = useState(false);

  const handleHoverCollapse = () => {
    setToggleHoverCollapse(!toggleHoverCollapse);
  };

  const pathname = usePathname();

  useEffect(() => {
    const newOpen: Record<string, boolean> = {};
    MenuItems.forEach((group, groupIndex) => {
      group.items.forEach((item, itemIndex) => {
        if (item.subItems) {
          item.subItems.forEach((subItem) => {
            if (pathname.startsWith(subItem.path)) {
              newOpen[`${groupIndex}-${itemIndex}`] = true;
            }
          });
        }
      });
    });
    setOpen(newOpen);
  }, [pathname]);

  const handleClick = (
    groupIndex: number,
    itemIndex: number,
    isParent: boolean
  ) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpen((prevOpen) => {
      const newOpen = isParent ? {} : { ...prevOpen };
      newOpen[key] = !prevOpen[key];
      return newOpen;
    });
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path);

  return (
    <Box
      // bgcolor="#F5F7F9"
      bgcolor={grey[50]}
      // borderRight="1px solid var(--mui-palette-divider)"
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: toggleCollapse ? "72px" : "var(--SideNav-width)",
        zIndex: "var(--SideNav-zIndex)",
        "&::-webkit-scrollbar": { display: "none" },
        transition: "width 300ms ease-in-out",
        ...(toggleCollapse && {
          "&:hover": {
            width: "var(--SideNav-width)",
          },
        }),
      }}
      onMouseEnter={handleHoverCollapse}
      onMouseLeave={handleHoverCollapse}
    >
      <Stack direction="row" justifyContent="center">
        <Stack justifyContent="center" alignItems="flex-end" height={64}>
          {/* {toggleCollapse && !toggleHoverCollapse ? (
            <Typography
              color="black"
              fontSize={16}
              fontWeight={600}
              className="cssanimation fadeInTop"
            >
              VBS
            </Typography>
          ) : (
            <Typography
              color="black"
              fontSize={16}
              fontWeight={600}
              className="cssanimation fadeInTop"
            >
              VIO BGV STB
            </Typography>
          )} */}
          <Typography
            color="black"
            fontSize={16}
            fontWeight={600}
            className={`cssanimation ${
              toggleCollapse && !toggleHoverCollapse
                ? "blurInTop"
                : "blurInBottom"
            }`}
          >
            {toggleCollapse && !toggleHoverCollapse ? "VBS" : "VIO BGV STB"}
          </Typography>
          {/* <Box
            component={Link}
            href={paths.home}
            sx={{ display: "inline-flex" }}
          >
            <Image
              src="https://res.cloudinary.com/caturteguh/image/upload/v1727302971/unimind/logo-unimind_f1ehza.png"
              alt="unimind"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "76px",
                height: "auto",
              }}
            />
          </Box> */}
        </Stack>
      </Stack>
      {/* <Divider sx={{ borderColor: "var(--mui-palette-divider)" }} /> */}
      <Box
        component="nav"
        overflow="auto"
        sx={{
          flex: "1 1 auto",
          p: 2,
          overflowX: "hidden",
        }}
      >
        <Stack spacing={3} sx={{ listStyle: "none", m: 0, p: 0 }}>
          {MenuItems.map((menu, groupIndex) => (
            <Box key={groupIndex}>
              <Typography
                component="h3"
                fontWeight={600}
                color={grey[400]}
                fontSize="0.7rem"
                px={1}
                mb={1}
                textTransform="uppercase"
              >
                {menu.groupName}
              </Typography>
              {menu.groupName && (
                // <Stack spacing={1}>
                <List component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
                  {menu.items.map((item, itemIndex) => (
                    <React.Fragment key={item.text}>
                      <ListItem
                        // component={Link}
                        // href={item.subItems ? "" : item.path}
                        onClick={() =>
                          handleClick(groupIndex, itemIndex, !!item.subItems)
                        }
                        sx={{
                          px: toggleCollapse && !toggleHoverCollapse ? 0 : 2,
                          justifyContent:
                            toggleCollapse && !toggleHoverCollapse
                              ? "center"
                              : "unset",
                          gap: 1,
                          ...(isActive(item.path) && {
                            bgcolor: alpha(blue[700], 0.15),
                            // color: "white",
                            // boxShadow:
                            //   "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 8px",
                          }),
                          // bgcolor: isActive(item.path)
                          //   ? "white"
                          //   : "transparent",
                          borderRadius: 1,
                          userSelect: "none",
                          cursor: "pointer",
                        }}
                      >
                        <ListItemAvatar
                          sx={{
                            minWidth: 0,
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            icon={item.icon}
                            color={isActive(item.path) ? blue[700] : "black"}
                            height={
                              toggleCollapse && !toggleHoverCollapse ? 24 : 18
                            }
                          />
                        </ListItemAvatar>
                        {toggleCollapse && !toggleHoverCollapse ? null : (
                          <>
                            <ListItemText>
                              <Typography
                                color={
                                  isActive(item.path) ? blue[700] : "black"
                                }
                                fontSize={14}
                              >
                                {item.text}
                              </Typography>
                            </ListItemText>
                            {item.subItems ? (
                              open[`${groupIndex}-${itemIndex}`] ? (
                                <Icon icon="material-symbols-light:keyboard-arrow-up" />
                              ) : (
                                <Icon icon="material-symbols-light:keyboard-arrow-down" />
                              )
                            ) : null}
                          </>
                        )}
                      </ListItem>
                      {(!toggleCollapse || toggleHoverCollapse) && (
                        <>
                          {item.subItems && (
                            <Collapse
                              in={open[`${groupIndex}-${itemIndex}`]}
                              timeout="auto"
                              mountOnEnter
                              unmountOnExit
                            >
                              <List
                                component="div"
                                disablePadding
                                sx={{
                                  pr: 5,
                                  mt: 0.5,
                                  mb: 2,
                                  listStyleType: "disc",
                                  a: {
                                    "&::marker": {
                                      color: grey[400],
                                    },
                                  },
                                }}
                              >
                                {item.subItems.map((subItem) => (
                                  <ListItem
                                    key={subItem.text}
                                    component={Link}
                                    href={subItem.path}
                                    sx={{
                                      display: "list-item",
                                      ml: 5,
                                      px: 0,
                                      py: 0.7,
                                      // bgcolor:
                                      //   pathname === subItem.path
                                      //     ? alpha(blue[100], 0.4)
                                      //     : "transparent",
                                      borderRadius: 1,
                                    }}
                                  >
                                    <ListItemText sx={{ m: 0 }}>
                                      <Typography
                                        color={
                                          pathname === subItem.path
                                            ? blue[700]
                                            : "black"
                                        }
                                        // fontWeight={
                                        //   pathname === subItem.path
                                        //     ? 700
                                        //     : "normal"
                                        // }
                                        fontSize="0.83rem"
                                        lineHeight={1}
                                      >
                                        {subItem.text}
                                      </Typography>
                                    </ListItemText>
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </List>
                // </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
