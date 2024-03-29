"use client";

import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";

export default function Sidebar({
  className = "bg-[#363740] w-full max-w-[255px] h-screen flex flex-col gap-6",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <section id="sidebar" className={className} {...props}>
      <Link href={"/"} className="p-4 w-full inline-flex items-center gap-2">
        <Image
          src="/aonelearn-logo.png"
          alt="aonelearn"
          width={66}
          height={90}
          priority
        />
        <strong className="text-2xl text-white font-bold">AOne</strong>
      </Link>
      <nav className="w-full flex flex-col">
        <NavItem title="About" href="/" iconSvg={<AboutSvg />} />
        <NavItem title="Users" href="/user" iconSvg={<UsersSvg />} />
      </nav>
    </section>
  );
}

function AboutSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12V9"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6H9.0075"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UsersSvg() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 15.8492V14.3492C12.75 13.5536 12.4339 12.7905 11.8713 12.2279C11.3087 11.6653 10.5456 11.3492 9.75 11.3492H3.75C2.95435 11.3492 2.19129 11.6653 1.62868 12.2279C1.06607 12.7905 0.75 13.5536 0.75 14.3492V15.8492"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 8.34924C8.40685 8.34924 9.75 7.0061 9.75 5.34924C9.75 3.69239 8.40685 2.34924 6.75 2.34924C5.09315 2.34924 3.75 3.69239 3.75 5.34924C3.75 7.0061 5.09315 8.34924 6.75 8.34924Z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 15.8492V14.3492C17.2495 13.6845 17.0283 13.0388 16.621 12.5135C16.2138 11.9881 15.6436 11.6129 15 11.4467"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.44672C12.6453 2.61194 13.2173 2.98724 13.6257 3.51345C14.0342 4.03966 14.2559 4.68684 14.2559 5.35297C14.2559 6.01909 14.0342 6.66628 13.6257 7.19248C13.2173 7.71869 12.6453 8.09399 12 8.25922"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
