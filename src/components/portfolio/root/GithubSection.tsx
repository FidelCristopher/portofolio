import React from "react";

export function GithubSection() {
  // Real weeks and contribution days for FidelCristopher
  // Total 73 contributions in the last year
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0 defer-offscreen" id="github">
      <h2 className="sr-only">GitHub Contributions</h2>
      <div className="mx-auto flex w-full min-w-0 flex-col gap-4 py-4 text-sm">
        <div className="w-full min-w-0 overflow-x-auto px-4 text-muted-foreground">
          <svg className="block h-auto w-full min-w-[680px] overflow-visible" height="118" viewBox="0 0 754 118" width="754" aria-hidden="true">
            <title>GitHub Contributions</title>
            <g className="fill-current selection:fill-selection-foreground">
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
            {/* Level 0 background grid */}
            <path
              className="contribution-level text-[#161b22] dark:text-[#161b22]"
              data-level="0"
              fill="currentColor"
              d="M0 22h12v12h-12ZM0 36h12v12h-12ZM0 50h12v12h-12ZM0 64h12v12h-12ZM0 78h12v12h-12ZM0 92h12v12h-12ZM0 106h12v12h-12Z"
            />
            {/* Render 52 columns of 7 days */}
            {Array.from({ length: 52 }).map((_, col) => {
              const x = col * 14;
              return (
                <g key={col}>
                  {Array.from({ length: 7 }).map((__, row) => {
                    const y = 22 + row * 14;
                    // Real active contribution coordinates for FidelCristopher
                    let level = 0;
                    if (col === 14 && row === 0) level = 1;
                    if (col === 10 && row === 1) level = 1;
                    if (col === 11 && row === 1) level = 1;
                    if (col === 11 && row === 2) level = 3;
                    if (col === 23 && row === 0) level = 1;
                    if (col === 30 && row === 1) level = 3;
                    if (col === 36 && row === 3) level = 1;
                    if (col === 36 && row === 4) level = 4;
                    if (col === 33 && row === 6) level = 1;
                    if (col === 51 && row === 1) level = 3;
                    if (col === 51 && row === 2) level = 2;
                    if (col === 51 && row === 3) level = 4;
                    if (col === 51 && row === 5) level = 1;
                    if (col === 51 && row === 6) level = 1;

                    const colors = [
                      "#161b22", // level 0 (dark grey)
                      "#0e4429", // level 1 (subtle green)
                      "#006d32", // level 2 (medium green)
                      "#26a641", // level 3 (bright green)
                      "#39d353"  // level 4 (highest green)
                    ];

                    return (
                      <rect
                        key={row}
                        x={x}
                        y={y}
                        width="11"
                        height="11"
                        rx="2"
                        fill={colors[level]}
                        className="transition-colors hover:stroke-foreground/50 hover:stroke-[1px]"
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flex flex-wrap gap-4 px-4 leading-none whitespace-nowrap">
          <div className="text-muted-foreground">
            73 contributions in the last year on{" "}
            <a
              className="text-foreground link-underline hover:underline font-medium"
              href="https://github.com/FidelCristopher"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </div>
          <div className="ml-auto flex items-center gap-1" aria-hidden="true">
            <span className="mr-1 text-muted-foreground text-xs">Less</span>
            <span className="size-2.5 rounded-xs bg-[#161b22] border border-white/5" />
            <span className="size-2.5 rounded-xs bg-[#0e4429]" />
            <span className="size-2.5 rounded-xs bg-[#006d32]" />
            <span className="size-2.5 rounded-xs bg-[#26a641]" />
            <span className="size-2.5 rounded-xs bg-[#39d353]" />
            <span className="ml-1 text-muted-foreground text-xs">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}