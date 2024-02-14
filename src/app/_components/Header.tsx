"use client";

import Image from "next/image";
import HamburgerSidebar from "./HamburgerSidebar";

export default function Header({ title }: { title: string }) {
  return (
    <section
      id="header"
      className="w-full inline-flex justify-between items-center"
    >
      <div className="w-fit inline-flex items-center gap-2">
        <HamburgerSidebar className="block lg:hidden" />
        <h1 className="m-0 text-[#262936] text-2xl font-bold">{title}</h1>
      </div>
      <div className="inline-flex items-center gap-3">
        <span className="text-[#181a21] text-sm font-semibold">
          Jones Ferdinand
        </span>
        <Image
          src="/photo.png"
          alt="user profile"
          width={44}
          height={44}
          priority
        />
      </div>
    </section>
  );
}
