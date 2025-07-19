import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

// Desktop nav link
function NavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-1"
    >
      {text}
    </Link>
  );
}

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="flex items-center gap-1 bg-indigo-600 text-white font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700 px-3 py-1"
    >
      <Download size={16} />
      Resume
    </a>
  );
}

function MobileNavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="block text-gray-600 hover:text-indigo-600 font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-2"
    >
      {text}
    </Link>
  );
}

function MobileResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="flex items-center gap-1 bg-indigo-600 text-white font-medium transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700 px-3 py-2 block"
    >
      <Download size={16} />
      Resume
    </a>
  );
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 p-1"
        >
          Home
        </Link>

        <nav className="hidden md:flex flex-grow justify-around max-w-2xl items-center">
          <NavLink to="/education" text="Education" />
          <NavLink to="/experience" text="Experience" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/contact" text="Contact" />
          <ResumeButton />
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
        <MobileNavLink to="/education" text="Education" />
        <MobileNavLink to="/experience" text="Experience" />
        <MobileNavLink to="/projects" text="Projects" />
        <MobileNavLink to="/contact" text="Contact" />
        <MobileResumeButton />
      </div>
    </header>
  );
};

export default Header;
