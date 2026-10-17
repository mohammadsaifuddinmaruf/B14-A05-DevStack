function Banner() {
  return (
    <section id="home" className="relative isolate mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-24">
      <div className="hero-orb absolute -right-16 top-16 -z-10 h-72 w-72 rounded-full" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-pink-600 sm:text-sm">Build. Ship. Grow.</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
            Build Your Ideal{' '}
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#technologies" className="brand-gradient rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 hover:-translate-y-0.5">
              Explore Technologies
            </a>
            <a href="#about" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-pink-400 hover:text-pink-600">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative rounded-[2rem] border border-white bg-white/70 p-3 shadow-2xl shadow-slate-200/70 sm:p-4">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img src="/src/assets/banner-stack.png" alt="A selection of development tools arranged as a stack" className="aspect-[4/3] w-full object-cover object-center" />
          </div>
          <span className="absolute -bottom-3 left-8 rounded-full border border-slate-100 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-md">Curate your toolkit</span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
