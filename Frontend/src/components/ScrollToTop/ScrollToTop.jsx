// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ lenis }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0); // بالا رفتن سریع با Lenis
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, lenis]);

  return null;
}
