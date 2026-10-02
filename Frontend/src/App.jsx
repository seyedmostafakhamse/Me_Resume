// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import WorkDetail from "./pages/WorkDetail/WorkDetail.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

function App() {
  const [lenisInstance, setLenisInstance] = useState(null);

  // Soft Scroll Effect using Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <Header />
      {/* Scroll to top on route change */}
      <ScrollToTop lenis={lenisInstance} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/portfolio/:slug" element={<WorkDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
