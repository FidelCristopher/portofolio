import React from "react";
import { StackSection } from "./StackSection";

export function AllLearningView() {
  const learningPillars = [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Deep Learning",
      level: "Core Specialization",
      description:
        "Building practical neural networks and machine learning models. Hands-on experience with 1D-CNN architecture for movement analysis in AMORA, computer vision with OpenCV, and integrating LLMs for real-time contextual feedback.",
      tags: ["Python", "PyTorch", "TensorFlow", "1D-CNN", "OpenCV", "LLMs", "Scikit-Learn"]
    },
    {
      id: "cp-dsa",
      title: "Competitive Programming & Algorithmic Problem Solving",
      level: "Active Daily Practice",
      description:
        "Sharpening core algorithmic thinking through Codeforces problem solving. Practicing greedy algorithms, dynamic programming, brute force, string manipulation, and graph traversal with modern C++23.",
      tags: ["C++23", "Codeforces", "Data Structures", "Algorithms", "Mathematics"]
    },
    {
      id: "web-dev",
      title: "Modern Web Engineering & Full-Stack Development",
      level: "Production Ready",
      description:
        "Developing high-performance, responsive web applications using Next.js 16 (App Router & Turbopack), React 19, TypeScript strict mode, and Tailwind CSS v4. Focusing on clean modular architecture and API integrations.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Node.js", "REST APIs"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design & Interface Prototyping",
      level: "Design to Code",
      description:
        "Bridging algorithm design with intuitive, user-centered digital interfaces using Figma. Crafting wireframes, design systems, and responsive components that prioritize clarity, accessibility, and real-world usability.",
      tags: ["Figma", "Design Systems", "UI/UX", "Component Architecture", "Mobile Design"]
    },
    {
      id: "database",
      title: "Database Systems & Backend Architecture",
      level: "Applied Foundations",
      description:
        "Designing relational databases, schema normalization, complex SQL queries, and integrating robust database solutions using PostgreSQL, Supabase, and MySQL with secure backend authentication.",
      tags: ["PostgreSQL", "Supabase", "SQL", "MySQL", "PHP", "FastAPI"]
    },
    {
      id: "devops-tooling",
      title: "DevOps, Containerization & Developer Tooling",
      level: "Workflow & Environment",
      description:
        "Configuring reproducible development environments using Docker, managing version control on GitHub, Linux command line automation, and monitoring pipelines with Prometheus and Grafana.",
      tags: ["Docker", "Git / GitHub", "Linux", "Prometheus", "Grafana", "VS Code"]
    }
  ];

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

      {/* 2-Column Learning Pillars Grid (Exact same layout as Projects!) */}
      <div className="p-4 border-b border-line">
        <div className="mb-3">
          <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground">
            Learning Focus Areas
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Key areas of study, hands-on implementation, and continuous technical growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 rounded-lg overflow-hidden">
          {learningPillars.map((pillar) => (
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
                    className="inline-flex items-center rounded-md border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Interactive Tech Stack Section */}
      <div className="border-t border-line">
        <StackSection />
      </div>
    </div>
  );
}
