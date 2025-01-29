import EmptyState from "@/components/EmptyState/empty";
import DashboardLayout from "@/components/LayoutDashboard/layout";

export default function DashboardRolePage() {
  return (
    <DashboardLayout title="Role" company="vio">
      <EmptyState />
    </DashboardLayout>
  );
}
