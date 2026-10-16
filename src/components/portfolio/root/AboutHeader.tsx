"use client";

import React, { useState } from "react";
import { MountainBannerCanvas } from "./MountainBannerCanvas";

export function AboutHeader() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("Krist#3290");
    }
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 3000);
    window.open("https://discord.com/channels/@me", "_blank");
  };
  return (
    <header id="about" className="relative z-1 border-x border-b border-line bg-card max-md:border-x-0"><div className="relative h-44 overflow-hidden border-b border-line sm:h-56"><div className="relative size-full overflow-hidden bg-black select-none">
          <img
            alt="Mountain Ridge Landscape Banner"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            data-nimg="fill"
            className="object-cover object-[center_40%] select-none transition-transform duration-700 hover:scale-[1.02]"
            style={{"position":"absolute","height":"100%","width":"100%","left":0,"top":0,"right":0,"bottom":0,"color":"transparent"}}
            src="/banner-mountains-pov.png"
          />

          {/* Exact ambient mountain sunlight canvas matching zickrian.dev */}
          <MountainBannerCanvas />

          {/* Exact CRT scanline overlay matching zickrian.dev */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.35)_51%)] bg-[length:100%_3px] opacity-30 mix-blend-overlay"
          />
        </div></div><div className="relative px-5 pb-5 sm:px-6 sm:pb-6"><div className="flex items-end justify-between gap-3"><div className="relative -mt-13 size-26 overflow-hidden rounded-[15%] border-4 border-card bg-card sm:-mt-16 sm:size-32 sm:rounded-[16%]"><img alt="Portrait of Fidel Cristopher" decoding="async" data-nimg="fill" className="size-full object-cover object-cover object-top" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} sizes="(min-width: 640px) 128px, 104px" srcSet="/image/profile.jpg" src="/image/profile.jpg" /></div></div><div className="mt-3 min-w-0"><div className="flex flex-wrap items-center gap-1 sm:gap-1.5"><h1 className="text-[20px] font-bold leading-6 tracking-tight text-foreground sm:text-[22px]">Fidel Cristopher</h1><div className="inline-flex items-center gap-1 sm:gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className="size-5 shrink-0 sm:size-[22px]" aria-label="Verified profile" role="img"><defs><linearGradient id="x_gold_paint0" x1="4" y1="1.5" x2="19.5" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#F4E72A"></stop><stop offset="0.539" stopColor="#CD8105"></stop><stop offset="0.68" stopColor="#CB7B00"></stop><stop offset="1" stopColor="#F4EC26"></stop></linearGradient><linearGradient id="x_gold_paint1" x1="5" y1="2.5" x2="17.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F9E87F"></stop><stop offset="0.406" stopColor="#E2B719"></stop><stop offset="0.989" stopColor="#E2B719"></stop></linearGradient></defs><g><path fillRule="evenodd" clipRule="evenodd" d="M13.596 3.011L11 .5 8.404 3.011l-3.576-.506-.624 3.558-3.19 1.692L2.6 11l-1.586 3.245 3.19 1.692.624 3.558 3.576-.506L11 21.5l2.596-2.511 3.576.506.624-3.558 3.19-1.692L19.4 11l1.586-3.245-3.19-1.692-.624-3.558-3.576.506z" fill="url(#x_gold_paint0)"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.348 3.772L11 1.5 8.651 3.772l-3.235-.458-.565 3.219-2.886 1.531L3.4 11l-1.435 2.936 2.886 1.531.565 3.219 3.235-.458L11 20.5l2.348-2.272 3.236.458.564-3.219 2.887-1.531L18.6 11l1.435-2.936-2.887-1.531-.564-3.219-3.236.458z" fill="url(#x_gold_paint1)"></path><path d="M9.662 15.65 6.233 12.22l1.414-1.414 2.015 2.015 4.336-4.73 1.47 1.348-5.806 6.21z" fill="#D18800"></path><path d="M9.662 14.85 6.233 11.42l1.414-1.414 2.015 2.015 4.336-4.73 1.47 1.348-5.806 6.21z" fill="#000000"></path></g></svg></div></div><p className="mt-0.5 text-[15px] leading-5 text-muted-foreground">@fidelcristopher</p></div><p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-foreground sm:text-base">Undergraduate student at Binus University passionate about AI, Machine Learning, and Deep Learning. Bridging the gap between algorithm design and intuitive UI/UX using Figma and modern web development. Actively sharpening algorithmic thinking through competitive programming, with a core mission to engineer real-world solutions that create practical impact.</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business size-4" aria-hidden="true"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>AI &amp; Machine Learning Engineer</span><span className="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin size-4" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Indonesia</span><a href="https://fidelcristopher.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth size-4" aria-hidden="true"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>fidelcristopher.dev</a></div><div className="mt-5 border-t border-line pt-4"><h2 className="sr-only">Social links</h2><ul className="flex flex-wrap gap-2"><li><a href="https://github.com/fidelcristopher" target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub" title="GitHub" className="flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"><span className="size-[18px] [&>svg]:size-full"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg></span><span className="sr-only">GitHub</span></a></li><li><a href="https://www.linkedin.com/in/fidel-cristopher-292062302/" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn" title="LinkedIn" className="flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"><span className="size-[18px] [&>svg]:size-full"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.418 1H2.584C1.634 1 1 1.628 1 2.572v18.855C1 22.373 1.792 23 2.583 23h18.834c.95 0 1.583-.628 1.583-1.572V2.573C23.001 1.627 22.367 1 21.418 1ZM7.49 19.7H4.166V9.172h3.323L7.49 19.7ZM5.906 7.757c-1.108 0-1.898-.785-1.898-1.885S4.8 3.985 5.906 3.985c1.11 0 1.9.787 1.9 1.887s-.95 1.885-1.9 1.885ZM19.836 19.7h-3.324v-5.028c0-1.257 0-2.83-1.742-2.83-1.74 0-1.9 1.258-1.9 2.673V19.7H9.548V9.172h3.166v1.413c.633-1.1 1.9-1.728 3.165-1.728 3.325 0 3.957 2.2 3.957 5.028V19.7Z" fill="currentColor"></path></svg></span><span className="sr-only">LinkedIn</span></a></li><li>
  <div className="relative">
    {copiedDiscord && (
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-popover px-2 py-0.5 text-[11px] font-mono text-emerald-400 border border-border shadow-lg whitespace-nowrap z-50 animate-fade-in">
        ✓ Copied: Krist#3290
      </span>
    )}
    <button
      type="button"
      onClick={handleDiscordClick}
      aria-label="Add friend on Discord: Krist#3290"
      title="Add friend on Discord: Krist#3290 (Click to copy tag)"
      className="flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none cursor-pointer"
    >
      <span className="size-[18px] [&>svg]:size-full">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="currentColor"></path>
        </svg>
      </span>
      <span className="sr-only">Discord</span>
    </button>
  </div>
</li><li>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=fidelcristropher@gmail.com"
    target="_blank"
    rel="noopener noreferrer nofollow"
    aria-label="Email fidelcristropher@gmail.com"
    title="Send email via Gmail: fidelcristropher@gmail.com"
    className="flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"
  >
    <span className="size-[18px] [&>svg]:size-full">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"></rect>
        <path d="m4.5 7 6.35 5.08a1.8 1.8 0 0 0 2.3 0L19.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"></path>
      </svg>
    </span>
    <span className="sr-only">Email</span>
  </a>
</li></ul></div></div></header>
  );
}