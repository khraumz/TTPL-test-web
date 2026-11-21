import { LogoIcon } from './LogoIcon';

export type PortalTab = 'simulation' | 'syllabus' | 'hardware' | 'people';

interface NavbarProps {
  onOpenPortal: (tab: PortalTab) => void;
}

export function Navbar({ onOpenPortal }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2.5 group">
          <LogoIcon className="w-7 h-7 text-[#00509E] transition-transform duration-200 group-hover:scale-105" />
          <span className="text-2xl font-medium tracking-tight text-[#081B33]">
            TTPL
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#overview"
            className="text-base text-slate-700 hover:text-[#00509E] font-medium transition-colors duration-200"
          >
            Overview
          </a>
          <button
            type="button"
            onClick={() => onOpenPortal('syllabus')}
            className="text-base text-slate-700 hover:text-[#00509E] font-medium transition-colors duration-200"
          >
            Practicum
          </button>
          <a
            href="#grid-modes"
            className="text-base text-slate-700 hover:text-[#00509E] font-medium transition-colors duration-200"
          >
            Switchgear
          </a>
          <button
            type="button"
            onClick={() => onOpenPortal('simulation')}
            className="text-base text-slate-700 hover:text-[#00509E] font-medium transition-colors duration-200"
          >
            Simulation
          </button>
          <button
            type="button"
            onClick={() => onOpenPortal('people')}
            className="text-base text-slate-700 hover:text-[#00509E] font-medium transition-colors duration-200"
          >
            People
          </button>
        </div>

        <button
          type="button"
          onClick={() => onOpenPortal('simulation')}
          className="bg-[#003973] text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-[#00509E] transition-colors duration-200"
        >
          Open Portal
        </button>
      </div>
    </nav>
  );
}
