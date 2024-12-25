import { Icon } from "@iconify/react";

export default function Iconify({
  name,
  size,
  color,
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  return <Icon icon={name} height={size || 18} color={color} />;
}
