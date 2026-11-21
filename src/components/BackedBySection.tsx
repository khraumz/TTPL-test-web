import { ALUMNI_PARTNERS } from '../data/ttplData';

export function BackedBySection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-4">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <p className="text-[#081B33]/70 text-base leading-relaxed">
          Powering alumni at premier
          <br />
          utilities and global grid leaders.
        </p>

        <div className="md:col-span-3 overflow-hidden">
          <style>{`
            @keyframes backers-marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .backers-track {
              display: flex;
              width: max-content;
              animation: backers-marquee 30s linear infinite;
            }
          `}</style>
          <div className="backers-track">
            {[...ALUMNI_PARTNERS, ...ALUMNI_PARTNERS].map((partner, idx) => (
              <span
                key={`${partner.name}-${idx}`}
                className="mx-10 shrink-0 text-[#081B33]/50 whitespace-nowrap"
                style={partner.style}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
