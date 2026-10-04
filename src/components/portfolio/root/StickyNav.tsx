"use client";

import React, { useState } from "react";
import Link from "next/link";

export function StickyNav({ activeIndex = 0 }: { activeIndex?: number }) {
  const [activeTab, setActiveTab] = useState(activeIndex);

  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 transition-transform duration-200 sm:size-4.5 group-hover:-translate-y-0.5 group-hover:scale-105">
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" opacity="0.16"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-90"></path>
        </svg>
      )
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 transition-transform duration-200 sm:size-4.5 group-hover:scale-105">
          <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" fill="currentColor" opacity="0.06"></path>
          <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          <circle cx="14" cy="15" r="1.1" fill="currentColor"></circle>
        </svg>
      )
    },
    {
      id: "contributions",
      label: "My Contribution",
      href: "/contributions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 transition-transform duration-200 sm:size-4.5 group-hover:scale-105">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor" opacity="0.16"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      id: "learning",
      label: "My Learning",
      href: "/learning",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 transition-transform duration-200 sm:size-4.5 group-hover:scale-105 group-hover:-translate-y-0.5">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" fill="currentColor" opacity="0.08"></path>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M8 7h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M8 11h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M8 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
        </svg>
      )
    },
    {
      id: "chat",
      label: "Chat",
      href: "https://wa.me/6285155487647",
      target: "_blank",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 transition-transform duration-200 sm:size-4.5 group-hover:scale-105 group-hover:-rotate-3">
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" fill="currentColor" opacity="0.06"></path>
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          <circle cx="8" cy="12" r="1" fill="currentColor"></circle>
          <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
          <circle cx="16" cy="12" r="1" fill="currentColor"></circle>
        </svg>
      )
    }
  ];

  return (
    <nav className="sticky top-0 z-40 -mt-px border border-line bg-card/95 backdrop-blur-md max-md:border-x-0 h-14" aria-label="Main Navigation">
      <div className="relative grid h-full w-full grid-cols-5">
        {navItems.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <Link
              key={item.id}
              href={item.href}
              target={item.target || undefined}
              rel={item.target ? "noopener noreferrer" : undefined}
              onClick={() => setActiveTab(index)}
              aria-label={item.label}
              className={`group relative flex h-full min-w-0 cursor-pointer items-center justify-center gap-1 sm:gap-1.5 px-1 sm:px-2 text-xs font-medium transition-colors duration-200 select-none focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-sm ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.icon}
              <span className="font-sans whitespace-nowrap overflow-hidden text-ellipsis text-[11px] sm:text-sm">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Sliding Active Line Indicator */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translate3d(${activeTab * 100}%, 0, 0)` }}
        >
          <span className="absolute bottom-0 h-0.5 bg-foreground" style={{ insetInline: "min(1rem, 20%)" }}></span>
        </span>
      </div>
    </nav>
  );
}
