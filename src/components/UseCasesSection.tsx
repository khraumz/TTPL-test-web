import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LAB_DOMAIN_MODES } from '../data/ttplData';
import type { PortalTab } from './Navbar';

interface UseCasesSectionProps {
  onOpenPortal: (tab: PortalTab) => void;
}

export function UseCasesSection({ onOpenPortal }: UseCasesSectionProps) {
  const [activeId, setActiveId] = useState<'switchgear' | 'grid' | 'circuits'>('switchgear');
  const activeMode =
    LAB_DOMAIN_MODES.find((m) => m.id === activeId) ?? LAB_DOMAIN_MODES[0];

  return (
    <section id="grid-modes" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-[#00509E] text-sm font-medium mb-2">
            Lab. TTPL in Practice
          </p>
          <h2
            className="text-[#081B33] text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Grid modes
          </h2>
          <p className="text-[#081B33]/65 text-base leading-relaxed max-w-sm mb-10">
            Lab. TTPL supports three engineering domains for students, power researchers,
            and utilities needing disciplined switchgear, grounding, and dielectric testing.
          </p>

          <div className="border-t border-[#081B33]/10 max-w-sm">
            {LAB_DOMAIN_MODES.map((mode) => {
              const selected = mode.id === activeMode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveId(mode.id)}
                  className="w-full py-4 border-b border-[#081B33]/10 flex items-center justify-between text-left group transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        selected ? 'bg-[#FFC72C]' : 'bg-[#081B33]/20 group-hover:bg-[#00509E]'
                      }`}
                    />
                    <span
                      className={`text-base font-medium transition-colors duration-200 ${
                        selected ? 'text-[#003973]' : 'text-[#081B33]/65 group-hover:text-[#081B33]'
                      }`}
                    >
                      {mode.label}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#081B33]/45">
                    {mode.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column — large visual showcase card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[720px] bg-[#E6F0FA]">
          <img
            src={activeMode.image}
            alt={activeMode.title}
            className="object-cover absolute inset-0 w-full h-full transition-opacity duration-300"
          />

          {/* Top mist scrim so overlay heading & copy remain effortlessly legible */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#E6F0FA]/95 via-[#E6F0FA]/60 to-[#081B33]/25 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 p-10 md:p-12 flex flex-col justify-between min-h-[720px]">
            <div>
              <h3
                className="text-[#081B33] text-4xl md:text-5xl font-medium leading-tight mb-5"
                style={{ letterSpacing: '-0.03em' }}
              >
                {activeMode.title}
              </h3>
              <p className="text-[#081B33]/75 text-base max-w-md mb-8 leading-relaxed">
                {activeMode.description}
              </p>

              <button
                type="button"
                onClick={() => onOpenPortal(activeMode.targetTab)}
                className="inline-flex items-center gap-3 group"
              >
                <span className="w-9 h-9 rounded-full bg-white/85 backdrop-blur flex items-center justify-center group-hover:bg-[#FFC72C] transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-[#081B33]" />
                </span>
                <span className="text-[#081B33] text-base font-medium">
                  {activeMode.ctaLabel}
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-8">
              {activeMode.metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-4 py-1.5 rounded-full bg-white/85 backdrop-blur text-[#081B33] text-xs font-medium"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
