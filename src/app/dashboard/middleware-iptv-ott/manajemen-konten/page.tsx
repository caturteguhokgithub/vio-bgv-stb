"use client";

import React from "react";
import DashboardLayout from "@/components/LayoutDashboard/layout";
import { Button, Card } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import DialogComponent from "@/components/Dialog/dialog";
import SnackbarSuccess from "@/components/Snackbar/snack";
import BreadcrumbPage from "@/components/Breadcrumb/breadcrumb";
import TableContent from "./partials/table";
import FormContent from "./partials/form";

export default function ContentManagementPage() {
  const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
  const [snackSuccess, setSnackSuccess] = React.useState(false);

  const breadcrumbData = [
    { label: "Middleware IPTV & OTT", href: "/" },
    { label: "Manajemen Konten", href: "/about" },
    { label: "List" },
  ];

  return (
    <>
      <DashboardLayout
        title="Manajemen Konten"
        breadcrumbs={<BreadcrumbPage breadcrumbData={breadcrumbData} />}
        actionButton={
          <Button
            startIcon={<Icon icon="line-md:plus" />}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setModalOpenAdd(true)}
          >
            Tambah Konten
          </Button>
        }
      >
        <Card variant="outlined">
          <TableContent />
        </Card>
      </DashboardLayout>
      <DialogComponent
        closeButton
        width={480}
        dialogOpen={modalOpenAdd}
        dialogClose={() => setModalOpenAdd(false)}
        title="Tambah Konten"
        labelCancel="Batal"
        labelSubmit="Simpan"
        handleModalCancel={() => setModalOpenAdd(false)}
        handleModalSubmit={() => {
          setModalOpenAdd(false);
          setSnackSuccess(true);
        }}
      >
        <FormContent mode="add" />
      </DialogComponent>
      <SnackbarSuccess
        handleSnackOpen={snackSuccess}
        handleSnackClose={() => setSnackSuccess(false)}
      />
    </>
  );
}
