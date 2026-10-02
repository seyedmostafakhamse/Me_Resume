import React from "react";
import { Link } from "react-router-dom";
import works from "../../../public/data/worksData";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

function Portfolio() {
  const allWorks = Object.values(works).flat();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-16 md:pt-24 bg-linear-to-t from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-Morabba-Bold  text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              نمونه کارها
            </h1>

            <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
              نمونه کارهای توسعه داده شده
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Count */}
        <div className="mb-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {allWorks.length} نمونه کار
          </p>
        </div>

        {/* Works Grid */}
        {allWorks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allWorks.map((work) => (
              <Link key={work.id} to={`/portfolio/${work.slug}`}>
                <PortfolioCard
                  title={work.title}
                  desc={work.desc}
                  img={work.cover}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              نمونه کاری یافت نشد
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              هنوز نمونه کاری ثبت نشده است.
            </p>
          </div>
        )}
      </div>

      <div className="py-16 bg-linear-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 md:py-24"></div>
    </main>
  );
}

export default Portfolio;
