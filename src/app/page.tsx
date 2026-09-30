import { AboutHeader } from "@/components/sites/zickrian-dev/root/AboutHeader";
import { StickyNav } from "@/components/sites/zickrian-dev/root/StickyNav";
import { ExperienceSection } from "@/components/sites/zickrian-dev/root/ExperienceSection";
import { ProjectsSection } from "@/components/sites/zickrian-dev/root/ProjectsSection";
import { StackSection } from "@/components/sites/zickrian-dev/root/StackSection";
import { GithubSection } from "@/components/sites/zickrian-dev/root/GithubSection";
import { AwardsSection } from "@/components/sites/zickrian-dev/root/AwardsSection";
import { PublicationsSection } from "@/components/sites/zickrian-dev/root/PublicationsSection";
import { CertificationsSection } from "@/components/sites/zickrian-dev/root/CertificationsSection";
import { SectionDivider } from "@/components/sites/zickrian-dev/root/SectionDivider";
import { SiteFooter } from "@/components/sites/zickrian-dev/root/SiteFooter";

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
