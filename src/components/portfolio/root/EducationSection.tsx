"use client";

import React from "react";

export function EducationSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="education">
      <aside aria-hidden="true" className="pointer-events-none absolute top-12 z-10 hidden w-40 flex-col gap-1 xl:flex left-[-11rem] items-end">
        <div className="flex max-w-40 flex-col font-handwritten text-[1.35rem]/[1.05] tracking-normal text-muted-foreground items-end text-right">
          <span>Formal education, academic foundations, and knowledge building.</span>
        </div>
        <svg className="size-10 text-muted-foreground/55 -scale-x-100 -rotate-6" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 4c1 15-5 26-21 30"></path>
          <path d="m21 36-8-2 7-7"></path>
        </svg>
      </aside>
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">Education</h2>
      </header>
      <div>
        <div id="experience-education" className="scroll-mt-14 space-y-4 border-b border-line px-4 py-4 last:border-b-0">
          <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
            {/* University */}
            <div data-state="closed" data-slot="collapsible" className="group/experience-position relative">
              <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-card group-last/experience-position:flex" aria-hidden="true">
                <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l"></span>
              </div>
              <div className="group block w-full text-left relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted outline-none">
                <div className="relative z-1 mb-1 flex items-start gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap" aria-hidden="true">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <span className="flex-1 font-medium text-balance">Binus University</span>
                </div>
                <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5 font-mono text-xs tabular-nums">
                      <span>2024</span><span>-</span><span>now</span>
                    </dd>
                  </dl>
                  <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                  <dl>
                    <dt className="sr-only">Duration</dt>
                    <dd className="font-mono text-xs tabular-nums">Present</dd>
                  </dl>
                </div>
              </div>
              <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Teamwork</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Leadership</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Time Management</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Communication</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Problem Solving</span></li>
              </ul>
            </div>

            {/* High School */}
            <div data-state="closed" data-slot="collapsible" className="group/experience-position relative">
              <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-card group-last/experience-position:flex" aria-hidden="true">
                <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l"></span>
              </div>
              <div className="group block w-full text-left relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted outline-none">
                <div className="relative z-1 mb-1 flex items-start gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school" aria-hidden="true">
                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                      <path d="M18 4.933V21"></path>
                      <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path>
                      <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path>
                      <path d="M6 4.933V21"></path>
                      <circle cx="12" cy="9" r="2"></circle>
                    </svg>
                  </div>
                  <span className="flex-1 font-medium text-balance">SMA 3 Rembang</span>
                </div>
                <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5 font-mono text-xs tabular-nums">
                      <span>2020</span><span>-</span><span>2023</span>
                    </dd>
                  </dl>
                  <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                  <dl>
                    <dt className="sr-only">Duration</dt>
                    <dd className="font-mono text-xs tabular-nums">3y</dd>
                  </dl>
                </div>
              </div>
              <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Communication</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Teamwork</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Problem Solving</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Public Speaking</span></li>
                <li className="flex"><span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Interpersonal Skills</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
