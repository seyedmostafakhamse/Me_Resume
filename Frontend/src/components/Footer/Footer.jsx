import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 dark:bg-slate-950 border border-t-slate-300 dark:border-t-slate-600 dark:text-slate-200 border-x-0 border-b-0">
      <div className="mx-auto w-full max-w-7x p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <span className="text-heading self-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
ممنون که تا اینجا اومدی</span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                صفحات
              </h2>
              <ul className="text-body font-medium space-y-3">
                <li className="">
                  <Link to={"/"} className="hover:underline">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/articles"}
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    مقالات
                  </Link>
                </li>
                <li>
            
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                راه های ارتباطی
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4 hover:text-sky-600 dark:hover:text-sky-400">
                  <a
                    href="https://github.com/amirali-khalili"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li className="hover:text-sky-600 dark:hover:text-sky-400">
                  <a
                    href="https://www.linkedin.com/in/amirali-khalili8/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

  
      </div>
    </footer>
  );
};

export default Footer;
