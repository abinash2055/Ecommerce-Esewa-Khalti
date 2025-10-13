import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              width="34"
              height="34"
              fill="#000"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 hover:rotate-6"
            >
              <path d="M4,12,2,8,6,3H9a3,3,0,0,0,6,0h3l4,5-2,4-3-2V21H7V10Z" />
            </svg>
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
              TShirt<span className="text-indigo-500">Hub</span>
            </span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Return Policy",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative group transition-colors duration-300 hover:text-indigo-600"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: (
                  <path d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z" />
                ),
              },
              {
                icon: (
                  <path d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z" />
                ),
              },
              {
                icon: (
                  <path d="M8.00094 0.36C6.09 0.36 5.85 0.3688 5.1 0.4022C4.35 0.4374 3.84 0.5554 3.39 0.7296C2.92 0.9063 2.49 1.1835 2.14 1.5418C1.78 1.8936 1.51 2.3191 1.33 2.7888C1.16 3.2358 1.04 3.748 1 4.496C0.97 5.2484 0.96 5.4878 0.96 7.4009C0.96 9.3122 0.97 9.5516 1 10.3022C1.04 11.052 1.16 11.5633 1.33 12.0112C1.51 12.4741 1.75 12.8666 2.14 13.2582C2.53 13.6498 2.93 13.8909 3.39 14.0704C3.84 14.2446 4.35 14.3634 5.1 14.3978C5.85 14.4312 6.09 14.44 8.0009 14.44C9.9132 14.44 10.15 14.4312 10.9 14.3978C11.65 14.3626 12.16 14.2446 12.61 14.0704C13.08 13.8936 13.51 13.6164 13.86 13.2582C14.25 12.8666 14.49 12.4741 14.67 12.0112C14.84 11.5633 14.96 11.052 14.99 10.3022C15.03 9.5516 15.04 9.3122 15.04 7.4C15.04 5.4878 15.03 5.2484 14.99 4.4969C14.96 3.748 14.84 3.2358 14.67 2.7888C14.49 2.3191 14.22 1.8936 13.86 1.5418C13.51 1.1834 13.08 0.9062 12.61 0.7296C12.16 0.5554 11.65 0.4366 10.9 0.4022C10.15 0.3688 9.91 0.36 8.0009 0.36Z" />
                ),
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#27272A"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-indigo-600 transition-colors duration-300"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
