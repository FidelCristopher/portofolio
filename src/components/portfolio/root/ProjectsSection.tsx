import React from "react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="projects">
      <aside aria-hidden="true" className="pointer-events-none absolute z-10 hidden w-40 flex-col gap-1 xl:flex left-[-11rem] items-end top-14">
        <div className="flex max-w-40 flex-col font-handwritten text-[1.35rem]/[1.05] tracking-normal text-muted-foreground items-end text-right">
          <span>Ideas become real when the model, interface, and product decisions move together.</span>
        </div>
        <svg className="size-10 text-muted-foreground/55 -scale-x-100 -rotate-6" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 4c1 15-5 26-21 30"></path>
          <path d="m21 36-8-2 7-7"></path>
        </svg>
      </aside>
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <div className="flex items-center justify-between gap-3">
          <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
            Projects<sup className="top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground">(2)</sup>
          </h2>
          <Link className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href="/projects">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>
      </header>
      <div data-state="open" data-slot="collapsible" className="group/collapsible">
        {/* Project 1: AMORA */}
        <div className="border-b border-line">
          <a
            className="flex items-center pr-2 transition-colors duration-200 ease-out hover:bg-accent-muted"
            href="https://github.com/FidelCristopher/AMORA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-15 shrink-0 items-center justify-center">
              <div className="flex size-7 items-center justify-center rounded-lg border border-border select-none bg-black p-1 ring-1 ring-line">
                <img src="/projects/amora/logo.png" alt="AMORA" className="size-full object-contain" />
              </div>
            </div>
            <div className="flex-1 border-l border-dashed border-line p-4 pr-2">
              <p className="mb-1 leading-snug font-medium text-balance">
                AMORA – AI-Powered Pregnancy Fitness &amp; Movement Safety App
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-sm text-muted-foreground">2026</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">1D-CNN</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Computer Vision</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">LLM</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Python</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4 text-muted-foreground" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>

        {/* Project 2: Matcha Simulation */}
        <div className="border-b border-line">
          <a
            className="flex items-center pr-2 transition-colors duration-200 ease-out hover:bg-accent-muted"
            href="https://github.com/FidelCristopher/matcha-simulation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-15 shrink-0 items-center justify-center">
              <div className="flex size-7 items-center justify-center rounded-lg border border-border select-none bg-[#142612] p-1 ring-1 ring-line">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 text-lime-400">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex-1 border-l border-dashed border-line p-4 pr-2">
              <p className="mb-1 leading-snug font-medium text-balance">
                Artisan Sparkling Matcha — 3D Simulation &amp; Showcase
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-sm text-muted-foreground">2026</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">WebGL</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">3D Viewport</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">JavaScript</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4 text-muted-foreground" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
