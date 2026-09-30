import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { ExperienceSection } from "@/components/portfolio/root/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/root/ProjectsSection";
import { StackSection } from "@/components/portfolio/root/StackSection";
import { GithubSection } from "@/components/portfolio/root/GithubSection";
import { AwardsSection } from "@/components/portfolio/root/AwardsSection";
import { PublicationsSection } from "@/components/portfolio/root/PublicationsSection";
import { CertificationsSection } from "@/components/portfolio/root/CertificationsSection";
import { SectionDivider } from "@/components/portfolio/root/SectionDivider";
import { SiteFooter } from "@/components/portfolio/root/SiteFooter";

export default function Home() {
  return (
    <>
      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-26">
          <AboutHeader />
          <StickyNav />
          <div id="main" tabIndex={-1} className="outline-none">
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <ProjectsSection />
            <SectionDivider />
            <StackSection />
            <SectionDivider />
            <GithubSection />
            <SectionDivider />
            <AwardsSection />
            <SectionDivider />
            <PublicationsSection />
            <SectionDivider />
            <CertificationsSection />
            <SectionDivider />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
