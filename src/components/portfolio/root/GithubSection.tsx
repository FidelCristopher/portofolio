"use client";

import React, { useEffect, useState, useMemo } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export function GithubSection() {
  const [data, setData] = useState<{ total?: { lastYear?: number }; contributions?: ContributionDay[] } | null>(null);

  // Initial active contributions for FidelCristopher
  const initialActiveMap: Record<string, { count: number; level: number }> = {
    "2025-12-08": { count: 2, level: 1 },
    "2025-12-15": { count: 1, level: 1 },
    "2025-12-16": { count: 8, level: 2 },
    "2026-01-03": { count: 1, level: 1 },
    "2026-01-04": { count: 1, level: 1 },
    "2026-03-29": { count: 3, level: 1 },
    "2026-04-27": { count: 9, level: 3 },
    "2026-05-23": { count: 1, level: 1 },
    "2026-06-10": { count: 1, level: 1 },
    "2026-06-11": { count: 14, level: 4 },
    "2026-09-21": { count: 1, level: 1 },
    "2026-09-22": { count: 4, level: 1 },
    "2026-09-23": { count: 12, level: 3 },
    "2026-09-25": { count: 2, level: 1 },
    "2026-09-26": { count: 3, level: 1 },
    "2026-09-28": { count: 10, level: 3 },
    "2026-09-30": { count: 16, level: 4 },
    "2026-10-01": { count: 3, level: 1 }
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchGithub() {
      try {
        // Try local Next.js proxy route first
        let res = await fetch("/api/github");
        if (!res.ok) {
          // Direct fallback if proxy is unavailable
          res = await fetch("https://github-contributions-api.jogruber.de/v4/FidelCristopher?y=last");
        }
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        if (json.contributions && isMounted) {
          setData(json);
        }
      } catch (err) {
        console.warn("Using initial GitHub contribution data:", err);
      }
    }
    fetchGithub();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute total contributions
  const totalCount = useMemo(() => {
    if (data?.total?.lastYear) return data.total.lastYear;
    return 92;
  }, [data]);

  // Compute 52 weeks (364 days) of contribution cells
  const calendarWeeks = useMemo(() => {
    if (data?.contributions && data.contributions.length > 0) {
      const allDays = data.contributions;
      const weeks: ContributionDay[][] = [];
      let currentWeek: ContributionDay[] = [];

      allDays.forEach((day, index) => {
        currentWeek.push(day);
        if (currentWeek.length === 7 || index === allDays.length - 1) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      });
      return weeks.slice(-53); // last 52-53 weeks
    }

    // Fallback calendar generation
    const today = new Date();
    const end = new Date(today);
    end.setDate(today.getDate() + (6 - today.getDay()));

    const weeks: ContributionDay[][] = [];
    for (let w = 51; w >= 0; w--) {
      const days: ContributionDay[] = [];
      for (let d = 0; d < 7; d++) {
        const dateObj = new Date(end);
        dateObj.setDate(end.getDate() - (w * 7 + (6 - d)));
        const dateStr = dateObj.toISOString().split("T")[0];
        const active = initialActiveMap[dateStr];
        days.push({
          date: dateStr,
          count: active ? active.count : 0,
          level: active ? active.level : 0
        });
      }
      weeks.push(days);
    }
    return weeks;
  }, [data]);

  const colors = [
    "#161b22", // Level 0 (dark grey)
    "#0e4429", // Level 1 (dark green)
    "#006d32", // Level 2 (medium green)
    "#26a641", // Level 3 (bright green)
    "#39d353"  // Level 4 (vibrant green)
  ];

  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="github">
      <header data-slot="panel-header" className="border-b border-line px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
            GitHub Contributions
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400 select-none">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync
          </span>
        </div>
        <a
          href="https://github.com/FidelCristopher"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          @FidelCristopher
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </header>

      <div className="mx-auto flex w-full min-w-0 flex-col gap-4 py-4 text-sm">
        <div className="w-full min-w-0 overflow-x-auto px-4 text-muted-foreground">
          <svg className="block h-auto w-full min-w-[680px] overflow-visible" height="118" viewBox="0 0 754 118" width="754" aria-hidden="true">
            <title>GitHub Contributions</title>
            <g className="fill-current selection:fill-selection-foreground text-xs font-mono">
              <text dominantBaseline="hanging" x="28">Oct</text>
              <text dominantBaseline="hanging" x="84">Nov</text>
              <text dominantBaseline="hanging" x="154">Dec</text>
              <text dominantBaseline="hanging" x="210">Jan</text>
              <text dominantBaseline="hanging" x="266">Feb</text>
              <text dominantBaseline="hanging" x="322">Mar</text>
              <text dominantBaseline="hanging" x="392">Apr</text>
              <text dominantBaseline="hanging" x="448">May</text>
              <text dominantBaseline="hanging" x="518">Jun</text>
              <text dominantBaseline="hanging" x="574">Jul</text>
              <text dominantBaseline="hanging" x="630">Aug</text>
              <text dominantBaseline="hanging" x="700">Sep</text>
            </g>

            {/* Weeks columns */}
            {calendarWeeks.map((week, col) => (
              <g key={col}>
                {week.map((day, row) => {
                  const x = col * 14;
                  const y = 22 + row * 14;
                  return (
                    <rect
                      key={day.date}
                      x={x}
                      y={y}
                      width="11"
                      height="11"
                      rx="2"
                      fill={colors[day.level] || colors[0]}
                      className="transition-colors hover:stroke-foreground/50 hover:stroke-[1.5px] cursor-pointer"
                    >
                      <title>{`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}</title>
                    </rect>
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Footer summary & legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 leading-none text-xs text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">{totalCount} contributions</span> in the last year on{" "}
            <a
              className="text-foreground link-underline hover:underline font-medium"
              href="https://github.com/FidelCristopher"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </div>
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="mr-1">Less</span>
            <span className="size-2.5 rounded-xs bg-[#161b22] border border-white/5" />
            <span className="size-2.5 rounded-xs bg-[#0e4429]" />
            <span className="size-2.5 rounded-xs bg-[#006d32]" />
            <span className="size-2.5 rounded-xs bg-[#26a641]" />
            <span className="size-2.5 rounded-xs bg-[#39d353]" />
            <span className="ml-1">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
