import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { EducationSection } from "@/components/portfolio/root/EducationSection";
import { ProjectsSection } from "@/components/portfolio/root/ProjectsSection";
import { StackSection } from "@/components/portfolio/root/StackSection";
import { GithubSection } from "@/components/portfolio/root/GithubSection";
import { CodeforcesSection } from "@/components/portfolio/root/CodeforcesSection";
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
            <EducationSection />
            <SectionDivider />
            <ProjectsSection />
            <SectionDivider />
            <StackSection />
            <SectionDivider />
            <GithubSection />
            <SectionDivider />
            <CodeforcesSection />
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
