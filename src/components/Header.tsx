"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-3 sm:py-4 shadow-lg"
          : "bg-transparent border-transparent py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40 flex items-center justify-between">
        <a
          href="#top"
          className="flex flex-col hover:opacity-80 transition-opacity min-w-0 pr-4"
        >
          <span className="font-display text-lg sm:text-xl font-medium tracking-tight text-white truncate">
            Sharath Chandra{" "}
            <span className="font-display italic font-normal text-gray-300">
              Kancherla
            </span>
          </span>

          <span className="small-label text-[8px] sm:text-[10px] text-gray-400 mt-0.5 sm:mt-1 truncate">
            EST. 2012 / HOLISTIC MENTOR
          </span>
        </a>

        <nav className="hidden gap-6 md:gap-10 sm:flex shrink-0" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-label text-gray-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden p-2 -mr-2 text-gray-300 hover:text-white transition-colors shrink-0"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute top-full left-0 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl sm:hidden animate-in fade-in slide-in-from-top-4 duration-200"
          aria-label="Primary mobile"
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="nav-label rounded-lg px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-blue-600 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}