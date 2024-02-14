"use client";

import { useState } from "react";
import LeftSheet from "./LeftSheet";
import Sidebar from "./Sidebar";

export default function HamburgerSidebar({
  HamburgerIcon = <HambergerIcon />,
  ...props
}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div {...props}>
      <div onClick={() => setSidebarOpen(true)}>
        {HamburgerIcon || <HambergerIcon />}
      </div>

      <LeftSheet isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar className="bg-[#363740] w-full h-screen flex flex-col gap-6" />
      </LeftSheet>
    </div>
  );
}

function HambergerIcon(props: any) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 w-6 aspect-square cursor-pointer">
      <span className="w-full h-1 bg-gray-600 rounded-full"></span>
      <span className="w-full h-1 bg-gray-600 rounded-full"></span>
      <span className="w-full h-1 bg-gray-600 rounded-full"></span>
    </div>
  );
}
