import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function DashboardVoucherPage() {
  return (
    <DashboardLayout title="Voucher" company="vio">
      <EmptyState />
    </DashboardLayout>
  );
}
