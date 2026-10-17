const groups = {
  Product: ['Technologies', 'Stack Builder', 'Changelog'],
  Company: ['About us', 'Contact', 'Careers'],
  Legal: ['Privacy', 'Terms', 'License'],
};

function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_repeat(3,1fr)] md:gap-12">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <img src="/src/assets/logo.png" alt="" className="h-9 w-9" />
            <span className="text-brand-gradient">Dev Stack</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">A thoughtful toolkit for choosing the technologies behind your next great product.</p>
          <nav aria-label="Social links" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            <a href="https://github.com" className="hover:text-white">GitHub</a>
            <a href="https://twitter.com" className="hover:text-white">Twitter</a>
            <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
          </nav>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {links.map((link) => <li key={link}><a href="#" className="hover:text-white">{link}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Dev Stack. Built for better developer decisions.</span>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
