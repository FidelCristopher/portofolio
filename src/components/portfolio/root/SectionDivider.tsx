import React from "react";

export function SectionDivider() {
  return (
    <div className="relative z-1 -mt-px flex h-8 w-full border border-line bg-card max-md:border-x-0 bg-[repeating-linear-gradient(135deg,var(--line)_0,var(--line)_1px,transparent_1px,transparent_8px)]" />
  );
}