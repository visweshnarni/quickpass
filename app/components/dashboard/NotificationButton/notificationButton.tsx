import Link from "next/link";
import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <Link
      href="/dashboard/notifications"
      aria-label="Notifications"
      className="p-0 bg-transparent hover:bg-transparent focus:outline-none text-white hover:opacity-50 transition-opacity"
    >
      <Bell className="w-[36px] h-[36px]" />
    </Link>
  );
}
