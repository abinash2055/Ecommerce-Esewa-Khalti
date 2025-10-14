import React, { useContext, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContext";
import { CartContext } from "../../../context/cart/CartContext";

const menuItems = [
  {
    name: "Home",
    href: "/",
    role: [0, 1],
  },
  {
    name: "About",
    href: "/",
    role: [0, 1],
  },
  {
    name: "Contact",
    href: "/",
    role: [0, 1],
  },
  {
    name: "Dashboard",
    href: "/admin",
    role: [1],
  },
];

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { cart, getCarts } = useContext(CartContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userMenuItems, setUserMenuItems] = React.useState([]);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToPath = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (user && user._id) {
      const filteredMenu = menuItems.filter((menu) =>
        menu.role.includes(user.role)
      );
      setUserMenuItems(filteredMenu);
      getCarts();
    }
  }, [user]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-xl z-50 transition-all duration-300 hover:shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="inline-flex items-center space-x-3 cursor-pointer group">
          <svg
            width="36"
            height="36"
            fill="url(#logoGradient)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF7E5F" />
                <stop offset="100%" stopColor="#FEB47B" />
              </linearGradient>
            </defs>
            <path d="M4,12,2,8,6,3H9a3,3,0,0,0,6,0h3l4,5-2,4-3-2V21H7V10Z" />
          </svg>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-orange-500 transition-colors duration-300">
            Tshirt
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden grow items-center lg:flex">
          <ul className="ml-12 inline-flex space-x-10">
            {userMenuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* User/Auth Buttons */}
        {isAuthenticated ? (
          <div className="hidden items-center space-x-4 lg:flex">
            <span className="text-gray-800 font-medium">{user.name}</span>
            {user.role === 0 && (
              <span
                className="relative flex cursor-pointer items-center rounded-full p-2 hover:bg-gray-100 transition-shadow duration-300 shadow-sm hover:shadow-md"
                onClick={() => navigate("/users/cart")}
              >
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white shadow-md animate-pulse">
                  {cart?.products?.length || 0}
                </span>
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </span>
            )}
            <button
              onClick={logout}
              type="button"
              className="rounded-xl border border-gray-800 px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden items-center space-x-4 lg:flex">
            <button
              onClick={() => goToPath("/signup")}
              type="button"
              className="rounded-xl px-5 py-2 text-sm font-semibold text-gray-800 bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-pink-600 hover:to-orange-500 shadow-md transition-all duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={() => goToPath("/login")}
              type="button"
              className="rounded-xl border border-gray-800 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 shadow-sm transition-all duration-300"
            >
              Log In
            </button>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300"
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right p-2 transition-transform transform scale-95 opacity-0 animate-scaleIn lg:hidden">
            <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      width="36"
                      height="36"
                      fill="url(#logoGradient)"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:scale-110"
                    >
                      <defs>
                        <linearGradient
                          id="logoGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#FF7E5F" />
                          <stop offset="100%" stopColor="#FEB47B" />
                        </linearGradient>
                      </defs>
                      <path d="M4,12,2,8,6,3H9a3,3,0,0,0,6,0h3l4,5-2,4-3-2V21H7V10Z"></path>
                    </svg>
                    <span className="font-bold text-gray-900 text-lg">
                      Tshirt
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <nav className="mt-6 grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:shadow-sm transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-5 space-y-3">
                  <button
                    onClick={() => goToPath("/signup")}
                    type="button"
                    className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 text-sm font-semibold shadow-md hover:from-pink-600 hover:to-orange-500 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => goToPath("/login")}
                    type="button"
                    className="w-full rounded-xl border border-gray-800 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 shadow-sm transition-all duration-300"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom animation for mobile menu */}
      <style>
        {`
      @keyframes scaleIn {
        0% { transform: scale(0.95); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-scaleIn { animation: scaleIn 0.25s ease-out forwards; }
    `}
      </style>
    </div>
  );
};

export default Navbar;
