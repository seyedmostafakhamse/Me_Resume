import React, { useState } from "react";
import { Link } from "react-router-dom";
import works from "../../../public/data/worksData";

function PortfolioSection() {
  const [activeCategory] = useState("religious");

  // فقط نمونه‌کارهای با id های 1 تا 3
  const activeWorks = (works[activeCategory] || []).filter(
    (work) => work.id >= 1 && work.id <= 3
  );

  return (
    <section className="container relative py-10">
      <div className="circle--blured top-[10%] right-[10%] z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-Morabba-Bold sm:text-5xl lg:text-6xl">
          نمونه‌کارها
        </h1>
        <span className="block h-1 w-28 rounded-full bg-gradient-to-r from-primary to-transparent"></span>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {activeWorks.map((work) => (
          <Link
            to={`/portfolio/${work.slug}`}
            key={work.id}
            className="group relative h-[300px] overflow-hidden rounded-2xl shadow-lg block"
          >
            <img
              src={work.cover}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-primary/60 transition-all duration-300"></div>

            <div className="absolute bottom-0 right-0 left-0 p-5 text-right">
              <h3 className="text-lg font-Morabba-Bold text-white sm:text-xl">
                {work.title}
              </h3>

              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {work.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative flex items-center justify-center z-50 mt-12">
        <Link
          to="/portfolio"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-Morabba-Bold text-white transition-all duration-300 rounded-xl bg-primary hover:opacity-90 hover:scale-105 w-fit"
        >
          <span>مشاهده نمونه کارها</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioSection;