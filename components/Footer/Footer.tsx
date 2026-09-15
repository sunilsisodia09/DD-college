"use client";

import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo-link">

            {/* OFFICIAL COLLEGE LOGO */}
            <div className="footer-logo">
              <img
                src="/logo.jpeg"
                alt="D.D. College Dehradun"
              />
            </div>

          

          </a>

          <p className="footer-tagline">
            Education • Excellence • Future
          </p>

          <p className="footer-description">
            D.D. College, Dehradun is committed to providing
            quality education, practical learning, academic
            excellence and opportunities for holistic
            development and career growth.
          </p>

          {/* ================= SOCIAL MEDIA ================= */}
          <div className="footer-socials">

            <a
              href="#"
              aria-label="Facebook"
              className="social-link"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-link"
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-link"
            >
              in
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="social-link"
            >
              ▶
            </a>

          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About D.D. College
          </a>

          <a href="#why-dd-college">
            Why D.D. College
          </a>

          <a href="#programs">
            Courses & Programmes
          </a>

          <a href="#placements">
            Placements
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </div>

        {/* ================= ACADEMICS ================= */}
        <div className="footer-column">

          <h3>Academics</h3>

          <a href="#science">
            Science
          </a>

          <a href="#agro-science">
            Agro Science
          </a>

          <a href="#health-sciences">
            Health Sciences
          </a>

          <a href="#commerce-management">
            Commerce & Management
          </a>

          <a href="#humanities">
            Humanities & Social Sciences
          </a>

          <a href="#law">
            Law
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#computer-science">
            Computer Science
          </a>

          <a href="#yoga">
            Yoga
          </a>

        </div>

        {/* ================= ADMISSIONS ================= */}
        <div className="footer-column footer-contact">

          <h3>Admissions</h3>

          <a href="#application">
            Apply Now
          </a>

          <a href="#programs">
            Explore Courses
          </a>

          <a href="#contact">
            Admission Enquiry
          </a>

          {/* ================= ADDRESS ================= */}
          <div className="footer-contact-item">

            <MapPin size={18} />

            <span>
              25 Nimbuwala, Garhi Cantt
              <br />
              Near ONGC Helipad
              <br />
              Dehradun, Uttarakhand – 248003
            </span>

          </div>

          {/* ================= PHONE ================= */}
          <div className="footer-contact-item">

            <Phone size={17} />

            <a href="tel:+917417555666">
              +91 74175 55666
            </a>

          </div>

          {/* ================= LANDLINE ================= */}
          <div className="footer-contact-item">

            <Phone size={17} />

            <a href="tel:+911352750929">
              0135-2750929
            </a>

          </div>

          {/* ================= EMAIL ================= */}
          <div className="footer-contact-item">

            <Mail size={17} />

            <a href="mailto:info@ddcollege.in">
              info@ddcollege.in
            </a>

          </div>

         

        </div>

      </div>

      {/* ================= APPLY SECTION ================= */}
      <div className="footer-apply-section">

        <div className="footer-apply-content">

          <div className="footer-apply-text">

            <span className="footer-apply-small">
              ADMISSIONS OPEN 2026–27
            </span>

            <h3>
              Shape Your Future With D.D. College
            </h3>

            <p>
              Explore our academic programmes and
              take the next step towards your career.
            </p>

          </div>

          <a
            href="#application"
            className="footer-apply"
          >

            <span>
              Apply Now
            </span>

            <ArrowUpRight size={18} />

          </a>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">

          <span>
            © 2026 D.D. College, Dehradun.
          </span>

          <span>
            All Rights Reserved.
          </span>

        </div>

    <div className="footer-bottom-right">

  <span>
    Admissions Open 2026–27
  </span>

  <a
    href="https://ddcollege.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    ddcollege.com
  </a>

</div>

      </div>

    </footer>
  );
}