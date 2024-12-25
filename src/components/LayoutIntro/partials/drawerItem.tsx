import React, { Fragment } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Icon/iconify";
import { blue, grey } from "@mui/material/colors";
import { AnimatePresence, motion } from "motion/react";
import { dataAccount, dataInput, dataNotification } from "../data";

const ToggleBtnItem = ({
  title,
  desc,
  hasRemove,
  icon,
  menu,
  active,
  value,
}: {
  title: string;
  desc?: string;
  hasRemove?: boolean;
  icon?: string;
  menu?: string;
  active?: boolean;
  value?: string | any;
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
            sx={{ width: "100%", p: 0, textTransform: "none" }}
          >
            <Stack
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
      {menu == "account" && (
        <Fragment>
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
              />
            </ToggleButtonGroup>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}
