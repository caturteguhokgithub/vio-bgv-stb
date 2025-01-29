import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function DashboardProductPage() {
  return (
    <DashboardLayout title="Product" company="vio">
      <EmptyState />
    </DashboardLayout>
  );
}
