"use client";

import "./CampusLife.css";

const campusImages = [
  {
    image: "/campus.png",
    alt: "D.D. College Campus",
    className: "campus-main",
  },
  {
    image: "/images/libary.jpg",
    alt: "D.D. College Library",
    className: "campus-top",
  },
  {
    image: "/images/lab.webp",
    alt: "D.D. College Campus",
    className: "campus-bottom-left",
  },
   {
    image: "/images/yoga.jpg",
    alt: "D.D. College Campus",
    className: "campus-bottom-right",
  },
];

export default function CampusLife() {
  return (
    <section
      className="campus-life-section"
      id="campus-life"
    >
      <div className="campus-life-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="campus-life-header">

          <span className="campus-eyebrow">
            LIFE @ D.D. COLLEGE
          </span>

          <h2 className="campus-title">
            Explore Our <span>Campus</span>
          </h2>

          <p className="campus-description">
            Experience a vibrant campus environment designed
            for learning, growth, creativity and student life.
          </p>

        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="campus-divider"></div>

        {/* =========================================
            CAMPUS GALLERY
        ========================================= */}

        <div className="campus-gallery">

          {campusImages.map((item, index) => (
            <div
              className={`campus-image ${item.className}`}
              key={index}
            >
              <img
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}