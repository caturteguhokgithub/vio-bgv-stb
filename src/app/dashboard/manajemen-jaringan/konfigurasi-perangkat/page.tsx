"use client";

import DashboardLayout from "@/components/LayoutDashboard/layout";
import TableDevice from "./partials/table";
import { Breadcrumbs, Button, Card, Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function DeviceConfigurePage() {
  return (
    <DashboardLayout
      title="Konfigurasi Perangkat"
      breadcrumbs={
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 12 }}>
          <Link underline="hover" color="inherit" href="/">
            Manajemen Jaringan
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Konfigurasi Perangkat
          </Link>
          <Typography sx={{ color: "text.primary" }} fontSize={12}>
            List
          </Typography>
        </Breadcrumbs>
      }
      actionButton={
        <Button
          startIcon={<Icon icon="mdi:plus" />}
          size="small"
          variant="contained"
          color="primary"
        >
          Tambah Device
        </Button>
      }
    >
      <Card variant="outlined">
        <TableDevice />
      </Card>
    </DashboardLayout>
  );
}
