import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
        setFilteredArticles(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles by search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (article.description &&
            article.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())),
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, articles]);

  return (
    <div>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 bg-linear-to-t from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-Morabba-Bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                مقالات و نوشته‌ها
              </h1>
              <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
                جدیدترین مطالب، آموزش‌ها و نکات کاربردی را در اینجا بخوانید
              </p>

              {/* Search Box */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجو در مقالات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 text-gray-900 transition-colors bg-white border-2 border-gray-200 rounded-full outline-none pr-14 dark:bg-slate-800 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white"
                  />
                  <svg
                    className="absolute w-6 h-6 text-gray-400 -translate-y-1/2 right-5 top-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          {/* Articles Count */}
          <div className="mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              {filteredArticles.length} مقاله
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 mb-4 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                در حال بارگذاری مقالات...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto">
              <div className="p-8 text-center border-2 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-xl">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h2 className="mb-2 text-2xl font-bold text-red-700 dark:text-red-400">
                  خطا در بارگذاری
                </h2>
                <p className="text-red-600 dark:text-red-300">{error}</p>
              </div>
            </div>
          )}

          {/* No Results */}
          {!loading && !error && filteredArticles.length === 0 && (
            <div className="py-20 text-center">
              <svg
                className="w-24 h-24 mx-auto mb-4 text-gray-300 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                مقاله‌ای یافت نشد
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                متأسفانه مقاله‌ای با این جستجو پیدا نشد.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                نمایش همه مقالات
              </button>
            </div>
          )}

          {/* Articles Grid */}
          {!loading && !error && filteredArticles.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link key={article.id} to={`/articles/${article.id}`}>
                  <ArticleCard
                    title={article.title}
                    desc={article.description || article.excerpt}
                    img={article.image || article.img}
                    readTime={article.readTime}
                    author={article.author}
                    fullWidth={true}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="py-16 bg-linear-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 md:py-24`"></div>
      </main>
    </div>
  );
}

export default Articles;
