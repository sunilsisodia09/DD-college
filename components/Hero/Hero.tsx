"use client";

import Link from "next/link";
import Image from "next/image";

import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* =================================================
          NAVBAR
      ================================================= */}
      <header className="hero-navbar">
        {/* LOGO */}
        <Link href="#home" className="hero-logo">
          <Image
            src="/images/logo.png"
            alt="D.D. College Dehradun"
            width={150}
            height={70}
            priority
          />
        </Link>

        {/* APPLY BUTTON */}
        <Link href="#application" className="hero-apply-button">
          APPLY NOW
        </Link>
      </header>
      

      <div className="fee-benefits">

  {/* FIXED TOP TEXT */}
  <div className="fee-benefits-title">
    Extra Support for Deserving Students
  </div>

  {/* SCROLLING WORDS */}
  <div className="fee-benefits-scroll">
    <div className="fee-benefits-track">

      <span>Special Fee Benefits</span>
      <span>Army Families</span>
      <span>Single-Mother Families</span>
      <span>EWS Students</span>
      <span>Merit-Based Students</span>

      {/* Duplicate */}
      <span>Special Fee Benefits</span>
      <span>Army Families</span>
      <span>Single-Mother Families</span>
      <span>EWS Students</span>
      <span>Merit-Based Students</span>

    </div>
  </div>

</div>
      {/* =================================================
          MAIN HERO
      ================================================= */}
      <div className="hero-main">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            D.D. COLLEGE DEHRADUN
           
          </div>

          <div className="hero-heading">
             <h2>Quality Education. Limitless Opportunities. At Exceptional Value</h2>
         
          </div>

          <h2>
            Education that
            <br />
            <span>creates possibilities.</span>
          </h2>

          <p>
            Build your future with quality education, diverse academic
            programmes, practical learning and career-focused opportunities
            at D.D. College, Dehradun.
          </p>

          {/* HERO STATS */}
          <div className="hero-mini-stats">
            <div className="hero-mini-stat">
              <strong>20+</strong>
              <span>Years of Legacy</span>
            </div>
          </div>
        </div>

        <div className="hero-scholarship">
          <div className="scholarship-title">
            D.D. COLLEGE
          </div>

          <div className="scholarship-main-number">
            20<sup>+</sup>
          </div>

          <div className="scholarship-crore">
            YEARS OF LEGACY
          </div>

          <div className="scholarship-percent">
            <strong>5000+</strong>
            <span>Successful Alumni</span>
          </div>

          <div className="scholarship-description">
    
          </div>

          <div className="student-image">
            <Image
              src="/student.png"
              alt="D.D. College Student"
              width={340}
              height={370}
              priority
            />
          </div>
        </div>

        {/* =================================================
            APPLICATION FORM
        ================================================= */}
        <div
          className="hero-form-wrapper"
          id="contact"
        >
          <ApplicationForm />
        </div>
      </div>

      <section
        className="ranking-section"
        id="placements"
      >
        <div className="ranking-card">
          {/* COLLEGE */}
          <div className="ranking-university">
            <div className="university-logo">
              <Image
                src="/logo.jpeg"
                alt="D.D. College Logo"
                width={190}
                height={100}
              />
            </div>

            <h3>D.D. COLLEGE</h3>

            <span className="announced">
              DEHRADUN
            </span>

            <h4>
              <b>20+</b> YEARS
            </h4>
          </div>

          {/* ALUMNI */}
          <div className="ranking-number">
            <strong>5000+</strong>

            <span>ALUMNI</span>

            <p>
              <b>Successful Alumni</b>
              <br />
              building careers across sectors
            </p>
          </div>

          {/* PROGRAMMES */}
          <div className="ranking-number">
            <strong>25+</strong>

            <span>PROGRAMMES</span>

            <p>
              <b>Diverse Academic Paths</b>
              <br />
              across multiple disciplines
            </p>
          </div>

          {/* SUCCESS STORIES */}
          <div className="global-ranking">
            <span>2500+</span>

            <div>
              <small>STUDENT</small>

              <strong>
                SUCCESS STORIES
              </strong>

              <small>
                EDUCATION • CAREER • GROWTH
              </small>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

