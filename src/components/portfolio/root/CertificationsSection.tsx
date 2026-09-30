import React from "react";

export function CertificationsSection() {
  return (
    <section data-slot="panel" className="relative z-1 -mt-px border border-line bg-card max-md:border-x-0" id="certs">
      <header data-slot="panel-header" className="border-b border-line px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line">
        <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
          Certifications<sup className="top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground">(1)</sup>
        </h2>
      </header>
      <div data-state="open" data-slot="collapsible" className="group/collapsible">
        {/* NVIDIA Fundamentals of Deep Learning */}
        <div className="border-b border-line">
          <a
            className="group flex items-center pr-2 transition-colors duration-200 ease-out hover:bg-accent-muted"
            href="https://learn.nvidia.com/courses/course?course_id=course-v1:DLI+C-FX-01+V3"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className="flex w-15 shrink-0 items-center justify-center">
              <span className="flex size-8 items-center justify-center overflow-hidden rounded-md border border-border select-none bg-black p-1 ring-1 ring-line">
                <img
                  alt="NVIDIA Logo"
                  aria-hidden="true"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  className="size-full object-contain"
                  src="/logos/nvidia.svg"
                />
              </span>
            </div>
            <div className="flex-1 space-y-1 border-l border-dashed border-line p-4 pr-2">
              <p className="leading-snug font-medium text-balance">
                Fundamentals of Deep Learning
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Issued by</dt>
                  <dd>
                    <span aria-hidden="true">@</span>
                    <span className="ml-0.5">NVIDIA</span>
                  </dd>
                </dl>
                <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                <dl>
                  <dt className="sr-only">Issued on</dt>
                  <dd><time dateTime="2024-10-01T00:00:00.000Z">10.2024</time></dd>
                </dl>
                <div data-orientation="vertical" role="none" data-slot="separator" className="shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:h-4 data-vertical:self-center"></div>
                <dl>
                  <dt className="sr-only">Credential ID</dt>
                  <dd className="font-mono text-xs text-muted-foreground">ID: CIP8dRkVR_6EmZfAqAQVtA</dd>
                </dl>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right size-4 shrink-0 text-muted-foreground transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
