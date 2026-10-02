import React from "react";
import { FaDownload } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import TypingEffect from "../TypingEffect/TypingEffect";
import rez from "../../assets/images/Portfolio/AmirAliKhalili.pdf";
import me from "../../assets/images/Portfolio/me.webp"
function Hero() {
  const skills = ["گرافیست", "متخصص هوش مصنوعی", "موشن گرافیست", "ui design"];

  return (
    <section id="hero" className="z-10 pt-15">
      <div className="flex justify-center items-center lg:justify-between flex-col-reverse lg:flex-row min-h-125 w-auto md:mx-auto">
        {/* Name & Desc & Skills */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] space-y-8 sm:space-y-10 py-15 font-Morabba-Bold">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">
            من سید مصظفی خمسه هستم
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-500 ">
            <TypingEffect
              skills={skills}
              typingSpeed={100}
              pauseDuration={2000}
            />
          </h2>
          <p className="max-w-[80%] text-xl md:text-2xl lg:text-xl text-slate-400 dark:text-slate-500 font-Dana-Regular">
        برنامه نویس اپلیکشن و طراح سایت  با تمرکز بر طراحی مدرن، ریسپانسیو و تجربه کاربری حرفه‌ای.


          </p>
         <a
  href={rez}
  download="AmirAli-Khalili-Resume.png"
  className="flex items-center gap-2 rounded-2xl text-[18px] py-2 px-10 bg-primary hover:bg-blue-600 cursor-pointer text-white font-Dana-Medium transition-colors"
>
  دانلود رزومه
  <FaDownload />
</a>
<button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="rounded-2xl text-[18px] py-3 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
>
  ارتباط با من
</button>
        </div>

        {/* Picture */}
        <div className="h-fit w-[70%] lg:w-[40%]  bg-primary dark:bg-slate-800 rounded-4xl border border-slate-200 dark:border-slate-700 shadow-2xl box--shadow--effect">
          <img
            className="  w-full rounded-4xl"
            src={me}
              alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
