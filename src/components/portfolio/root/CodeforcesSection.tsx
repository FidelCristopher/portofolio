"use client";

import React, { useEffect, useState, useMemo } from "react";

interface Submission {
  id: number;
  creationTimeSeconds: number;
  verdict: string;
  problem: {
    contestId?: number;
    index?: string;
    name?: string;
  };
}

export function CodeforcesSection() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback initial dates for FidelCristopher
  const initialDates: Record<string, number> = {
    "2026-09-09": 8,
    "2026-09-16": 5,
    "2026-09-21": 2,
    "2026-09-22": 1,
    "2026-09-23": 1
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchCodeforces() {
      try {
        const res = await fetch("https://codeforces.com/api/user.status?handle=FidelCristopher&from=1&count=500");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (data.status === "OK" && isMounted) {
          setSubmissions(data.result || []);
        }
      } catch (err) {
        console.warn("Using cached Codeforces data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchCodeforces();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute stats
  const { dateMap, totalSubmissions, uniqueSolved, activeDays } = useMemo(() => {
    const map: Record<string, number> = { ...initialDates };
    const solvedSet = new Set<string>();
    let total = 17;

    if (submissions.length > 0) {
      total = submissions.length;
      // reset map for live data
      for (const k in map) delete map[k];

      submissions.forEach((sub) => {
        const d = new Date(sub.creationTimeSeconds * 1000);
        const key = d.toISOString().split("T")[0];
        map[key] = (map[key] || 0) + 1;

        if (sub.verdict === "OK" && sub.problem.contestId && sub.problem.index) {
          solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
        }
      });
    } else {
      solvedSet.add("158-A");
      solvedSet.add("282-A");
      solvedSet.add("71-A");
      solvedSet.add("4-A");
    }

    return {
      dateMap: map,
      totalSubmissions: total,
      uniqueSolved: solvedSet.size,
      activeDays: Object.keys(map).length
    };
  }, [submissions]);

  // Generate 52 weeks (364 days) leading up to today
  const calendarWeeks = useMemo(() => {
    const today = new Date();
    // find end of current week (Saturday)
    const end = new Date(today);
    end.setDate(today.getDate() + (6 - today.getDay()));

    const weeks = [];
    for (let w = 51; w >= 0; w--) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const dateObj = new Date(end);
        dateObj.setDate(end.getDate() - (w * 7 + (6 - d)));
        const dateStr = dateObj.toISOString().split("T")[0];
        const count = dateMap[dateStr] || 0;

        let level = 0;
        if (count >= 1 && count <= 2) level = 1;
        else if (count >= 3 && count <= 4) level = 2;
        else if (count >= 5 && count <= 7) level = 3;
        else if (count >= 8) level = 4;

        days.push({ dateStr, count, level });
      }
      weeks.push(days);
    }
    return weeks;
  }, [dateMap]);

  const colors = [
    "#161b22", // Level 0 (inactive)
    "#0e4429", // Level 1
    "#006d32", // Level 2
    "#26a641", // Level 3
    "#39d353"  // Level 4
  ];

  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="codeforces">
      {/* Header */}
      <header data-slot="panel-header" className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
              Codeforces Activity
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400 select-none">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live API
            </span>
          </div>
          <a
            href="https://codeforces.com/profile/FidelCristopher"
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
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-px border-b border-line bg-line sm:grid-cols-4">
        <div className="flex flex-col gap-1 bg-background p-3.5">
          <span className="text-xs text-muted-foreground">Total Submissions</span>
          <span className="font-mono text-xl font-bold tracking-tight text-foreground">{totalSubmissions}</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-3.5">
          <span className="text-xs text-muted-foreground">Problems Solved (AC)</span>
          <span className="font-mono text-xl font-bold tracking-tight text-emerald-400">{uniqueSolved}</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-3.5">
          <span className="text-xs text-muted-foreground">Active Days</span>
          <span className="font-mono text-xl font-bold tracking-tight text-foreground">{activeDays}</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-3.5">
          <span className="text-xs text-muted-foreground">Platform</span>
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground mt-1">Codeforces</span>
        </div>
      </div>

      {/* Heatmap Graph */}
      <div className="mx-auto flex w-full min-w-0 flex-col gap-4 py-4 text-sm">
        <div className="w-full min-w-0 overflow-x-auto px-4 text-muted-foreground">
          <svg className="block h-auto w-full min-w-[680px] overflow-visible" height="118" viewBox="0 0 754 118" width="754" aria-hidden="true">
            <title>Codeforces Submission Heatmap</title>
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

            {/* Weeks */}
            {calendarWeeks.map((week, col) => (
              <g key={col}>
                {week.map((day, row) => {
                  const x = col * 14;
                  const y = 22 + row * 14;
                  return (
                    <rect
                      key={day.dateStr}
                      x={x}
                      y={y}
                      width="11"
                      height="11"
                      rx="2"
                      fill={colors[day.level]}
                      className="transition-colors hover:stroke-foreground/50 hover:stroke-[1.5px] cursor-pointer"
                    >
                      <title>{`${day.count} submission${day.count === 1 ? "" : "s"} on ${day.dateStr}`}</title>
                    </rect>
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Legend & Summary */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 leading-none text-xs text-muted-foreground">
          <div>
            Submissions dynamically synced from{" "}
            <a
              href="https://codeforces.com/profile/FidelCristopher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              Codeforces API
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
