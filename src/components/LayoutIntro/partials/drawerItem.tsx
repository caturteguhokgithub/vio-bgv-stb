import React, { Fragment } from "react";
import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import { blue, grey, red } from "@mui/material/colors";
import { AnimatePresence, motion } from "motion/react";
import { dataAccount, dataInput, dataNotification, dataSetting } from "../data";

const ToggleBtnItem = ({
  title,
  desc,
  hasRemove,
  icon,
  menu,
  active,
  value,
  bgcolor,
  href,
}: {
  title: string;
  desc?: string;
  hasRemove?: boolean;
  icon?: string;
  menu?: string;
  active?: boolean;
  value?: string | any;
  bgcolor?: string;
  href?: string;
}) => {
  const [itemRemove, setItemRemove] = React.useState(true);
  const [itemActive, setItemActive] = React.useState(false);

  const handleToggle = () => {
    setItemActive(!itemActive);
  };

  const handleRemoveItem = () => {
    setItemRemove(false);
  };

  const handleClick = () => {
    if (menu === "input") {
      handleToggle();
    }
  };

  return (
    <AnimatePresence>
      {itemRemove && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            x: 500,
            transition: {
              duration: 0.3,
            },
          }}
          style={{ width: "100%" }}
        >
          <ToggleButton
            component="div"
            value={value}
            sx={{
              width: "100%",
              p: 0,
              textTransform: "none",
              bgcolor: bgcolor,
              transition: "all 300ms ease",

              "&:hover": {
                bgcolor: `${bgcolor}BF`,
              },
            }}
          >
            <Stack
              component="a"
              href={href}
              width="100%"
              px={4}
              py={3}
              direction="row"
              alignItems="center"
              gap={2}
              onClick={handleClick}
            >
              {menu == "account" ? (
                <Avatar sx={{ width: 24, height: 24, bgcolor: "white" }}>
                  <Typography fontSize="0.7rem">{icon}</Typography>
                </Avatar>
              ) : (
                <Iconify
                  name={icon || "line-md:email"}
                  color="white"
                  size={32}
                />
              )}
              <Stack color="white" maxWidth={300} flexGrow={1} component="span">
                <Typography component="h3" fontSize="1rem" fontWeight={600}>
                  {title}
                </Typography>
                <Typography
                  component="p"
                  fontSize="0.8rem"
                  whiteSpace="nowrap"
                  maxWidth={200}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  color={grey[300]}
                >
                  {desc}
                </Typography>
              </Stack>
              {hasRemove && (
                <IconButton onClick={handleRemoveItem}>
                  <Iconify name="line-md:close" color="white" size={16} />
                </IconButton>
              )}
              {menu == "input" && active && (
                <Iconify
                  name="line-md:circle-filled-to-confirm-circle-filled-transition"
                  color="white"
                  size={28}
                />
              )}
            </Stack>
          </ToggleButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function DrawerItem({
  title,
  menu,
}: {
  title: string;
  menu?: string;
}) {
  const [itemNotification, setItemNotification] = React.useState<string | null>(
    ""
  );
  const [itemInput, setItemInput] = React.useState<string | null>("3");

  const handleItemNotification = (
    event: React.MouseEvent<HTMLElement>,
    newItemNotification: string | null
  ) => {
    setItemNotification(newItemNotification);
  };

  const handleItemInput = (
    event: React.MouseEvent<HTMLElement>,
    newItemInput: string | null
  ) => {
    setItemInput(newItemInput);
  };

  return (
    <Fragment>
      <Box px={4} py={3}>
        <Typography fontWeight={600} color="white" fontSize="1.3rem">
          {title}
        </Typography>
      </Box>
      {menu == "notification" && (
        <Fragment>
          {dataNotification.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemNotification}
              exclusive
              onChange={handleItemNotification}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                hasRemove={item.hasRemove}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "input" && (
        <Fragment>
          {dataInput.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemInput}
              exclusive
              onChange={handleItemInput}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "setting" && (
        <Fragment>
          {dataSetting.map((item, index) => (
            <ToggleButtonGroup
              key={index}
              value={itemInput}
              exclusive
              onChange={handleItemInput}
              sx={{
                ".MuiToggleButton-root.Mui-selected": {
                  bgcolor: blue[600],
                },
              }}
            >
              <ToggleBtnItem
                value={item.value}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
      {menu == "account" && (
        <Fragment>
          <Stack
            direction="column"
            justifyContent="space-between"
            height="100%"
          >
            <Stack direction="column">
              {dataAccount.map((item, index) => (
                <ToggleButtonGroup
                  key={index}
                  value={itemInput}
                  exclusive
                  onChange={handleItemInput}
                  sx={{
                    ".MuiToggleButton-root.Mui-selected": {
                      bgcolor: blue[600],
                    },
                  }}
                >
                  <ToggleBtnItem
                    value={item.value}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    menu="account"
                    href={item.href}
                  />
                </ToggleButtonGroup>
              ))}
            </Stack>
            <Stack direction="column">
              <ToggleBtnItem
                icon="line-md:plus-circle"
                title="Add Account"
                desc="Login to different account"
              />
              <ToggleBtnItem
                bgcolor={red[800]}
                icon="line-md:log-out"
                title="Logout"
                desc="Logout to move apps"
              />
            </Stack>
          </Stack>
        </Fragment>
      )}
    </Fragment>
  );
}
