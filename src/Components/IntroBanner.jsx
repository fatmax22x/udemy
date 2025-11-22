import React from "react";

export default function IntroBanner() {
  return (
    <section className="intro-banner">
      <div className="intro-content">
        <h1 className="intro-title">Level up your future with one click</h1>
        <p className="intro-sub">
          Start learning today — beginner deals from only £259.99
        </p>

        <button className="intro-btn">Get Started</button>
      </div>

      <figure className="intro-visual">
        <img
          src="https://i.imgur.com/ZnIdm3B.jpg"
          alt="Learning illustration"
          className="intro-img"
        />
      </figure>
    </section>
  );
}
