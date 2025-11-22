import React from "react";

export default function TopNavigation() {
  return (
    <header className="topnav">
      <div className="topnav-left">
        <h1 className="brand">Learnify</h1>

        <button className="browse-btn">Browse</button>
      </div>

      <div className="search-bar">
        <input
          type="search"
          placeholder="Find a course…"
          className="search-input"
        />
      </div>

      <nav className="topnav-links">
        <a href="#" className="nav-link">
          Pricing
        </a>
        <a href="#" className="nav-link">
          Teams
        </a>
        <a href="#" className="nav-link">
          Become an Instructor
        </a>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn">Log In</button>
        <button className="register-btn">Create account</button>
      </div>
    </header>
  );
}
