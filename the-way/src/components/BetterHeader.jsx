// src/components/Header.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Domov", to: "/" },
    {
      name: "Donio",
      to: "https://donio.sk/pribeh/12863?utm_source=copylink&utm_medium=socialshare&utm_campaign=share_button&utm_content=bb0aaf01-1fc2-422e-9eff-0d89f7d13370",
      external: true,
    },
    { name: "Pravidlá", to: "/rules" },
    { name: "Články", to: "/articles" },
    { name: "Kontakt", to: "/contact" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle navbar style after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = scrolled
    ? "font-medium text-[#2b1d14]/80 hover:text-[#2b1d14] transition-colors"
    : "font-medium text-[#f5f0e6]/90 hover:text-[#caa45b] transition-colors";

  const mobileLinkClass = scrolled
    ? "block rounded-xl px-3 py-2 text-base font-medium text-[#2b1d14]/80 hover:bg-black/5 hover:text-[#2b1d14] transition-colors"
    : "block rounded-xl px-3 py-2 text-base font-medium text-[#f5f0e6]/90 hover:bg-white/10 hover:text-[#caa45b] transition-colors";

  // ✅ Swap logo depending on navbar state:
  // - Top (translucent): transparent_yellowish.png
  // - Scrolled (solid):   transparent_brown.png
  const logoSrc = scrolled
    ? `${process.env.PUBLIC_URL}/materials/trasnparent_brown.png`
    : `${process.env.PUBLIC_URL}/materials/transparent_yellowish.png`;

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        !scrolled
          ? "bg-transparent backdrop-blur-md"
          : "bg-[#FCF5DC] shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
      ].join(" ")}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="w-auto scale-105 h-11"
                src={logoSrc}
                alt="Logo"
              />
              <span
                className={[
                  "text-xl font-semibold tracking-wide transition-colors duration-300",
                  scrolled ? "text-[#2b1d14]" : "text-[#F6E9CE]",
                ].join(" ")}
              >
                The Way of the Disciple
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className={desktopLinkClass}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link key={item.name} to={item.to} className={desktopLinkClass}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={[
                "focus:outline-none transition-colors",
                scrolled
                  ? "text-[#2b1d14]/80 hover:text-[#2b1d14]"
                  : "text-[#f5f0e6]/90 hover:text-[#caa45b]",
              ].join(" ")}
              aria-label="Toggle menu"
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
        <div
          className={[
            "md:hidden border-t transition-colors",
            scrolled
              ? "bg-[#FCF5DC] border-black/10"
              : "bg-[#2b1d14]/35 backdrop-blur-md border-white/10",
          ].join(" ")}
        >
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className={mobileLinkClass}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
