import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function PaymentPage() {
  return (
    <DashboardLayout title="Pembayaran">
      <EmptyState />
    </DashboardLayout>
  );
}
