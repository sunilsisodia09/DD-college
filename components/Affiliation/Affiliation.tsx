"use client";

import Image from "next/image";
import "./Affiliation.css";

const affiliations = [
  {
    name: "Uttarakhand Technical University",
    logo: "/images/BCI.png",
  },
  {
    name: "Uttarakhand Board",
    logo: "/images/ind.png",
  },
  {
    name: "Hemwati Nandan Bahuguna Garhwal University",
    logo: "/images/sanskrit.png",
  },
  {
    name: "Sri Dev Suman Uttarakhand University",
    logo: "/images/UBTER.png",
  },
  {
    name: "University Grants Commission",
    logo: "/images/UGC.png",
  },
  {
    name: "National Assessment and Accreditation Council",
    logo: "/images/Veer.png",
  },
  {
    name: "Pharmacy Council of India",
    logo: "/images/Shri.png",
  },
  {
    name: "National Council for Teacher Education",
    logo: "/images/NCTE.png",
  },
];

export default function Affiliation() {
  return (
    <section className="affiliation-section" id="affiliation">
      <div className="affiliation-overlay"></div>

      <div className="affiliation-container">

        {/* ================= HEADING ================= */}
        <div className="affiliation-heading">
          <h2>Our Affiliations / Recognition</h2>

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
          {affiliations.map((item, index) => (
            <div className="affiliation-logo-card" key={index}>
              <div className="affiliation-logo-inner">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={180}
                  height={130}
                  className="affiliation-logo"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}