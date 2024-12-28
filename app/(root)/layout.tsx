import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { getCurrentUser } from "@/lib/actions/user.actions";

import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <main className="flex w-full h-screen flex-col">
      <Navbar {...currentUser} />
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default Layout;
