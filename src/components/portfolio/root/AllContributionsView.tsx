import React from "react";
import { GithubSection } from "./GithubSection";

export function AllContributionsView() {
  const highlights = [
    {
      title: "End-to-End MLOps Pipeline",
      repo: "fidelcristopher/mlops-pipeline",
      description: "Automated preprocessing, MLflow experiment tracking, Docker packaging, and Prometheus/Grafana metrics monitoring.",
      stars: 12,
      forks: 3,
      tags: ["Python", "MLflow", "Docker", "Prometheus"],
      commits: "95 commits"
    },
    {
      title: "Polsek Rembang RAG Service",
      repo: "fidelcristopher/polsek-rag-assistant",
      description: "Production RAG assistant querying official SOP documentation with vector embeddings and LangChain.",
      stars: 8,
      forks: 2,
      tags: ["LangChain", "Gemini API", "FastAPI", "VectorDB"],
      commits: "85 commits"
    },
    {
      title: "SmartCanteen AI Recommendation Engine",
      repo: "fidelcristopher/smart-canteen-ai",
      description: "Content-based filtering model and full-stack order management system with PostgreSQL and Midtrans payment gateway.",
      stars: 15,
      forks: 4,
      tags: ["PostgreSQL", "Next.js", "Scikit-Learn", "Midtrans"],
      commits: "110 commits"
    },
    {
      title: "Base Realms Onchain App",
      repo: "fidelcristopher/base-realms",
      description: "Top 5 Finalist hackathon project built on Base network with responsive UI and smart contract integration.",
      stars: 24,
      forks: 7,
      tags: ["Solidity", "Base", "TypeScript", "Tailwind CSS"],
      commits: "140 commits"
    }
  ];

  return (
    <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
      {/* Header Panel */}
      <header data-slot="panel-header" className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
            GitHub Contributions
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            2,619 contributions in the last year
          </span>
        </div>
      </header>

      {/* GitHub Graph Component */}
      <GithubSection />

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Total Contributions</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">2,619</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Longest Streak</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">42 days</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Public Repos</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">15+</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">GitHub Stars</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">59 ★</span>
        </div>
      </div>

      {/* Repository Highlights */}
      <div className="p-4 border-b border-line">
        <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground mb-3">
          Featured Repositories &amp; Open Source
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.repo}
              className="flex flex-col justify-between rounded-lg border border-line bg-muted/30 p-3.5 transition-colors hover:border-foreground/30 hover:bg-muted/60"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-medium text-sm text-foreground hover:underline cursor-pointer">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[11px] text-muted-foreground shrink-0">
                    {item.commits}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-line/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
