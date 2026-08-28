import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_31%),radial-gradient(circle_at_84%_72%,rgba(37,99,235,0.24),transparent_30%)]"></div>
      <div aria-hidden="true" className="absolute -right-20 top-24 h-72 w-72 rounded-full border border-white/10"></div>
      <div className="container-max relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
                Open to Computer Science & IT opportunities
              </p>
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                Hi, I'm <span className="text-cyan-300">Adi Berisha</span>
              </h1>
              <p className="text-xl font-semibold text-slate-200 sm:text-2xl">
                Computer Science & Engineering Student
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                A near-graduate developer who combines full-stack development skills with hands-on experience in quality assurance, IT operations, and data-focused field work.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Get In Touch
              </a>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3 pt-3 sm:gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white sm:text-3xl">8.18/10</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">Current GPA</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white sm:text-3xl">4</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">Exams to graduate</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white sm:text-3xl">6+</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">Professional roles</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-300/30 via-primary-500/20 to-transparent blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-9">
                <div className="flex aspect-square items-center justify-center rounded-[1.45rem] bg-gradient-to-br from-primary-500 via-primary-600 to-cyan-500 shadow-inner shadow-white/10">
                  <div className="text-center">
                    <div className="text-7xl font-bold tracking-tighter text-white sm:text-8xl" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>AB</div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Portfolio</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-200">
                  <span>UBT College</span>
                  <span className="font-semibold text-cyan-200">CSE · Final stretch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
