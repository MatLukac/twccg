// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Domov", href: "" },
    { name: "Donio", href: "" },
    { name: "O projekte", href: "" },
    { name: "pravidla", href: "/twccg/rules" },
    { name: "Kontakt", href: "" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + text */}
          <div className="flex items-center flex-shrink-0 space-x-2">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="w-auto h-10"
                src={`${process.env.PUBLIC_URL}/materials/logo.png`}
                alt="Logo"
              />
              <span className="text-xl font-semibold tracking-wide text-gray-800">
                The Way of the Disciple
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
