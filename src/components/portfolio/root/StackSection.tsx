import React from "react";

export function StackSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="stack">
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
          Tech Stack &amp; Tools
        </h2>
      </header>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden" aria-hidden="true"></div>

        {/* 01: AI, Vision & Audio */}
        <div className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]">
          <div className="pl-4 text-sm/[--badge-height] text-muted-foreground">
            <span className="mr-1.5 font-mono text-muted-foreground select-none">01</span>
            AI, Vision &amp; Audio
          </div>
          <ul className="flex flex-wrap gap-1.5 px-4">
            <li className="flex">
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#python"></use></svg>
                Python
              </a>
            </li>
            <li className="flex">
              <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#pytorch"></use></svg>
                PyTorch
              </a>
            </li>
            <li className="flex">
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#tensorflow"></use></svg>
                TensorFlow / Keras
              </a>
            </li>
            <li className="flex">
              <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#opencv"></use></svg>
                OpenCV
              </a>
            </li>
            <li className="flex">
              <a href="https://github.com/ultralytics/ultralytics" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                </svg>
                YOLOv8-seg
              </a>
            </li>
            <li className="flex">
              <a href="https://librosa.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-audio-waveform">
                  <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"></path>
                </svg>
                Librosa / Audio DSP
              </a>
            </li>
            <li className="flex">
              <a href="https://biopython.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dna">
                  <path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m17 6-2.5-2.5"></path><path d="m14 8-1-1"></path><path d="m7 18 2.5 2.5"></path><path d="m3.5 14.5.5.5"></path><path d="m20 9 .5.5"></path><path d="m6.5 12.5 1 1"></path><path d="m16.5 10.5 1 1"></path><path d="m10 16 1 1"></path>
                </svg>
                Biopython
              </a>
            </li>
            <li className="flex">
              <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#scikitlearn"></use></svg>
                Scikit-Learn
              </a>
            </li>
            <li className="flex">
              <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#pandas"></use></svg>
                Pandas
              </a>
            </li>
            <li className="flex">
              <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#numpy"></use></svg>
                NumPy
              </a>
            </li>
            <li className="flex">
              <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-code">
                  <path d="M10 7.5 8 10l2 2.5"></path><path d="m14 7.5 2 2.5-2 2.5"></path><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                NLTK / Word2Vec
              </a>
            </li>
          </ul>
        </div>

        {/* 02: Languages & Systems */}
        <div className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]">
          <div className="pl-4 text-sm/[--badge-height] text-muted-foreground">
            <span className="mr-1.5 font-mono text-muted-foreground select-none">02</span>
            Core Languages
          </div>
          <ul className="flex flex-wrap gap-1.5 px-4">
            <li className="flex">
              <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#cplusplus"></use></svg>
                C++23 (Competitive Programming)
              </a>
            </li>
            <li className="flex">
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#typescript"></use></svg>
                TypeScript
              </a>
            </li>
            <li className="flex">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#js"></use></svg>
                JavaScript
              </a>
            </li>
            <li className="flex">
              <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#postgresql"></use></svg>
                SQL / PostgreSQL
              </a>
            </li>
          </ul>
        </div>

        {/* 03: Web, 3D & Interface Engineering */}
        <div className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]">
          <div className="pl-4 text-sm/[--badge-height] text-muted-foreground">
            <span className="mr-1.5 font-mono text-muted-foreground select-none">03</span>
            Web, 3D &amp; Interface
          </div>
          <ul className="flex flex-wrap gap-1.5 px-4">
            <li className="flex">
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#nextjs2"></use></svg>
                Next.js 16
              </a>
            </li>
            <li className="flex">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#react"></use></svg>
                React 19
              </a>
            </li>
            <li className="flex">
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#fastapi"></use></svg>
                FastAPI
              </a>
            </li>
            <li className="flex">
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path>
                </svg>
                WebGL / 3D
              </a>
            </li>
            <li className="flex">
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#tailwindcss"></use></svg>
                Tailwind CSS v4
              </a>
            </li>
            <li className="flex">
              <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-figma">
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                </svg>
                Figma (UI/UX)
              </a>
            </li>
          </ul>
        </div>

        {/* 04: DevOps & Environments */}
        <div className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]">
          <div className="pl-4 text-sm/[--badge-height] text-muted-foreground">
            <span className="mr-1.5 font-mono text-muted-foreground select-none">04</span>
            DevOps &amp; Tools
          </div>
          <ul className="flex flex-wrap gap-1.5 px-4">
            <li className="flex">
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#docker"></use></svg>
                Docker
              </a>
            </li>
            <li className="flex">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#github"></use></svg>
                Git / GitHub
              </a>
            </li>
            <li className="flex">
              <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
                  <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
                </svg>
                Jupyter Notebook
              </a>
            </li>
            <li className="flex">
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-1.75 font-mono text-xs text-foreground inset-ring-1 inset-ring-border transition-colors hover:bg-muted/90 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                <svg viewBox="0 0 24 24" aria-hidden="true"><use href="/icons/tech-stack-v1.svg#vscode"></use></svg>
                VS Code / WSL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
