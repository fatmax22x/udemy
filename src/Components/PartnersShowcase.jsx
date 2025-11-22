import React from "react";

export default function PartnersShowcase() {
  const partnerLogos = [
    "https://i.imgur.com/5n8tDZE.png",
    "https://i.imgur.com/IbhmIbk.png",
    "https://i.imgur.com/JWbFGxm.png",
    "https://i.imgur.com/NRWCOuF.png",
    "https://i.imgur.com/W9W84Fv.png",
    "https://i.imgur.com/XgQrc1Q.png",
  ];

  return (
    <section className="partners-section">
      <header className="partners-header">
        <h2 className="partners-title">
          Global brands that rely on our training
        </h2>
        <p className="partners-subtitle">
          A growing network of trusted companies
        </p>
      </header>

      <div className="partners-logos">
        {partnerLogos.map((logo, index) => (
          <figure className="partner-logo-wrap" key={index}>
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="partner-logo"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
