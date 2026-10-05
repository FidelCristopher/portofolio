import React from "react";

export function AllProjectsGrid() {
  return (
    <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
      <div className="grid grid-cols-1 gap-px border-b border-line bg-line sm:grid-cols-2">
        {/* Project 1: AMORA */}
        <div id="project-amora" className="group flex flex-col gap-2 bg-background p-3 transition-[background-color] duration-200 ease-out hover:bg-accent-muted">
          <a
            className="flex h-full flex-col gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            href="https://github.com/FidelCristopher/AMORA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-zinc-950 select-none">
              <div className="relative z-10 flex size-28 items-center justify-center p-3 rounded-2xl bg-black/60 border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105">
                <img alt="AMORA Logo" src="/projects/amora/logo.png" className="size-full object-contain drop-shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg leading-snug font-medium text-balance">AMORA – AI-Powered Pregnancy Fitness App</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                AI-powered pregnancy fitness mobile app that detects movement in real-time via smartphone camera and provides instant correction if a movement is deemed unsafe based on ACOG and Mayo Clinic clinical guidelines.
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">2026</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">1D-CNN</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Computer Vision</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">LLM</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Python</span>
              </div>
            </div>
          </a>
        </div>

        {/* Project 2: RailSense */}
        <div id="project-railsense" className="group flex flex-col gap-2 bg-background p-3 transition-[background-color] duration-200 ease-out hover:bg-accent-muted">
          <a
            className="flex h-full flex-col gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            href="https://github.com/FidelCristopher/RailSense"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-zinc-950 select-none">
              <div className="relative z-10 flex size-28 items-center justify-center p-2 rounded-2xl bg-black/60 border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105">
                <img alt="RailSense Logo" src="/projects/railsense/logo.png" className="size-full object-contain drop-shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg leading-snug font-medium text-balance">RailSense – Intelligent Railway Interlocking System</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                Intelligent railway crossing safety and traffic light interlocking system powered by Computer Vision (YOLOv8-seg Instance Segmentation) and real-time hazard area actuation to prevent gridlocked vehicles on train tracks.
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">2026</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Computer Vision</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">YOLOv8-seg</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">PyTorch</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">FastAPI</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Next.js</span>
              </div>
            </div>
          </a>
        </div>

        {/* Project 3: Matcha Simulation */}
        <div id="project-matcha" className="group flex flex-col gap-2 bg-background p-3 transition-[background-color] duration-200 ease-out hover:bg-accent-muted">
          <a
            className="flex h-full flex-col gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            href="https://github.com/FidelCristopher/matcha-simulation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-zinc-950 select-none">
              <img
                alt="Artisan Sparkling Matcha 3D Simulation"
                src="/projects/matcha/thumbnail.svg"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg leading-snug font-medium text-balance">Artisan Sparkling Matcha — 3D Simulation</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                Interactive WebGL &amp; 3D real-time landing page for ceremonial sparkling matcha. Features Google &lt;model-viewer&gt; with cursor tilt physics, 3-page horizontal slide navigation (Menu, 3D Layer Pinch, Crafting Lab), and kiosk viewport optimization.
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">2026</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">WebGL</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">3D Viewport</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">JavaScript</span>
                <span data-slot="tag" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">Interactive UI</span>
              </div>
            </div>
          </a>
        </div>

        {/* Future Projects Placeholder */}
        <div className="flex min-h-[300px] flex-col items-center justify-center bg-background p-6 select-none border-t border-line">
          <span className="font-handwritten text-3xl font-medium tracking-wider text-muted-foreground">Still cooking next projects...</span>
        </div>
      </div>
    </div>
  );
}
