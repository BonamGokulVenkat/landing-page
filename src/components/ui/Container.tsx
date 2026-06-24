import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1500px] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 ${className}`}
    >
      {children}
    </div>
  );
}