import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext.jsx";

function Header({}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "خانه", path: "/" },
    { name: "مقالات", path: "/articles" },
    { name: "نمونه کارها", path: "/portfolio" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl "
            : "py-4 md:py-6 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-xl"
        } border-b border-slate-200 dark:border-slate-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-lg font-medium transition-all relative group ${
                        location.pathname === link.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full ${
                          location.pathname === link.path ? "w-full" : ""
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Theme Toggle Button */}
              <button
                onClick={() => toggleTheme()}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="تغییر تم"
              >
                <div className="inline-block dark:hidden text-gray-700">
                  <FaMoon className="text-xl" />
                </div>
                <div className="hidden dark:inline-block">
                  <FaSun className="text-xl" />
                </div>
              </button>
            </nav>

            {/* Logo */}
            {/* <Link
              to="/"
              className="flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                لوگو
              </span>
            </Link> */}

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => toggleTheme()}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="تغییر تم"
              >
                <div className="inline-block dark:hidden text-gray-700">
                  <FaMoon />
                </div>
                <div className="hidden dark:inline-block ">
                  <FaSun />
                </div>
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all hover:scale-110 active:scale-95"
                aria-label="منوی موبایل"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/2 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85%] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                لوگو
              </span>
            </div>

            {/* Mobile Navigation */}
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                        location.pathname === link.path
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-17 md:h-21"></div>
    </>
  );
}

export default Header;
