import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import works from "../../../public/data/worksData";

function WorkDetail() {
  const { slug } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);

  const allWorks = Object.values(works).flat();
  const work = allWorks.find((w) => w.slug === slug);

  if (!work) {
    return (
      <section className="container py-20 text-center">
        <p className="text-secondary-light dark:text-secondary-dark">
          نمونه‌کار مورد نظر پیدا نشد.
        </p>

        <Link to="/" className="inline-block mt-4 text-primary">
          بازگشت
        </Link>
      </section>
    );
  }

  return (
    <section className="container relative py-10">
      <div className="circle--blured top-[5%] left-[15%] z-0"></div>

      <div className="relative z-10 flex flex-col gap-4 mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3 text-right">
          <h1 className="text-3xl font-Morabba-Bold sm:text-4xl lg:text-5xl">
            {work.title}
          </h1>

          <p className="max-w-xl text-sm text-secondary-light dark:text-secondary-dark sm:text-base">
            {work.desc}
          </p>
           <p className="max-w-xl text-sm text-secondary-light dark:text-secondary-dark sm:text-base">
            {work.desc2}
          </p>
        </div>

        <a
          href={work.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-Morabba-Bold text-white transition-all duration-300 rounded-xl bg-primary hover:opacity-90 hover:scale-105 w-fit shrink-0"
        >
          <span>مشاهده وب‌سایت</span>

     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
  <circle cx="12" cy="12" r="3" />
</svg>
        </a>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {work.gallery.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedImg(img)}
            className="relative h-[140px] sm:h-[180px] md:h-[200px] overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt={`${work.title} ${idx + 1}`}
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/20"></div>
          </button>
        ))}
      </div>

      <div className="relative z-10 mt-10 text-center">
        <Link
          to="/portfolio"
          className="text-sm transition-colors text-secondary-light dark:text-secondary-dark hover:text-primary"
        >
          ← بازگشت به نمونه‌کارها
        </Link>
      </div>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <img
            src={selectedImg}
            alt="preview"
            className="object-contain max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            className="absolute text-white top-6 left-6 sm:right-8 sm:left-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default WorkDetail;
