import React, { useState } from "react";

// Desktop nav link
function NavLink({ href, text }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-1"
    >
      {text}
    </a>
  );
}

// Mobile nav link
function MobileNavLink({ href, text, className = "" }) {
  return (
    <a
      href={href}
      className={`block text-gray-600 hover:text-indigo-600 font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-2 ${className}`}
    >
      {text}
    </a>
  );
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a
            href="#"
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-1"
          >
            MyPortfolio
          </a>
        </div>

        <nav className="hidden md:flex flex-grow justify-around max-w-2xl">
          <NavLink href="#" text="Home" />
          <NavLink href="#" text="Education" />
          <NavLink href="#" text="Experience" />
          <NavLink href="#" text="Contact" />
        </nav>

        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-2 rounded-md"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-4 6h4"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white mt-4 space-y-2 p-4 border-t border-gray-200 rounded-b-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <MobileNavLink href="#" text="Home" />
        <MobileNavLink href="#" text="Education" />
        <MobileNavLink href="#" text="Experience" />
        <MobileNavLink href="#" text="Contact" />
      </div>
    </header>
  );
};

export default Header;
