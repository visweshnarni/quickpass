'use client';

import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Profile', path: '/dashboard/profile' },
  { label: 'Apply Outpass', path: '/dashboard/apply' },
  { label: 'Status', path: '/dashboard/status' },
  { label: 'History', path: '/dashboard/history' },
  { label: 'My Outpass Score', path: '/dashboard/myoutpassScore' },
  { label: 'Logout', path: '/dashboard/logout' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="left-0 h-[calc(100vh-5rem)] w-full shadow p-0 z-40 hidden md:flex flex-col bg-[#1F8941]">

      {/* Menu Items */}
      <div className="space-y-1 flex-1 overflow-y-auto px-3 py-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => router.push(item.path)}
            className={`cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm font-medium
              ${
                pathname === item.path
                  ? 'bg-blue-100 text-[#00694A] font-semibold'
                  : 'text-white hover:bg-white hover:text-[#1F8941]'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
