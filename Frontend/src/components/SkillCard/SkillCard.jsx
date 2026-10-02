import React from "react";

function SkillCard({ title, desc, img, darkMode }) {
  return (
    <div
      className={`w-full h-48 py-9 pr-8 md:pr-12.5 rounded-2xl border-t-4 z-10
        ${
          darkMode
            ? "bg-skill-gradient-dark border-t-[#213774]"
            : "bg-skill-gradient-light border-t-gray-100"
        }`}
    >
      <div className="flex items-center gap-6.5 h-full">
        <img className="size-25 sm:size-30" src={img} alt={`${title} logo`} />

        <div className="mt-2.5 max-w-67">
          <h2 className="text-lg md:text-2xl lg:text-3xl">{title}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
