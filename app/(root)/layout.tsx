import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/lib/actions/user.actions";

import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex h-screen flex-col">
      <Navbar {...currentUser} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
