import type { Metadata } from "next";
import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { AllLearningView } from "@/components/portfolio/root/AllLearningView";
import { SectionDivider } from "@/components/portfolio/root/SectionDivider";
import { SiteFooter } from "@/components/portfolio/root/SiteFooter";

export const metadata: Metadata = {
  title: "My Learning & Tech Stack | Fidel Cristopher",
  description: "Continuous learning in AI, Deep Learning, Competitive Programming, and Modern Web Development by Fidel Cristopher.",
};

export default function LearningPage() {
  return (
    <>
      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-26">
          <AboutHeader />
          <StickyNav activeIndex={3} />
          <div id="main" tabIndex={-1} className="outline-none">
            <SectionDivider />
            <AllLearningView />
            <SectionDivider />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
