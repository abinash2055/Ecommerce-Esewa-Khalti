import React from "react";

const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-12 text-gray-200">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-auto p-8">
            <a href="#" className="flex items-center">
              <svg
                width="40"
                height="46"
                fill="url(#logoGradient)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF7E5F" />
                    <stop offset="100%" stopColor="#FEB47B" />
                  </linearGradient>
                </defs>
                <path d="M4,12,2,8,6,3H9a3,3,0,0,0,6,0h3l4,5-2,4-3-2V21H7V10Z"></path>
              </svg>
              <span className="ml-4 text-2xl font-bold text-white">Tshirt</span>
            </a>
          </div>

          {/* Links */}
          <div className="w-auto p-8">
            <ul className="-m-3 flex flex-wrap items-center gap-6">
              <li className="p-1">
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="p-1">
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li className="p-1">
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Return Policy
                </a>
              </li>
              <li className="p-1">
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-auto p-8 flex gap-3">
            {/* Facebook */}
            <a href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"></path>
                </svg>
              </div>
            </a>

            {/* Twitter */}
            <a href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"></path>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
