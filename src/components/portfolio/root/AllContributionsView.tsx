import React from "react";
import { GithubSection } from "./GithubSection";

export function AllContributionsView() {
  const userRepos = [
    {
      title: "AMORA",
      repo: "FidelCristopher/AMORA",
      url: "https://github.com/FidelCristopher/AMORA",
      description: "AI-powered pregnancy fitness mobile app with real-time computer vision movement detection, 1D-CNN safety classification, and LLM feedback.",
      stars: 1,
      language: "Python",
      tags: ["Python", "Computer Vision", "1D-CNN", "LLM", "Healthcare AI"]
    },
    {
      title: "Scientific-Computing",
      repo: "FidelCristopher/Scientific-Computing",
      url: "https://github.com/FidelCristopher/Scientific-Computing",
      description: "Scientific computing solutions, numerical algorithms, optimization, and linear algebra implementations.",
      stars: 0,
      language: "Jupyter Notebook",
      tags: ["Jupyter Notebook", "Python", "NumPy", "Scientific Computing"]
    },
    {
      title: "ProjectAI",
      repo: "FidelCristopher/ProjectAI",
      url: "https://github.com/FidelCristopher/ProjectAI",
      description: "Artificial Intelligence and machine learning models experimentation, neural network workflows, and training scripts.",
      stars: 0,
      language: "Python",
      tags: ["Python", "Machine Learning", "Neural Networks", "Deep Learning"]
    },
    {
      title: "lnt-final-project",
      repo: "FidelCristopher/lnt-final-project",
      url: "https://github.com/FidelCristopher/lnt-final-project",
      description: "Full-stack e-commerce web platform for Back End LNT Final Project with relational database, authentication, and order workflows.",
      stars: 0,
      language: "Blade / PHP",
      tags: ["PHP", "Laravel", "MySQL", "E-Commerce"]
    },
    {
      title: "midproject_bncc",
      repo: "FidelCristopher/midproject_bncc",
      url: "https://github.com/FidelCristopher/midproject_bncc",
      description: "Backend architecture and REST API development for BNCC mid-project with structured routing and data validation.",
      stars: 0,
      language: "PHP",
      tags: ["PHP", "Backend API", "BNCC", "Database"]
    },
    {
      title: "LaundryYuk",
      repo: "FidelCristopher/LaundryYuk",
      url: "https://github.com/FidelCristopher/LaundryYuk",
      description: "Web application for on-demand laundry service booking, customer order tracking, and service management.",
      stars: 0,
      language: "JavaScript",
      tags: ["JavaScript", "Full-Stack", "Web App"]
    },
    {
      title: "aolDatabase",
      repo: "FidelCristopher/aolDatabase",
      url: "https://github.com/FidelCristopher/aolDatabase",
      description: "Relational database design, normalization, queries, and backend schema management.",
      stars: 0,
      language: "PHP / SQL",
      tags: ["SQL", "Database Design", "PHP", "Queries"]
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
        </div>
      </header>

      {/* GitHub Graph Component */}
      <GithubSection />

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Year Contributions</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">92+</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Public Repos</span>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">7+</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Primary Focus</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">AI &amp; Full-Stack</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Profile Status</span>
          <span className="font-mono text-base font-bold tracking-tight text-emerald-500">Active</span>
        </div>
      </div>

      {/* Real Repositories Grid */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground">
            Repositories &amp; Projects
          </h3>
          <a
            href="https://github.com/FidelCristopher?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {userRepos.map((item) => (
            <a
              key={item.repo}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg border border-line bg-muted/30 p-3.5 transition-colors hover:border-foreground/30 hover:bg-muted/60"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-medium text-sm text-foreground group-hover:underline">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[11px] text-muted-foreground shrink-0">
                    {item.language}
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}