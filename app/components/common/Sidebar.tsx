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
      <div className="space-y-1 flex-1 overflow-y-auto px-3 py-3">
  {menuItems.map((item) => (
    <button
      key={item.label}
      type="button"
      onClick={() => router.push(item.path)}
      className={`cursor-pointer w-full flex items-center justify-center
        px-3 py-3 rounded-md text-[16px] font-normal 
        ${
          pathname === item.path
                  ? 'bg-white text-[#1F8941] font-semibold'
                  : 'text-white hover:bg-white hover:text-[#1F8941] hover:font-semibold'
        }`}
    >
      {item.label}
    </button>
  ))}
</div>

    </aside>
  );
}
