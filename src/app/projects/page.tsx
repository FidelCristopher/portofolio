import type { Metadata } from "next";
import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { AllProjectsGrid } from "@/components/portfolio/root/AllProjectsGrid";
import { SectionDivider } from "@/components/portfolio/root/SectionDivider";
import { SiteFooter } from "@/components/portfolio/root/SiteFooter";

export const metadata: Metadata = {
  title: "AI & Machine Learning Projects | Fidel Cristopher",
  description: "Featured engineering projects and experiments by Fidel Cristopher.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-26">
          <AboutHeader />
          <StickyNav activeIndex={1} />
          <div id="main" tabIndex={-1} className="outline-none">
            <SectionDivider />
            <AllProjectsGrid />
            <SectionDivider />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
