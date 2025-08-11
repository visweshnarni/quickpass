"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import DashboardHeader from "@/app/components/common/DashboardHeader";
import Sidebar from "@/app/components/common/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FFFFFF] m-0 p-0">
      {/* Top header */}
      <DashboardHeader />

      {/* Sidebar + Content */}
      <div className="flex px-3 ">
        {/* Sidebar with fixed width */}
        <div className="w-72">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 relative overflow-hidden px-3 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
