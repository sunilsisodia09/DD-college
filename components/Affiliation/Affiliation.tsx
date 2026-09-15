"use client";

import Image from "next/image";
import "./Affiliation.css";

const affiliations = [
  {
    name: "Bar Council of India",
    logo: "/images/BCI.png",
  },
  {
    name: "Indira Gandhi National Open University",
    logo: "/images/Pharmacy.jpeg",
  },
  {
    name: "Uttarakhand Sanskrit University",
    logo: "/images/sanskrit.png",
  },
  {
    name: "Uttarakhand Board of Technical Education",
    logo: "/images/UBTER.png",
  },
  {
    name: "University Grants Commission",
    logo: "/images/UGC.png",
  },
  {
    name: "Hemwati Nandan Bahuguna Garhwal University",
    logo: "/images/Veer.png",
  },
  {
    name: "Sri Dev Suman Uttarakhand University",
    logo: "/images/Shri.png",
  },
  {
    name: "National Council for Teacher Education",
    logo: "/images/NCTE.png",
  },
];

export default function Affiliation() {
  return (
    <section
      className="affiliation-section"
      id="affiliation"
      aria-labelledby="affiliation-title"
    >
      {/* Background Overlay */}
      <div
        className="affiliation-overlay"
        aria-hidden="true"
      />

      <div className="affiliation-container">

        {/* ================= HEADING ================= */}
        <div className="affiliation-heading">
          <h2 id="affiliation-title">
            Our Affiliations / Recognition
          </h2>

          <p>
            Our Affiliations and Recognition reflect the academic credibility
            and standards upheld by D.D. College. The institution is
            affiliated with reputed universities and recognized by relevant
            educational authorities, ensuring that its programs meet
            established guidelines and quality benchmarks.
          </p>
        </div>

        {/* ================= LOGOS ================= */}
        <div className="affiliation-logos">
          {affiliations.map((item) => (
            <div
              className="affiliation-logo-card"
              key={item.name}
            >
              <div className="affiliation-logo-inner">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={180}
                  height={130}
                  className="affiliation-logo"
                  sizes="
                    (max-width: 480px) 115px,
                    (max-width: 768px) 145px,
                    (max-width: 1200px) 160px,
                    155px
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}