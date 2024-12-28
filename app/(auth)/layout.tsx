import React from "react";
import Image from "next/legacy/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-black p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/images/logo_white.png"
            alt="logo"
            width={150}
            height={200}
            layout="fixed"
          />

          <div className="space-y-5 text-white">
            <h1 className="text-5xl font-extrabold">VALSALVA</h1>
            <p className="font-normal text-lg">
              Dive into a World of Excellence: Unleashing Precision, Power, and
              Unparalleled Performance in Every Fin!
            </p>
          </div>
          {/* <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          /> */}
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden flex items-center gap-2">
          <Image
            src="/assets/images/logo_white.png"
            alt="logo"
            width={30}
            height={50}
            className="invert"
          />
          <p className="text-5xl font-bold">VALSALVA</p>
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
