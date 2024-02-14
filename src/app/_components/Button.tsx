"use client";

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <button
      className="uppercase px-4 py-3 min-w-[100px] bg-[#65A7DB] text-[#FFFFFF] rounded-full hover:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}
