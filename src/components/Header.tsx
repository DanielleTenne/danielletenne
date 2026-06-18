import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkBase = "hover:opacity-60";
  const activeClass = "underline decoration-1 underline-offset-4";

  return (
    <header className="border-b border-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/">
          <img src="/logo.svg" alt="Danielle Tenne" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-12 text-xs text-[#0a1b4d] md:flex">
          <Link to="/" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }}>Home</Link>
          <Link to="/" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }}>Art</Link>
          <Link to="/about" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }}>About</Link>
        </nav>
        <div className="hidden gap-4 text-xs md:flex">
          <a href="#" className="hover:opacity-60">Instagram</a>
          <a href="#" className="hover:opacity-60">LinkedIn</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1px] w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-[1px] w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1px] w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-border px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4 text-xs text-[#0a1b4d]">
            <Link to="/" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }} onClick={() => setMenuOpen(false)}>Art</Link>
            <Link to="/about" className={linkBase} activeProps={{ className: `${linkBase} ${activeClass}` }} onClick={() => setMenuOpen(false)}>About</Link>
          </nav>
          <div className="mt-4 flex flex-col gap-3 text-xs">
            <a href="#" className="hover:opacity-60">Instagram</a>
            <a href="#" className="hover:opacity-60">LinkedIn</a>
          </div>
        </div>
      )}
    </header>
  );
}

