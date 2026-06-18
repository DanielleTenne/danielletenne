import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="border-b border-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-[11px] font-bold leading-tight tracking-wide">
          DANIELLE<br />TENNE
        </Link>
        <nav className="hidden gap-12 text-xs text-[#0a1b4d] md:flex">
          <Link to="/" className="hover:opacity-60">Home</Link>
          <Link to="/" className="hover:opacity-60">Art</Link>
          <Link to="/about" className="hover:opacity-60">About</Link>
        </nav>
        <div className="hidden gap-4 text-xs md:flex">
          <a href="#" className="hover:opacity-60">Instagram</a>
          <a href="#" className="hover:opacity-60">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}
