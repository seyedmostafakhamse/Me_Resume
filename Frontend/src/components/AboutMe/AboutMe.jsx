import React from "react";
import groupImg from "../../assets/images/Group 62.svg";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    percent: 85,
    icon: <FaPython className="text-yellow-500 text-2xl" />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Django",
    percent: 50,
    icon: <SiDjango className="text-green-600 text-2xl" />,
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Django REST Framework",
    percent: 70,
    icon: <SiDjango className="text-red-500 text-2xl" />,
    color: "from-red-500 to-rose-600",
  },
  {
    name: "JavaScript",
    percent: 60,
    icon: <SiJavascript className="text-yellow-400 text-2xl" />,
    color: "from-yellow-300 to-yellow-500",
  },
  {
    name: "React",
    percent: 35,
    icon: <FaReact className="text-cyan-400 text-2xl" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "HTML / CSS",
    percent: 90,
    icon: (
      <div className="flex gap-1">
        <FaHtml5 className="text-orange-500 text-2xl" />
        <FaCss3Alt className="text-blue-500 text-2xl" />
      </div>
    ),
    color: "from-orange-500 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    percent: 80,
    icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    color: "from-cyan-400 to-sky-500",
  },
  {
    name: "Git & GitHub",
    percent: 75,
    icon: <FaGitAlt className="text-orange-600 text-2xl" />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "PostgreSQL",
    percent: 65,
    icon: <SiPostgresql className="text-blue-600 text-2xl" />,
    color: "from-blue-500 to-indigo-600",
  },
];

function AboutMe() {
  return (
    <>
      {/* About */}
      <section className="container flex flex-col items-center gap-20 lg:flex-row lg:justify-between">

        <div className="w-full lg:w-1/2">
          <img
            className="w-full max-w-[420px] mx-auto hover:scale-105 transition duration-500"
            src={groupImg}
            alt="About"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="flex gap-3 text-4xl sm:text-5xl lg:text-7xl font-Morabba-Bold">
            <span>درباره</span>
            <span className="text-primary">من</span>
          </h1>

          <p className="leading-9 text-[15px] lg:text-lg text-secondary-light dark:text-secondary-dark">
            توسعه‌دهنده بک‌اند با تجربه در طراحی API، توسعه سرویس‌های مقیاس‌پذیر،
            طراحی نرم‌افزار و پیاده‌سازی پروژه‌های تحت وب. علاقه‌مند به یادگیری
            تکنولوژی‌های جدید و ساخت محصولات باکیفیت.
          </p>
        </div>

      </section>

      {/* Skills */}

      <section className="container mt-28 relative">

        <div className="circle--blured top-0 left-1/4 z-0"></div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Morabba-Bold mb-14">
          مهارت‌ها
        </h1>

        <div className="relative z-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-8 space-y-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group transition-all duration-300 hover:translate-x-2"
            >

              <div className="flex items-center justify-between mb-3">

                <div className="flex items-center gap-3">

                  {skill.icon}

                  <span className="font-Dana-Medium text-lg">
                    {skill.name}
                  </span>

                </div>

                <span className="bg-primary text-white rounded-full px-4 py-1 text-sm font-bold shadow">
                  {skill.percent}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-[1800ms] ease-out group-hover:brightness-110`}
                  style={{
                    width: `${skill.percent}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default AboutMe;