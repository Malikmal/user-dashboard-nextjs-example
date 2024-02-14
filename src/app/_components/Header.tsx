"use client";

import Image from "next/image";

export default function Header({ title }: { title: string }) {
  return (
    <section
      id="header"
      className="w-full inline-flex justify-between items-center"
    >
      <h1 className="m-0 text-[#262936] text-2xl font-bold">{title}</h1>
      <div className="inline-flex items-center gap-3">
        <span className="text-[#252733] text-sm font-semibold">
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
