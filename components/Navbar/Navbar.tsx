"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import "./Navbar.css";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const handleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header
      className={`site-navbar ${
        visible ? "navbar-show" : ""
      }`}
    >
      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/logo.jpeg"
            alt="D.D. College Dehradun"
            className="navbar-logo-image"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}

        <nav className="desktop-menu">
          <Link
            href="#home"
            onClick={closeMenu}
          >
            HOME
          </Link>
        </nav>

        {/* ================= DESKTOP APPLY BUTTON ================= */}

        <Link
          href="#application"
          className="apply-button"
          onClick={closeMenu}
        >
          APPLY NOW
          <ArrowRight size={17} />
        </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={handleMobileMenu}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          mobileOpen ? "mobile-menu-open" : ""
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
        >
          HOME
        </Link>

        <Link
          href="#application"
          className="mobile-apply-button"
          onClick={closeMenu}
        >
          APPLY NOW
          <ArrowRight size={18} />
        </Link>
      </div>
    </header>
  );
}