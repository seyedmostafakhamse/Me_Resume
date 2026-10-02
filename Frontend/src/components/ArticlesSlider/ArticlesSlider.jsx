import React, { useEffect, useState, useRef } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ArticlesSlider({}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Get Articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}data/db.json`);

        if (!response.ok) {
          throw new Error("خطا در دریافت مقالات");
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying && articles.length > 0) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, articles.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleArticles = () => {
    if (articles.length === 0) return [];

    const visible = [];
    for (let i = 0; i < 1; i++) {
      const index = (currentIndex + i) % articles.length;
      visible.push(articles[index]);
    }
    return visible;
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              در حال بارگذاری مقالات...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16">
        <div className="container">
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-8 text-center">
            <p className="text-red-600 dark:text-red-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  const visibleArticles = getVisibleArticles();

  return (
    <section className="py-16 md:py-24   dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-3">
              آخرین مقالات
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              جدیدترین نوشته‌ها و مطالب آموزشی
            </p>
          </div>

          <Link
            to="/articles"
            className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            مشاهده همه
            <FaChevronLeft />
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative" ref={sliderRef}>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all hover:scale-110 active:scale-95"
            aria-label="قبلی"
          >
            <FaChevronRight />
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all hover:scale-110 active:scale-95"
            aria-label="بعدی"
          >
            <FaChevronLeft />
          </button>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {visibleArticles.map((article, index) => (
              <div
                key={`${article.id}-${index}`}
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <Link to={`/articles/${article.id}`}>
                  <ArticleCard
                    title={article.title}
                    desc={article.description || article.excerpt}
                    img={article.image || article.img}
                    readTime={article.readTime}
                    author={article.author}
                    fullWidth={true}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all active:scale-95"
            >
              <FaChevronRight />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all active:scale-95"
            >
              <FaChevronLeft />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-blue-500"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
              }`}
              aria-label={`اسلاید ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Mobile */}
        <div className="flex md:hidden justify-center mt-8">
          <Link
            to="/articles"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            مشاهده همه مقالات
            <FaChevronLeft />
          </Link>
        </div>
      </div>

      {/* Keyframes for animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default ArticlesSlider;
