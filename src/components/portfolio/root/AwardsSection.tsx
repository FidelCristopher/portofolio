import React from "react";

export function AwardsSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="awards">
      <aside aria-hidden="true" className="pointer-events-none absolute z-10 hidden w-40 flex-col gap-1 xl:flex right-[-11rem] items-start top-10">
        <div className="flex max-w-40 flex-col font-handwritten text-[1.35rem]/[1.05] tracking-normal text-muted-foreground items-start text-left">
          <span>Proof that thoughtful teamwork, strong execution, and a little persistence get noticed.</span>
        </div>
        <svg className="size-10 text-muted-foreground/55 rotate-6" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 4c1 15-5 26-21 30"></path>
          <path d="m21 36-8-2 7-7"></path>
        </svg>
      </aside>
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
          Awards<sup className="top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground">(2)</sup>
        </h2>
      </header>
      <div data-state="open" data-slot="collapsible" className="group/collapsible">
        {/* Award 1: Beyond Business Plan Event (Amora) */}
        <div className="border-b border-line">
          <div className="group flex flex-col transition-colors duration-200 ease-out hover:bg-accent-muted">
            <div className="flex items-center">
              <div className="flex w-15 shrink-0 items-center justify-center">
                <div className="flex size-7 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 border-l border-dashed border-line p-4 pr-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="mb-1 leading-snug font-medium text-balance">
                      2nd Place Winner – National Competition, Beyond Business Plan Event
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      <dl>
                        <dt className="sr-only">Organizer</dt>
                        <dd>Universitas Ciputra Surabaya</dd>
                      </dl>
                      <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                      <dl>
                        <dt className="sr-only">Awarded in</dt>
                        <dd><time dateTime="2025-05-01T00:00:00.000Z">05.2025</time></dd>
                      </dl>
                      <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                      <dl>
                        <dt className="sr-only">Level</dt>
                        <dd>National</dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Together with my team, we developed a digital product called <strong>Amora</strong>, designed to support and improve the physical and mental well-being of pregnant women and young females through technology-driven movement detection and safety guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Award 2: Binus Festival Business Plan Competition (EMPOREX) */}
        <div className="border-b border-line">
          <div className="group flex flex-col transition-colors duration-200 ease-out hover:bg-accent-muted">
            <div className="flex items-center">
              <div className="flex w-15 shrink-0 items-center justify-center">
                <div className="flex size-7 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 border-l border-dashed border-line p-4 pr-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="mb-1 leading-snug font-medium text-balance">
                      2nd Place Winner – Business Plan Competition, Binus Festival
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      <dl>
                        <dt className="sr-only">Organizer</dt>
                        <dd>BINUS University</dd>
                      </dl>
                      <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                      <dl>
                        <dt className="sr-only">Awarded in</dt>
                        <dd><time dateTime="2025-05-01T00:00:00.000Z">05.2025</time></dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Introduced <strong>EMPOREX</strong>, a digital e-commerce platform designed to connect local Indonesian empon-empon farmers with international markets, empowering local communities while expanding global access to Indonesia’s agricultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
