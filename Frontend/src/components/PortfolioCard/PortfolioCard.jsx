import React from "react";

function PortfolioCard({ title, desc, img }) {
  return (
    <div className="cursor-pointer w-full">
      <div
        className="w-full max-w-sm mx-auto h-fit p-4 sm:p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transform transition-all duration-500"
      >
        {/* Card Img */}
        <div className="object-cover w-full h-40 sm:h-48 overflow-hidden rounded-2xl">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Card Texts */}
        <div className="flex flex-col justify-between mt-4 sm:mt-6 h-auto sm:h-20">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl tracking-tight font-Dana-DemiBold">
              {title}
            </h3>
            <p className="text-[12px] md:text-base line-clamp-2">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;