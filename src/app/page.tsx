"use client";

import React, { useState, useEffect } from "react";
import { AboutHeader } from "@/components/portfolio/root/AboutHeader";
import { StickyNav } from "@/components/portfolio/root/StickyNav";
import { EducationSection } from "@/components/portfolio/root/EducationSection";
import { ProjectsSection } from "@/components/portfolio/root/ProjectsSection";
import { AllProjectsGrid } from "@/components/portfolio/root/AllProjectsGrid";
import { StackSection } from "@/components/portfolio/root/StackSection";
import { GithubSection } from "@/components/portfolio/root/GithubSection";
import { CodeforcesSection } from "@/components/portfolio/root/CodeforcesSection";
import { AllContributionsView } from "@/components/portfolio/root/AllContributionsView";
import { AllLearningView } from "@/components/portfolio/root/AllLearningView";
import { AwardsSection } from "@/components/portfolio/root/AwardsSection";
import { PublicationsSection } from "@/components/portfolio/root/PublicationsSection";
import { CertificationsSection } from "@/components/portfolio/root/CertificationsSection";
import { SectionDivider } from "@/components/portfolio/root/SectionDivider";
import { SiteFooter } from "@/components/portfolio/root/SiteFooter";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  // Read URL params or hash on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") || window.location.hash.replace("#", "");
      if (tabParam === "projects") setActiveTab(1);
      else if (tabParam === "contributions" || tabParam === "github" || tabParam === "codeforces") setActiveTab(2);
      else if (tabParam === "learning" || tabParam === "stack") setActiveTab(3);

      const handlePopState = () => {
        const p = new URLSearchParams(window.location.search);
        const t = p.get("tab") || window.location.hash.replace("#", "");
        if (t === "projects") setActiveTab(1);
        else if (t === "contributions" || t === "github" || t === "codeforces") setActiveTab(2);
        else if (t === "learning" || t === "stack") setActiveTab(3);
        else setActiveTab(0);
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (typeof window !== "undefined") {
      const tabNames = ["", "projects", "contributions", "learning"];
      const newUrl = index === 0 ? "/" : `/?tab=${tabNames[index]}`;
      window.history.pushState(null, "", newUrl);
    }
  };

  return (
    <>
      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-26">
          <AboutHeader />
          <StickyNav activeTab={activeTab} onTabChange={handleTabChange} />
          
          <div id="main" tabIndex={-1} className="outline-none">
            {/* Tab 0: Home Overview */}
            {activeTab === 0 && (
              <>
                <SectionDivider />
                <EducationSection />
                <SectionDivider />
                <ProjectsSection onViewAllProjects={() => handleTabChange(1)} />
                <SectionDivider />
                <StackSection />
                <SectionDivider />
                <GithubSection />
                <SectionDivider />
                <CodeforcesSection showSolvedList={false} />
                <SectionDivider />
                <AwardsSection />
                <SectionDivider />
                {/* <PublicationsSection /> */}
                {/* <SectionDivider /> */}
                <CertificationsSection />
                <SectionDivider />
              </>
            )}

            {/* Tab 1: Projects Showcase */}
            {activeTab === 1 && (
              <>
                <SectionDivider />
                <AllProjectsGrid />
                <SectionDivider />
              </>
            )}

            {/* Tab 2: My Contribution & Codeforces Hub */}
            {activeTab === 2 && (
              <>
                <SectionDivider />
                <AllContributionsView />
                <SectionDivider />
                <CodeforcesSection showSolvedList={true} />
                <SectionDivider />
              </>
            )}

            {/* Tab 3: My Learning & Coursework Hub */}
            {activeTab === 3 && (
              <>
                <SectionDivider />
                <AllLearningView />
                <SectionDivider />
              </>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
