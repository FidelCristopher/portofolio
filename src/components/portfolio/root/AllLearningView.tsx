"use client";

import React, { useState, useMemo } from "react";

export function AllLearningView() {
  const [searchQuery, setSearchQuery] = useState("");

  const learningPillars = [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Deep Learning",
      level: "Core Specialization",
      description:
        "Building practical neural networks and machine learning models. Hands-on experience with 1D-CNN architecture for movement analysis in AMORA, computer vision with OpenCV, and integrating LLMs for real-time contextual feedback.",
      tags: ["Python", "PyTorch", "TensorFlow", "1D-CNN", "OpenCV", "LLMs", "Scikit-Learn", "AI", "Deep Learning", "Machine Learning"]
    },
    {
      id: "cp-dsa",
      title: "Competitive Programming & Algorithmic Problem Solving",
      level: "Active Daily Practice",
      description:
        "Sharpening core algorithmic thinking through Codeforces problem solving. Practicing greedy algorithms, dynamic programming, brute force, string manipulation, and graph traversal with modern C++23.",
      tags: ["C++23", "C++", "Codeforces", "Data Structures", "Algorithms", "Mathematics", "Competitive Programming"]
    },
    {
      id: "web-dev",
      title: "Modern Web Engineering & Full-Stack Development",
      level: "Production Ready",
      description:
        "Developing high-performance, responsive web applications using Next.js 16 (App Router & Turbopack), React 19, TypeScript strict mode, and Tailwind CSS v4. Focusing on clean modular architecture and API integrations.",
      tags: ["Next.js 16", "Next.js", "React 19", "React", "TypeScript", "Tailwind CSS v4", "Tailwind", "Node.js", "REST APIs", "Full-Stack", "Web Development"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design & Interface Prototyping",
      level: "Design to Code",
      description:
        "Bridging algorithm design with intuitive, user-centered digital interfaces using Figma. Crafting wireframes, design systems, and responsive components that prioritize clarity, accessibility, and real-world usability.",
      tags: ["Figma", "Design Systems", "UI/UX", "UI", "UX", "Component Architecture", "Mobile Design", "Prototyping"]
    },
    {
      id: "database",
      title: "Database Systems & Backend Architecture",
      level: "Applied Foundations",
      description:
        "Designing relational databases, schema normalization, complex SQL queries, and integrating robust database solutions using PostgreSQL, Supabase, and MySQL with secure backend authentication.",
      tags: ["PostgreSQL", "Supabase", "SQL", "MySQL", "PHP", "FastAPI", "Database", "Backend"]
    },
    {
      id: "devops-tooling",
      title: "DevOps, Containerization & Developer Tooling",
      level: "Workflow & Environment",
      description:
        "Configuring reproducible development environments using Docker, managing version control on GitHub, Linux command line automation, and monitoring pipelines with Prometheus and Grafana.",
      tags: ["Docker", "Git / GitHub", "Git", "GitHub", "Linux", "Prometheus", "Grafana", "VS Code", "DevOps", "Tooling"]
    }
  ];

  // Filter based on searchQuery
  const filteredPillars = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return learningPillars;

    return learningPillars.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(q);
      const tagMatch = p.tags.some((t) => t.toLowerCase().includes(q));
      const descMatch = p.description.toLowerCase().includes(q);
      return titleMatch || tagMatch || descMatch;
    });
  }, [searchQuery, learningPillars]);

  return (
    <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
      {/* Header Panel */}
      <header data-slot="panel-header" className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
            My Learning &amp; Knowledge Hub
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            Computer Science @ Binus University
          </span>
        </div>
      </header>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 gap-px border-b border-line bg-line sm:grid-cols-4">
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Primary Focus</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">AI / Deep Learning</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Problem Solving</span>
          <span className="font-mono text-base font-bold tracking-tight text-emerald-400">Codeforces Active</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Main Languages</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">Python, C++, TS</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Design Tool</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">Figma</span>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="border-b border-line p-4 bg-muted/20">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-3 flex items-center justify-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic title or tag (e.g. PyTorch, C++, Figma, Web, Algorithms)..."
            className="w-full rounded-lg border border-line bg-background py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 flex size-5 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground text-xs"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2.5 text-xs text-muted-foreground">
          <span className="font-mono text-[11px] mr-1">Popular:</span>
          {["Python", "PyTorch", "C++", "Next.js", "Figma", "Codeforces", "Docker"].map((suggest) => (
            <button
              key={suggest}
              type="button"
              onClick={() => setSearchQuery(suggest)}
              className={`rounded-md border px-2 py-0.5 font-mono text-[11px] transition-colors ${
                searchQuery.toLowerCase() === suggest.toLowerCase()
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              #{suggest}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Learning Pillars Grid */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground">
              Learning Focus Areas
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Key areas of study, hands-on implementation, and continuous technical growth.
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            {filteredPillars.length} of {learningPillars.length} topics
          </span>
        </div>

        {filteredPillars.length > 0 ? (
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 rounded-lg overflow-hidden">
            {filteredPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col justify-between bg-background p-4 transition-colors hover:bg-muted/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-foreground">
                      {pillar.title}
                    </h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border shrink-0">
                      {pillar.level}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-line/60">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[10px] cursor-pointer transition-colors ${
                        searchQuery.toLowerCase() && tag.toLowerCase().includes(searchQuery.toLowerCase())
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                          : "border-border bg-muted/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[140px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-muted/20 p-6 text-center">
            <p className="font-handwritten text-2xl text-muted-foreground">
              No learning topics found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Try searching for &quot;Python&quot;, &quot;C++&quot;, &quot;Next.js&quot;, or &quot;Figma&quot;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
            >
              Reset search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
