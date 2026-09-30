import React from "react";

export function PublicationsSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="publications">
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
          Publications
        </h2>
      </header>
      <div className="flex min-h-[100px] flex-col items-center justify-center p-6 text-center select-none">
        <p className="font-handwritten text-2xl tracking-wide text-muted-foreground/70">
          No publications yet. Research and paper drafts in progress...
        </p>
      </div>
    </section>
  );
}
