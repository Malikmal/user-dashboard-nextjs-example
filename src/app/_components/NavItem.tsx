"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  title,
  href,
  iconSvg,
}: {
  title: string;
  href: Url;
  iconSvg: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`p-4 inline-flex items-center gap-4 cursor-pointer hover:bg-opacity-50 ${
        pathname == href ? "bg-sidebar-active" : ""
      }`}
    >
      {iconSvg}
      <span className="text-sidebar-text text-base">{title}</span>
    </Link>
  );
}
