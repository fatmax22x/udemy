import React from "react";
import TopNavigation from "./Components/TopNavigation";
import IntroBanner from "./Components/IntroBanner";
import SkillTracks from "./Components/SkillTracks";
import LearningPaths from "./Components/LearningPaths";
import PartnersShowcase from "./Components/PartnersShowcase";

export default function App() {
  return (
    <div className="app-wrapper">
      <TopNavigation />

      <main>
        <IntroBanner />
        <SkillTracks />
        <LearningPaths />
        <PartnersShowcase />
      </main>
    </div>
  );
}
