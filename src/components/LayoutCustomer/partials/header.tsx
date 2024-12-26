import React from "react";
import {
  Avatar,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CompanyLogo from "@/components/CompanyLogo/page";
import { grey } from "@mui/material/colors";

export default function HeaderCustomer() {
  return (
    <Stack bgcolor="white" borderBottom={`1px solid ${grey[300]}`}>
      <Container>
        <Stack direction="row" justifyContent="space-between" py={2}>
          <CompanyLogo />
          <IconButton>
            <Avatar sx={{ width: 28, height: 28, bgcolor: "red" }}>
              <Typography fontSize="0.7rem" color="white">
                CT
              </Typography>
            </Avatar>
          </IconButton>
        </Stack>
      </Container>
    </Stack>
  );
}
