import React from "react";
import { Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function DrawerMenu({
  open,
  onclose,
  children,
}: {
  open: boolean;
  onclose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Drawer
      open={open}
      onClose={onclose}
      anchor="right"
      sx={{
        ".MuiDrawer-paper": {
          bgcolor: grey[900],
          overflowX: "hidden",
          minWidth: 400,
        },
      }}
    >
      {children}
    </Drawer>
  );
}
