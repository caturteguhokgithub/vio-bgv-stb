import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function DashboardUserPage() {
  return (
    <DashboardLayout title="User" company="vio">
      <EmptyState />
    </DashboardLayout>
  );
}
