import { useState } from 'react';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl leading-none">☰</span>
        </button>

        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <img src="/src/assets/logo.png" alt="" className="h-9 w-9" />
          <span className="hidden text-xl text-brand-gradient sm:inline">Dev Stack</span>
        </a>

        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-slate-200 bg-white p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-pink-600"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm font-semibold text-slate-600 hover:text-pink-600">Sign In</button>
          <button className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-200 hover:-translate-y-0.5">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
