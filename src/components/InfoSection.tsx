import { ArrowRight } from 'lucide-react';
import type { PortalTab } from './Navbar';

interface InfoSectionProps {
  onOpenPortal: (tab: PortalTab) => void;
}

export function InfoSection({ onOpenPortal }: InfoSectionProps) {
  return (
    <section id="overview" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2
              className="text-[#081B33] text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Meet Lab. TTPL.
            </h2>
            <button
              type="button"
              onClick={() => onOpenPortal('syllabus')}
              className="inline-flex items-center gap-3 bg-[#003973] text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#00509E] transition-colors duration-200"
            >
              <span>Discover syllabus</span>
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-[#003973]" />
              </span>
            </button>
          </div>

          <p className="text-[#081B33]/70 text-2xl md:text-3xl leading-relaxed">
            Laboratorium Tegangan Tinggi dan Pengukuran Listrik turns power engineering
            theory into calibrated grid, switchgear, and dielectric testing.
          </p>
        </div>

        {/* Row 2 — 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 (spans 2 cols on lg) */}
          <div
            className="sm:col-span-2 rounded-2xl relative overflow-hidden bg-[#E6F0FA]"
            style={{
              backgroundImage: "url('/images/card-dielectric.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#E6F0FA]/85 via-[#E6F0FA]/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 p-7 min-h-80 flex flex-col justify-between">
              <h3
                className="text-[#081B33] text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Dielectrics that endure
              </h3>
              <p className="text-[#081B33]/75 text-base max-w-xs">
                Execute AC, DC, and 1.2/50 μs Marx impulse breakdown tests across air,
                transformer oil, and solid insulators.
              </p>
            </div>
          </div>

          {/* Card 2 — TTPL Deep Blue */}
          <div className="bg-[#003973] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <div>
              <span className="block w-7 h-0.5 bg-[#FFC72C] mb-4" aria-hidden="true" />
              <h3
                className="text-white text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Always calibrated,
                <br />
                always grid-ready.
              </h3>
            </div>
            <p className="text-white/70 text-base">
              Measure 3-phase power quality, harmonics, and IEEE 81 3-point
              Fall-of-Potential earthing with Fluke and Hioki precision sets.
            </p>
          </div>

          {/* Card 3 — TTPL Dark Switchgear Navy */}
          <div className="bg-[#081B33] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <div>
              <span className="block w-7 h-0.5 bg-[#00509E] mb-4" aria-hidden="true" />
              <h3
                className="text-white text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Switchgear
                <br />
                interlocked
              </h3>
            </div>
            <p className="text-white/70 text-base">
              Master Faraday cage safety interlocks, earthing discharge rods, and
              protection coordination across RL, IDP, and T3 sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
