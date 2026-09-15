
"use client";

import { useEffect, useRef } from "react";
import "./PlacementCarousel.css";

/* =========================================================
   STUDENT DATA
========================================================= */

const students = [
  {
    id: 1,
    company: "Bajaj Capital",
    name: "Megha Suyal",
    role: "Works at Bajaj Capital",
    image: "/images/Megha Suyal.jpeg",
  },

  {
    id: 3,
    company: "Indigo",
    name: "Lavanya Arora",
    role: "Placed in Indigo",
    image: "/images/Lavanya Arora.jpeg",
  },

  {
    id: 4,
    company: "Spectrum",
    name: "Rajeev Selwan",
    role: "Works at Spectrum",
    image: "/images/RajeevSelwan.jpeg",
  },

  {
    id: 5,
    company: "WIPRO WILP",
    name: "Shweta Kapri",
    role: "Works at WIPRO WILP",
    image: "/images/ShwetaKapri.jpeg",
  },

  {
    id: 6,
    company: "TRENT Limited",
    name: "Gaurav Kumar",
    role: "Works at TRENT Limited",
    image: "/images/GauravKumar.jpeg",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PlacementCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  const pausedRef = useRef(false);

  const resumeTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =====================================================
     GET CARD STEP
  ===================================================== */

  const getCardStep = () => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const card = slider.querySelector(
      ".placement-card"
    ) as HTMLElement | null;

    if (!card) return 0;

    const styles = window.getComputedStyle(slider);

    const gap =
      parseFloat(styles.columnGap || styles.gap || "0");

    return card.offsetWidth + gap;
  };

  /* =====================================================
     GET LOOP WIDTH
  ===================================================== */

  const getLoopWidth = () => {
    const step = getCardStep();

    if (!step) return 0;

    return step * students.length;
  };

  /* =====================================================
     AUTO SCROLL
  ===================================================== */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - previousTime;

      previousTime = currentTime;

      if (!pausedRef.current) {
        /*
         * Smooth continuous movement
         */
        slider.scrollLeft += delta * 0.045;

        const loopWidth = getLoopWidth();

        /*
         * Seamless reset after first complete group
         */
        if (
          loopWidth > 0 &&
          slider.scrollLeft >= loopWidth
        ) {
          slider.scrollLeft -= loopWidth;
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  /* =====================================================
     TEMPORARILY PAUSE AUTO SCROLL
  ===================================================== */

  const pauseForManualScroll = () => {
    pausedRef.current = true;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, 900);
  };

  /* =====================================================
     NEXT BUTTON
  ===================================================== */

  const scrollNext = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getCardStep();

    if (!step) return;

    pauseForManualScroll();

    const loopWidth = getLoopWidth();

    /*
     * If we reached the duplicated section,
     * move back to the beginning invisibly.
     */
    if (
      loopWidth > 0 &&
      slider.scrollLeft >= loopWidth - step
    ) {
      slider.scrollLeft -= loopWidth;
    }

    slider.scrollTo({
      left: slider.scrollLeft + step,
      behavior: "smooth",
    });
  };

  /* =====================================================
     PREVIOUS BUTTON
  ===================================================== */

  const scrollPrevious = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getCardStep();

    if (!step) return;

    pauseForManualScroll();

    const loopWidth = getLoopWidth();

    /*
     * At the beginning:
     * jump to equivalent position in duplicate section,
     * then move one card backwards.
     */
    if (slider.scrollLeft <= 5) {
      slider.scrollLeft = loopWidth;
    }

    slider.scrollTo({
      left: slider.scrollLeft - step,
      behavior: "smooth",
    });
  };

  /* =====================================================
     MOUSE PAUSE
  ===================================================== */

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    /*
     * Don't instantly resume if manual button
     * was recently clicked.
     */
    if (resumeTimerRef.current) {
      return;
    }

    pausedRef.current = false;
  };

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <section className="placement-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="placement-header">

        <div className="placement-heading">

          <span className="placement-eyebrow">
            PLACEMENTS &amp; SUCCESS STORIES
          </span>

          <h2>
            Our Students Are{" "}
            <strong>Making Their Mark</strong>
          </h2>

          <p>
            Our students are building successful careers
            with leading companies across the country.
          </p>

        </div>

      </div>

      {/* =================================================
          CAROUSEL
      ================================================= */}

      <div className="placement-carousel-area">

        {/* LEFT BUTTON */}

        <button
          type="button"
          className="placement-arrow placement-arrow-left"
          onClick={scrollPrevious}
          aria-label="Previous placement"
        >
          <span>‹</span>
        </button>

        {/* SLIDER */}

        <div
          className="placement-slider"
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          {/* FIRST GROUP */}

          {students.map((student) => (
            <PlacementCard
              key={`first-${student.id}`}
              student={student}
            />
          ))}

          {/* DUPLICATE GROUP */}

          {students.map((student) => (
            <PlacementCard
              key={`second-${student.id}`}
              student={student}
            />
          ))}

          {/* THIRD GROUP */}

          {students.map((student) => (
            <PlacementCard
              key={`third-${student.id}`}
              student={student}
            />
          ))}

        </div>

        {/* RIGHT BUTTON */}

        <button
          type="button"
          className="placement-arrow placement-arrow-right"
          onClick={scrollNext}
          aria-label="Next placement"
        >
          <span>›</span>
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   CARD TYPE
========================================================= */

type Student = {
  id: number;
  company: string;
  name: string;
  role: string;
  image: string;
};

/* =========================================================
   PLACEMENT CARD
========================================================= */

function PlacementCard({
  student,
}: {
  student: Student;
}) {
  return (
    <article className="placement-card">

      {/* IMAGE */}

      <img
        src={student.image}
        alt={`${student.name} - ${student.company}`}
        className="placement-student-image"
      />

      {/* OVERLAY */}

      <div className="placement-overlay"></div>

      {/* CONTENT */}

      <div className="placement-content">

        <div
          className={`placement-company ${
            student.company.toLowerCase() === "amazon"
              ? "amazon-company"
              : ""
          }`}
        >
          {student.company}
        </div>

        <div className="placement-divider"></div>

        <div className="placement-student-name">
          {student.name}
        </div>

        <div className="placement-role">
          - {student.role}
        </div>

      </div>

    </article>
  );
}