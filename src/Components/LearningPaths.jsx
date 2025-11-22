import React from "react";
import { learningCourses } from "../Data/learningCourses";
export default function LearningPaths() {
  return (
    <section className="learning-paths">
      <header className="lp-header">
        <h2 className="lp-title">Grow faster with curated learning paths</h2>
        <p className="lp-sub">Handpicked courses for real career impact</p>
      </header>

      <div className="lp-grid">
        {learningCourses.map((item) => (
          <article key={item.id} className="lp-card">
            <div className="lp-img-box">
              <img src={item.image} alt={item.title} className="lp-img" />
            </div>

            <div className="lp-content">
              <h3 className="lp-name">{item.title}</h3>

              <div className="lp-rating">
                ⭐ {item.rating}{" "}
                <span className="lp-reviews">({item.reviews})</span>
              </div>

              <div className="lp-price">{item.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
