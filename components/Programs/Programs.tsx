"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import "./Programs.css";

const categories = [
  "Arts",
  "Management",
  "Pharmacy",
  "Bsc",
  "Education",
  "Law",
  "Nursing",
  "C.S",
];

const programsData: Record<
  string,
  {
    title: string;
    description: string;
    points: string[];
  }[]
> = {
  Arts: [
    {
      title: "B.A. English",
      description:
        "Develop strong communication, literary and analytical skills through the study of English language, literature and creative expression.",
      points: [
        "English Literature",
        "Communication Skills",
        "Creative Writing",
        "Critical Analysis",
      ],
    },
    {
      title: "B.A. History",
      description:
        "Explore Indian and world history while developing a deeper understanding of cultures, societies, historical events and civilizations.",
      points: [
        "Indian History",
        "World History",
        "Historical Research",
        "Heritage & Culture",
      ],
    },
    {
      title: "B.A. Political Science",
      description:
        "Understand political systems, governance, public policy and constitutional studies while developing analytical and critical thinking skills.",
      points: [
        "Indian Constitution",
        "Political Theory",
        "International Relations",
        "Public Administration",
      ],
    },
    {
      title: "B.A. Hindi",
      description:
        "Develop knowledge of Hindi language, literature and creative expression while building strong communication and writing skills.",
      points: [
        "Hindi Literature",
        "Language Studies",
        "Creative Writing",
        "Literary Analysis",
      ],
    },
    {
      title: "B.A. Economics",
      description:
        "Understand economic principles, markets, development and financial systems through analytical and practical learning.",
      points: [
        "Micro & Macroeconomics",
        "Indian Economy",
        "Economic Development",
        "Data Analysis",
      ],
    },
  ],

  Management: [
    {
      title: "BBA",
      description:
        "Develop business knowledge, leadership skills and professional confidence through a practical management-focused curriculum.",
      points: [
        "Business Case Studies",
        "Industry Interaction",
        "Management Workshops",
        "Live Projects",
      ],
    },
    {
      title: "MBA",
      description:
        "Build advanced management expertise through industry-oriented learning, strategic thinking and professional development.",
      points: [
        "Industry Experts",
        "Management Projects",
        "Professional Training",
        "Placement Support",
      ],
    },
    {
      title: "B.Com",
      description:
        "Gain strong foundations in accounting, finance, business and commerce with practical learning opportunities.",
      points: [
        "Accounting Practice",
        "Business Studies",
        "Finance Projects",
        "Career Guidance",
      ],
    },
    {
      title: "M.A.",
      description:
        "Build advanced knowledge and analytical expertise in humanities and social sciences through postgraduate learning.",
      points: [
        "Advanced Subject Knowledge",
        "Research Skills",
        "Analytical Learning",
        "Career Development",
      ],
    },
  ],

  Pharmacy: [
    {
      title: "D.Pharm",
      description:
        "Develop essential pharmaceutical knowledge and practical skills for a successful career in pharmacy and healthcare.",
      points: [
        "Pharmacy Laboratory",
        "Practical Learning",
        "Healthcare Exposure",
        "Career Support",
      ],
    },
  ],

  Bsc: [
    {
      title: "B.Sc. IT",
      description:
        "Build strong foundations in computer science, programming, problem solving and modern technologies through practical learning.",
      points: [
        "Programming & Development",
        "Computer Laboratories",
        "Practical Projects",
        "Technology Skills",
      ],
    },
    {
      title: "B.Sc. Agriculture",
      description:
        "Learn modern agricultural practices, sustainable farming, crop production and agricultural technologies through practical education.",
      points: [
        "Agricultural Practical Training",
        "Modern Farming Techniques",
        "Field Projects",
        "Industry Exposure",
      ],
    },
    {
      title: "M.Sc.",
      description:
        "Advance your scientific knowledge and research capabilities through postgraduate study, practical learning and specialized academic training.",
      points: [
        "Advanced Science Studies",
        "Research & Analysis",
        "Laboratory Training",
        "Professional Development",
      ],
    },
  ],

  Education: [
    {
      title: "B.Ed",
      description:
        "Develop professional teaching skills, educational knowledge and classroom expertise through practical and learner-focused teacher education.",
      points: [
        "Teaching Methodology",
        "Educational Psychology",
        "Classroom Training",
        "Teaching Practice",
      ],
    },
  ],

  Law: [
    {
      title: "B.A. LL.B",
      description:
        "Build a strong foundation in law along with humanities through an integrated undergraduate programme designed for future legal professionals.",
      points: [
        "Constitutional Law",
        "Legal Studies",
        "Legal Research",
        "Moot Court Practice",
      ],
    },
    {
      title: "LL.B",
      description:
        "Develop comprehensive knowledge of legal principles, legislation and judicial systems through professional legal education.",
      points: [
        "Constitutional Law",
        "Criminal Law",
        "Civil Law",
        "Legal Practice",
      ],
    },
  ],

  Nursing: [
    {
      title: "GNM",
      description:
        "Gain essential nursing knowledge and practical healthcare skills through clinical training, patient care and professional nursing education.",
      points: [
        "Clinical Training",
        "Patient Care",
        "Nursing Practice",
        "Healthcare Exposure",
      ],
    },
  ],

  "C.S": [
    {
      title: "BCA",
      description:
        "Build practical knowledge in computer applications, programming, software development and modern information technologies.",
      points: [
        "Programming & Development",
        "Database Management",
        "Web Technologies",
        "Software Projects",
      ],
    },
  ],
};

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("Arts");

  const tabsRef = useRef<HTMLDivElement | null>(null);

  const programs = programsData[activeCategory] ?? [];

  /* =========================================================
     AUTO SCROLL + MANUAL SCROLL
  ========================================================= */

  useEffect(() => {
    const tabs = tabsRef.current;

    if (!tabs) return;

    /*
      Auto scroll only on mobile.
      Desktop tabs remain normal.
    */

    const mediaQuery = window.matchMedia("(max-width: 700px)");

    if (!mediaQuery.matches) {
      return;
    }

    let animationFrame: number;

    let isTouching = false;
    let isHovering = false;

    const scrollSpeed = 0.45;

    const autoScroll = () => {
      if (!isTouching && !isHovering) {
        tabs.scrollLeft += scrollSpeed;

        /*
          When reaching the end,
          smoothly return to beginning.
        */

        if (
          tabs.scrollLeft + tabs.clientWidth >=
          tabs.scrollWidth - 2
        ) {
          tabs.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    const handleTouchStart = () => {
      isTouching = true;
    };

    const handleTouchEnd = () => {
      /*
        Small delay so manual swipe
        does not immediately fight auto-scroll.
      */
      setTimeout(() => {
        isTouching = false;
      }, 1200);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    tabs.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    tabs.addEventListener(
      "touchend",
      handleTouchEnd,
      { passive: true }
    );

    tabs.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    tabs.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    animationFrame = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrame);

      tabs.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      tabs.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      tabs.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      tabs.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      className="programs-section"
      id="programs"
    >
      <div className="programs-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="programs-header">

          <span className="programs-eyebrow">
            EXPLORE ACADEMIC FIELDS
          </span>

          <h2>
            Courses <span>Offered</span>
          </h2>

        </div>


        {/* =================================================
            CATEGORY TABS
        ================================================= */}

        <div
          className="program-tabs"
          ref={tabsRef}
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`program-tab ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="programs-divider"></div>


        {/* =================================================
            COURSE GRID
        ================================================= */}

        <div className="course-grid">

          {programs.map((program, index) => (

            <article
              className="course-card"
              key={`${activeCategory}-${index}`}
            >

              {/* CARD HEADER */}

              <div className="course-card-header">

                <h3>
                  {program.title}
                </h3>

                <span className="course-header-arrow">
                  <ArrowDown
                    size={18}
                    strokeWidth={1.7}
                  />
                </span>

              </div>


              {/* CARD BODY */}

              <div className="course-card-body">

                <p className="course-description">
                  {program.description}
                </p>


                {/* FEATURES */}

                <ul className="course-points">

                  {program.points.map(
                    (point, pointIndex) => (

                      <li key={pointIndex}>

                        <span className="point-dot"></span>

                        <span>
                          {point}
                        </span>

                      </li>

                    )
                  )}

                </ul>


                {/* APPLY BUTTON */}

                <a
                  href="#contact"
                  className="course-apply"
                >
                  <span>
                    Apply Now
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                  />
                </a>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="programs-bottom">

          <span>
            D.D. COLLEGE • DEHRADUN
          </span>

          <span className="programs-bottom-line"></span>

          <span>
            QUALITY EDUCATION • CAREER GROWTH
          </span>

        </div>

      </div>
    </section>
  );
}