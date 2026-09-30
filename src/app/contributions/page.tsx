import type { Metadata } from "next";
import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { AllContributionsView } from "@/components/portfolio/root/AllContributionsView";
import { SectionDivider } from "@/components/portfolio/root/SectionDivider";
import { SiteFooter } from "@/components/portfolio/root/SiteFooter";

export const metadata: Metadata = {
  title: "GitHub Contributions & Open Source | Fidel Cristopher",
  description: "Open-source work, commit activity, and repository contributions by Fidel Cristopher.",
};

export default function ContributionsPage() {
  return (
    <>
      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-26">
          <AboutHeader />
          <StickyNav activeIndex={2} />
          <div id="main" tabIndex={-1} className="outline-none">
            <SectionDivider />
            <AllContributionsView />
            <SectionDivider />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
