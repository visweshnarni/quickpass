"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Here you can clear tokens or user info from localStorage/session if needed

    // Redirect to login page
    router.replace("/login");
  }, [router]);

  return (
    <div>
      Logging out...
    </div>
  );
}
