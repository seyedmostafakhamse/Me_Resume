import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
className="container pt-0 pb-24"
>
      <h1 className="text-center text-5xl font-Morabba-Bold mb-5">
        ارتباط با <span className="text-primary">من</span>
      </h1>

      <p className="text-center text-slate-500 mb-14">
        خوشحال می‌شوم برای همکاری یا انجام پروژه با من در ارتباط باشید.
      </p>

      <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl p-10">

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-2xl" />
            <span>aakhalili021@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-2xl" />


<span style={{ direction: "ltr", unicodeBidi: "bidi-override" }}>
  0936 827 2668
</span>
          </div>

          <div className="flex items-center gap-4">
            <FaTelegramPlane className="text-primary text-2xl" />
            <a
              href="https://t.me/amirali_khalili8"
              target="_blank"
              className="hover:text-primary transition"
            >
              @amirali_khalili8
            </a>
          </div>

        </div>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/amirali-khalili"
            target="_blank"
            className="text-3xl hover:text-primary transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/amirali-khalili8/"
            target="_blank"
            className="text-3xl hover:text-primary transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;