import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

function Article() {
  // const [darkMode, setDarkMode] = useState(false);
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}data/db.json`);

        if (!response.ok) {
          throw new Error("مقاله یافت نشد");
        }

        const data = await response.json();
        const allArticles = data.articles;

        const foundArticle = allArticles.find(
          (art) => art.id === parseInt(params.id),
        );

        if (!foundArticle) {
          throw new Error("مقاله یافت نشد");
        }

        setArticle(foundArticle);

        // Related articles: بقیه مقالات به جز مقاله جاری
        const filtered = allArticles.filter(
          (art) => art.id !== parseInt(params.id),
        );
        const randomArticles = filtered
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setRelatedArticles(randomArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchArticle();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div>
        <Header />
        <main className="container py-20">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              در حال بارگذاری مقاله...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <main className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-8">
              <svg
                className="w-16 h-16 text-red-500 mx-auto mb-4"
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
              <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">
                خطا در بارگذاری
              </h2>
              <p className="text-red-600 dark:text-red-300 mb-6">{error}</p>
              <Link
                to="/"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <main className="min-h-screen">
        {article && (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 py-12 md:py-20">
              <div className="container">
                <div className="max-w-4xl mx-auto">
                  {/* Breadcrumb */}
                  <nav className="flex items-center space-x-2 space-x-reverse text-sm mb-6">
                    <Link
                      to="/"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      خانه
                    </Link>
                    <span className="text-gray-400">/</span>
                    <Link
                      to="/articles"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      مقالات
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900 dark:text-white">
                      مقاله جاری
                    </span>
                  </nav>

                  {/* Category Badge */}
                  {article.category && (
                    <div className="mb-6">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {article.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                    {article.author && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>{article.author}</span>
                      </div>
                    )}
                    {article.date && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{article.date}</span>
                      </div>
                    )}
                    {article.readTime && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{article.readTime} دقیقه مطالعه</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {article.img && (
              <div className="container -mt-10 md:-mt-16">
                <div className="max-w-5xl mx-auto">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            )}

            {/* Content Section */}
            <div className="container py-12 md:py-16">
              <div className="max-w-4xl mx-auto">
                {/* Description */}
                {article.description && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      {article.description}
                    </p>
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl max-w-none">
                  <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify whitespace-pre-line">
                    {article.content}
                  </div>
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      برچسب‌ها:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
              <div className="bg-gray-50 dark:bg-slate-900 py-16">
                <div className="container">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    مقالات مرتبط
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedArticles.map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        to={`/articles/${relatedArticle.id}`}
                      >
                        <ArticleCard {...relatedArticle} fullWidth={true} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Article;
