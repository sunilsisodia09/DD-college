"use client";

import "./LogoMarquee.css";

const logos = [
  { name: "Toshiba", src: "/images/accenture.png" },
  { name: "Virtusa", src: "/images/axis.png" },
  { name: "Walmart", src:"/images/amazon.png"},
  { name: "J.P. Morgan", src:"/images/tata.png" },
  { name: "Bank of America", src: "/images/indigo.png" },
  { name: "Accenture", src: "/images/infosys.png" },
  { name: "Tech Mahindra", src: "/images/tataser.png" },
];

function LogoGroup() {
  return (
    <div className="logo-marquee-group">
      {logos.map((logo, index) => (
        <div className="logo-item" key={`${logo.name}-${index}`}>
          <img
            src={logo.src}
            alt={logo.name}
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="logo-marquee">

      <div className="logo-marquee-title">
        <span>OUR RECRUITING PARTNERS</span>
        <h2>Our Placement Partners</h2>
      </div>

      <div className="logo-marquee-wrapper">

        <div className="logo-marquee-track">

          {/* First group */}
          <LogoGroup />

          {/* Exact duplicate */}
          <LogoGroup />

          {/* Extra duplicate for responsive screens */}
          <LogoGroup />

        </div>

      </div>

    </section>
  );
}