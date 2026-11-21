import { ArrowRight } from 'lucide-react';
import { HERO_STANDARDS } from '../data/ttplData';
import type { PortalTab } from './Navbar';

interface HeroSectionProps {
  onOpenPortal: (tab: PortalTab) => void;
}

export function HeroSection({ onOpenPortal }: HeroSectionProps) {
  return (
    <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="relative w-full max-w-[88rem] mx-auto rounded-2xl overflow-hidden bg-[#E6F0FA]"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        <img
          src="/images/hero-hv-grid.jpg"
          alt="High voltage porcelain insulators and GIS switchgear busbars in TTPL laboratory"
          className="object-cover absolute inset-0 w-full h-full"
        />

        {/* Soft luminous scrim on left so dark typography remains crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/90 via-[#E6F0FA]/55 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle 50 Hz electrical signal trace along lower right */}
        <svg
          className="absolute bottom-8 right-10 w-64 h-16 opacity-35 pointer-events-none hidden lg:block"
          viewBox="0 0 260 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 32 Q 22 4, 44 32 T 88 32 T 132 32 T 176 32 T 220 32 T 260 32"
            stroke="#00509E"
            strokeWidth="2"
          />
          <path
            d="M0 32 Q 22 14, 44 32 T 88 32 T 132 32 T 176 32 T 220 32 T 260 32"
            stroke="#FFC72C"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-20 md:pt-36">
          <h1
            className="text-[#081B33] text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            High Voltage
            <br />
            Precision
          </h1>

          <p
            className="text-[#081B33]/75 text-base md:text-lg max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            An accredited FTUI electrical laboratory built for high-voltage testing,
            switchgear protection, and native power grid instrumentation.
          </p>

          <button
            type="button"
            onClick={() => onOpenPortal('simulation')}
            className="inline-flex items-center gap-3 bg-[#003973] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#00509E] transition-colors duration-200"
          >
            <span>Explore Lab</span>
            <span className="bg-white rounded-full p-2">
              <ArrowRight className="w-5 h-5 text-[#003973]" />
            </span>
          </button>

          <div className="mt-12 md:mt-24 w-full max-w-md overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 22s linear infinite;
              }
            `}</style>
            <div className="marquee-track">
              {[...HERO_STANDARDS, ...HERO_STANDARDS].map((brand, idx) => (
                <span
                  key={`${brand.name}-${idx}`}
                  className="mx-7 shrink-0 text-[#081B33]/60 whitespace-nowrap"
                  style={brand.style}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
