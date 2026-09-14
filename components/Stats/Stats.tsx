import {
  Award,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";

import "./Stats.css";

const stats = [
  {
    number: "20+",
    label: "Years of Legacy",
    icon: Award,
  },
  {
    number: "5000+",
    label: "Alumni",
    icon: GraduationCap,
  },
  {
    number: "25+",
    label: "Programmes",
    icon: BookOpen,
  },
  {
    number: "2500+",
    label: "Success Stories",
    icon: Trophy,
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="stat-item"
              key={stat.label}
            >
              <div className="stat-icon-wrapper">
                <Icon
                  className="stat-icon"
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div className="stat-content">
                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}