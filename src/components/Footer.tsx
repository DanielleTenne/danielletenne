import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[#0a1b4d] pb-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs md:flex-row">
        <p className="opacity-70">© 2025 Danielle Tenne</p>
        <nav className="flex gap-6">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <Link to="/" className="hover:opacity-70">Art</Link>
          <Link to="/about" className="hover:opacity-70">About</Link>
        </nav>
        <div className="flex flex-col items-end gap-1">
          <a href="#" className="hover:opacity-70">LinkedIn</a>
          <a href="#" className="hover:opacity-70">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
