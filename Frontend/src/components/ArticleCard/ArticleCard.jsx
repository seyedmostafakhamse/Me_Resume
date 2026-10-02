import React from "react";

function ArticleCard({ title, desc, img, readTime, author, fullWidth }) {
  return (
    <div className="cursor-pointer">
      <div
        className={`${
          fullWidth ? "w-full" : "w-66 md:w-76 lg:w-96"
        } h-108  p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transform transition-all duration-500 `}
      >
        {/* Card Img */}
        <div className="object-cover w-full h-48 overflow-hidden rounded-2xl">
          <img src={img} alt="" />
        </div>

        {/* Card Texts */}
        <div className="flex flex-col justify-between mt-6 h-40">
          <div className="space-y-2">
            <h3 className="text-xl tracking-tight md:text-2xl font-Dana-DemiBold">
              {title}
            </h3>
            <p className="text-[12px] md:text-base line-clamp-2">{desc}</p>
          </div>
          {/* Meta Information */}
          <div className="flex gap-3 text-[12px] md:text-base text-gray-600 dark:text-gray-400 mt-5">
            
            <span className="flex items-end md:items-center gap-1">
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
              {author && `${author}`}
            </span>

            <span className="flex items-end md:items-center gap-1">
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
              {readTime && `${readTime} دقیقه مطالعه`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
