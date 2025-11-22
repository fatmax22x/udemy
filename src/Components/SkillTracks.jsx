import React from "react";
import { skillTracks } from "../Data/skillTracks";
export default function SkillTracks() {
  return (
    <section className="skill-tracks">
      <header className="tracks-header">
        <h2 className="tracks-title">Expand Your Skillset</h2>
        <p className="tracks-sub">Choose a path and start growing</p>
      </header>

      <div className="tracks-grid">
        {skillTracks.map((item, index) => (
          <article key={index} className="track-card">
            <div className="track-img-wrap">
              <img src={item.image} alt={item.title} className="track-img" />
            </div>

            <div className="track-info">
              <h3 className="track-name">{item.title}</h3>
              <span className="track-count">{item.learners} enrolled</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
