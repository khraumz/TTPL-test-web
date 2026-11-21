import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  BookOpen,
  Check,
  Copy,
  Cpu,
  ExternalLink,
  ShieldCheck,
  Users,
  X,
  Zap,
} from 'lucide-react';
import {
  BATCH_2024_ASSISTANTS,
  INSTRUMENTS,
  SYLLABUS_TRACKS,
} from '../data/ttplData';
import type { PortalTab } from './Navbar';

interface LabExplorerModalProps {
  isOpen: boolean;
  activeTab: PortalTab;
  onChangeTab: (tab: PortalTab) => void;
  onClose: () => void;
}

export function LabExplorerModal({
  isOpen,
  activeTab,
  onChangeTab,
  onClose,
}: LabExplorerModalProps) {
  const [simMode, setSimMode] = useState<'hv' | 'fop'>('hv');
  const [hvVoltage, setHvVoltage] = useState(240);
  const [hvGap, setHvGap] = useState(6.0);
  const [flashTrigger, setFlashTrigger] = useState(0);

  const [soilRho, setSoilRho] = useState(85);
  const [rodLen, setRodLen] = useState(2.5);
  const [probePct, setProbePct] = useState(61.8);

  const [trackKey, setTrackKey] = useState<'t3' | 'idp' | 'rl'>('t3');
  const [copied, setCopied] = useState(false);

  const hvCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fopCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // IEC 60052 Sphere-Gap Canvas
  useEffect(() => {
    if (!isOpen || activeTab !== 'simulation' || simMode !== 'hv') return;
    const canvas = hvCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Dark precision lab background
    ctx.fillStyle = '#081B33';
    ctx.fillRect(0, 0, w, h);

    // Subtle graticule
    ctx.strokeStyle = 'rgba(230, 240, 250, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const field = hvVoltage / hvGap;
    const isBreakdown = field >= 30;
    const cy = h / 2;
    const gapPx = 28 + (hvGap / 15) * 140;
    const leftX = w / 2 - gapPx / 2 - 44;
    const rightX = w / 2 + gapPx / 2 + 44;

    // HV stems
    ctx.strokeStyle = '#9FB3C8';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(40, cy);
    ctx.lineTo(leftX, cy);
    ctx.moveTo(rightX, cy);
    ctx.lineTo(w - 40, cy);
    ctx.stroke();

    // Electric field lines
    for (let i = -2; i <= 2; i++) {
      ctx.strokeStyle = isBreakdown
        ? 'rgba(255, 199, 44, 0.45)'
        : 'rgba(78, 161, 243, 0.25)';
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(leftX + 36, cy + i * 9);
      ctx.quadraticCurveTo(w / 2, cy + i * (18 + hvGap), rightX - 36, cy + i * 9);
      ctx.stroke();
    }

    // Left & Right Brass/Steel Spheres
    [leftX, rightX].forEach((sx, index) => {
      const grad = ctx.createRadialGradient(sx - 10, cy - 12, 4, sx, cy, 40);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.35, index === 0 ? '#FFC72C' : '#9FB3C8');
      grad.addColorStop(1, '#1E3A5F');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sx, cy, 38, 0, Math.PI * 2);
      ctx.fill();
    });

    // Breakdown flashover arc
    if (isBreakdown || flashTrigger > 0) {
      const x1 = leftX + 38;
      const x2 = rightX - 38;
      ctx.strokeStyle = isBreakdown ? '#FFC72C' : '#4EA1F3';
      ctx.lineWidth = isBreakdown ? 3 : 1.5;
      ctx.beginPath();
      ctx.moveTo(x1, cy);
      const steps = 9;
      for (let s = 1; s < steps; s++) {
        const px = x1 + ((x2 - x1) * s) / steps;
        const jitter =
          Math.sin(s * 2.7 + flashTrigger * 1.9 + hvVoltage) * (isBreakdown ? 18 : 6);
        ctx.lineTo(px, cy + jitter);
      }
      ctx.lineTo(x2, cy);
      ctx.stroke();
    }

    // Labels
    ctx.fillStyle = '#E6F0FA';
    ctx.font = '500 12px Inter, sans-serif';
    ctx.fillText(`HV SOURCE (${hvVoltage} kVpk)`, 36, 30);
    ctx.fillText(`GROUNDED SPHERE · d = ${hvGap.toFixed(1)} cm`, w - 215, 30);
    ctx.fillStyle = isBreakdown ? '#FFC72C' : '#4EA1F3';
    ctx.fillText(
      isBreakdown
        ? `FLASHOVER: E = ${field.toFixed(1)} kV/cm ≥ 30.0 kV/cm`
        : `WITHSTAND: E = ${field.toFixed(1)} kV/cm < 30.0 kV/cm`,
      36,
      h - 22
    );
  }, [isOpen, activeTab, simMode, hvVoltage, hvGap, flashTrigger]);

  // IEEE 81 3-Point Fall-of-Potential Canvas
  useEffect(() => {
    if (!isOpen || activeTab !== 'simulation' || simMode !== 'fop') return;
    const canvas = fopCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = '#081B33';
    ctx.fillRect(0, 0, w, h);

    const D = 40;
    const radius = 0.008;
    const trueRe =
      (soilRho / (2 * Math.PI * rodLen)) * (Math.log((4 * rodLen) / radius) - 1);

    const calcRx = (xMeters: number) => {
      const clamped = Math.max(1.5, Math.min(D - 1.5, xMeters));
      const bias =
        ((clamped / D - 0.618) * 14 +
          Math.pow((clamped - 24.72) / 14, 3) * 18) *
        0.01;
      return Math.max(1, trueRe * (1 + bias));
    };

    const padL = 56;
    const padR = 24;
    const padT = 28;
    const padB = 36;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;
    const maxR = Math.max(40, trueRe * 1.45);

    // Plateau 52% - 72% zone
    const x52 = padL + 0.52 * plotW;
    const x72 = padL + 0.72 * plotW;
    ctx.fillStyle = 'rgba(255, 199, 44, 0.10)';
    ctx.fillRect(x52, padT, x72 - x52, plotH);

    // Axes
    ctx.strokeStyle = 'rgba(230, 240, 250, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, h - padB);
    ctx.lineTo(w - padR, h - padB);
    ctx.stroke();

    // Theoretical true R_E line
    const yTrue = padT + plotH * (1 - trueRe / maxR);
    ctx.strokeStyle = 'rgba(78, 161, 243, 0.55)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(padL, yTrue);
    ctx.lineTo(w - padR, yTrue);
    ctx.stroke();
    ctx.setLineDash([]);

    // FOP S-Curve
    ctx.strokeStyle = '#FFC72C';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let pct = 5; pct <= 95; pct += 1) {
      const xm = (pct / 100) * D;
      const rx = calcRx(xm);
      const px = padL + (pct / 100) * plotW;
      const py = padT + plotH * (1 - Math.min(maxR, rx) / maxR);
      if (pct === 5) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Live Probe P marker
    const xLive = (probePct / 100) * D;
    const rxLive = calcRx(xLive);
    const markerX = padL + (probePct / 100) * plotW;
    const markerY = padT + plotH * (1 - Math.min(maxR, rxLive) / maxR);

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(markerX, markerY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#00509E';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#E6F0FA';
    ctx.font = '500 12px Inter, sans-serif';
    ctx.fillText(`IEEE 81 FOP PLATEAU (52%–72%)`, x52 - 12, padT + 16);
    ctx.fillText(
      `True R_E = ${trueRe.toFixed(2)} Ω  |  Probe R(${xLive.toFixed(1)} m) = ${rxLive.toFixed(2)} Ω`,
      padL,
      h - 10
    );
  }, [isOpen, activeTab, simMode, soilRho, rodLen, probePct]);

  if (!isOpen) return null;

  const currentField = hvVoltage / hvGap;
  const breakdownVoltage = 30 * hvGap;
  const trueRe =
    (soilRho / (2 * Math.PI * rodLen)) * (Math.log((4 * rodLen) / 0.008) - 1);
  const xMeters = (probePct / 100) * 40;
  const fopBias =
    ((probePct / 100 - 0.618) * 14 + Math.pow((xMeters - 24.72) / 14, 3) * 18) *
    0.01;
  const measuredRx = Math.max(1, trueRe * (1 + fopBias));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('laboratorium.ttpl@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#081B33]/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="TTPL Laboratory Digital Portal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F5F5F5] text-[#081B33] shadow-2xl border border-[#081B33]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Portal Header */}
        <div className="sticky top-0 z-10 bg-[#F5F5F5]/95 backdrop-blur px-6 md:px-8 py-5 border-b border-[#081B33]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/ttpl-logo.png"
              alt="Lab TTPL FTUI"
              className="w-9 h-9 object-contain"
            />
            <div>
              <p className="text-xs font-medium text-[#00509E] uppercase tracking-wider">
                Laboratorium TTPL · DTE FTUI
              </p>
              <h2
                className="text-xl font-medium text-[#081B33]"
                style={{ letterSpacing: '-0.02em' }}
              >
                Laboratory Engineering Portal
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {(
              [
                { id: 'simulation', label: 'Simulation', icon: Zap },
                { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
                { id: 'hardware', label: 'Hardware', icon: Cpu },
                { id: 'people', label: 'People & Desk', icon: Users },
              ] as const
            ).map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onChangeTab(id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-[#003973] text-white'
                      : 'bg-white text-[#081B33]/75 hover:text-[#081B33]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close portal"
              className="ml-2 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#081B33] hover:bg-[#FFC72C] transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Portal Body */}
        <div className="p-6 md:p-8">
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl font-medium text-[#081B33]"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Interactive Physics Bench
                  </h3>
                  <p className="text-sm text-[#081B33]/65">
                    Verify IEC 60052 air dielectric breakdown and IEEE 81 grounding curves before entering the HV cage.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSimMode('hv')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      simMode === 'hv'
                        ? 'bg-[#00509E] text-white'
                        : 'bg-white text-[#081B33]/70 hover:text-[#081B33]'
                    }`}
                  >
                    Sphere-Gap HV (IEC 60052)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimMode('fop')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      simMode === 'fop'
                        ? 'bg-[#00509E] text-white'
                        : 'bg-white text-[#081B33]/70 hover:text-[#081B33]'
                    }`}
                  >
                    3-Point Grounding (IEEE 81)
                  </button>
                </div>
              </div>

              {simMode === 'hv' ? (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                  <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-[#081B33]">
                    <canvas
                      ref={hvCanvasRef}
                      width={580}
                      height={300}
                      className="w-full h-auto block"
                    />
                  </div>

                  <div className="lg:col-span-2 bg-white rounded-2xl p-6 space-y-5">
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span>Applied Peak Voltage</span>
                        <span className="text-[#00509E]">{hvVoltage} kV</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={500}
                        step={10}
                        value={hvVoltage}
                        onChange={(e) => setHvVoltage(Number(e.target.value))}
                        className="w-full accent-[#00509E]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span>Sphere Gap Spacing (d)</span>
                        <span className="text-[#00509E]">{hvGap.toFixed(1)} cm</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={15}
                        step={0.5}
                        value={hvGap}
                        onChange={(e) => setHvGap(Number(e.target.value))}
                        className="w-full accent-[#00509E]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#E6F0FA]">
                        <span className="text-xs text-[#081B33]/60 block">Electric Field E</span>
                        <strong className="text-lg font-medium text-[#081B33]">
                          {currentField.toFixed(1)} kV/cm
                        </strong>
                      </div>
                      <div className="p-3 rounded-xl bg-[#E6F0FA]">
                        <span className="text-xs text-[#081B33]/60 block">Breakdown V_b</span>
                        <strong className="text-lg font-medium text-[#081B33]">
                          {breakdownVoltage.toFixed(0)} kV
                        </strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setFlashTrigger((n) => n + 1)}
                      className="w-full py-3 rounded-full bg-[#003973] text-white text-sm font-medium hover:bg-[#00509E] transition-colors"
                    >
                      Trigger Flashover Pulse
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                  <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-[#081B33]">
                    <canvas
                      ref={fopCanvasRef}
                      width={580}
                      height={300}
                      className="w-full h-auto block"
                    />
                  </div>

                  <div className="lg:col-span-2 bg-white rounded-2xl p-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Soil Resistivity (ρ — UI Loam)</span>
                        <span className="text-[#00509E]">{soilRho} Ω·m</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={200}
                        step={5}
                        value={soilRho}
                        onChange={(e) => setSoilRho(Number(e.target.value))}
                        className="w-full accent-[#00509E]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Driven Rod Length (L)</span>
                        <span className="text-[#00509E]">{rodLen.toFixed(1)} m</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={6}
                        step={0.5}
                        value={rodLen}
                        onChange={(e) => setRodLen(Number(e.target.value))}
                        className="w-full accent-[#00509E]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Potential Probe P (D = 40 m)</span>
                        <span className="text-[#00509E]">
                          {probePct.toFixed(1)}% ({xMeters.toFixed(1)} m)
                        </span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={90}
                        step={0.2}
                        value={probePct}
                        onChange={(e) => setProbePct(Number(e.target.value))}
                        className="w-full accent-[#00509E]"
                      />
                    </div>

                    <div className="flex gap-2">
                      {[52, 61.8, 72].map((snap) => (
                        <button
                          key={snap}
                          type="button"
                          onClick={() => setProbePct(snap)}
                          className={`flex-1 py-1.5 rounded-full text-xs font-medium transition-colors ${
                            Math.abs(probePct - snap) < 0.3
                              ? 'bg-[#FFC72C] text-[#081B33]'
                              : 'bg-[#E6F0FA] text-[#081B33]'
                          }`}
                        >
                          {snap}%
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-[#E6F0FA]">
                        <span className="text-xs text-[#081B33]/60 block">Measured R(x)</span>
                        <strong className="text-lg font-medium text-[#081B33]">
                          {measuredRx.toFixed(2)} Ω
                        </strong>
                      </div>
                      <div className="p-3 rounded-xl bg-[#E6F0FA]">
                        <span className="text-xs text-[#081B33]/60 block">PUIL (&lt; 5 Ω)</span>
                        <strong className="text-sm font-medium text-[#00509E]">
                          {measuredRx < 5 ? 'Compliant' : 'Add Parallel Rods'}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl font-medium text-[#081B33]"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {SYLLABUS_TRACKS[trackKey].name}
                  </h3>
                  <p className="text-xs font-medium text-[#00509E] mt-1">
                    {SYLLABUS_TRACKS[trackKey].semester}
                  </p>
                </div>

                <div className="flex gap-2">
                  {(
                    [
                      { key: 't3', label: 'T3 · High Voltage' },
                      { key: 'idp', label: 'IDP · Measurement' },
                      { key: 'rl', label: 'RL · Circuits' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setTrackKey(item.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        trackKey === item.key
                          ? 'bg-[#003973] text-white'
                          : 'bg-white text-[#081B33]/75 hover:text-[#081B33]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#081B33]/70 max-w-3xl">
                {SYLLABUS_TRACKS[trackKey].summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SYLLABUS_TRACKS[trackKey].modules.map((mod) => (
                  <div key={mod.num} className="bg-white rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#E6F0FA] text-[#00509E]">
                          Module 0{mod.num}
                        </span>
                        <span className="text-xs font-medium text-[#081B33]/50">
                          {mod.checkpoint}
                        </span>
                      </div>
                      <h4 className="text-base font-medium text-[#081B33] mb-1.5">
                        {mod.title}
                      </h4>
                      <p className="text-sm text-[#081B33]/65 mb-3">{mod.scope}</p>
                    </div>
                    <p className="text-xs text-[#003973] font-medium pt-3 border-t border-[#081B33]/10">
                      Instruments: {mod.instruments}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hardware' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/assets/virtual-ground-lab.png"
                    alt="VirtualGroundLab MATLAB simulation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-medium text-[#00509E]">PLATE 01 · MATLAB</span>
                    <h4 className="text-lg font-medium text-[#081B33] mt-1">
                      VirtualGroundLab 2-Layer Soil Model
                    </h4>
                    <p className="text-sm text-[#081B33]/65 mt-1">
                      Depok loam/clay stratification, underground potential contours, and 61.8% FOP validation.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/assets/powerfactory-sld.png"
                    alt="DIgSILENT PowerFactory Single-Line Diagram"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-medium text-[#00509E]">PLATE 02 · POWERFACTORY</span>
                    <h4 className="text-lg font-medium text-[#081B33] mt-1">
                      Multi-Bus Grid SLD with PLTS &amp; BESS
                    </h4>
                    <p className="text-sm text-[#081B33]/65 mt-1">
                      Distribution load-flow topology featuring PV integration and Grid-Forming BESS storage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INSTRUMENTS.map((inst) => (
                  <div key={inst.code} className="bg-white rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-[#00509E]">{inst.code}</span>
                        <span className="text-xs font-medium text-[#081B33]/50">
                          {inst.tracks.join(' · ')}
                        </span>
                      </div>
                      <h4 className="text-base font-medium text-[#081B33] mb-2">
                        {inst.name}
                      </h4>
                      <p className="text-sm text-[#081B33]/65 mb-4">{inst.desc}</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[#081B33]/75 bg-[#E6F0FA] rounded-xl p-3">
                      <ShieldCheck className="w-4 h-4 text-[#00509E] shrink-0 mt-0.5" />
                      <span>{inst.protocol}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'people' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <span className="text-xs font-medium text-[#00509E]">
                  ACTIVE ASSISTANTS · BATCH 2024
                </span>
                <h3
                  className="text-2xl font-medium text-[#081B33] mt-1 mb-4"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Six Names, One Desk.
                </h3>

                <div className="divide-y divide-[#081B33]/10">
                  {BATCH_2024_ASSISTANTS.map((person) => (
                    <div
                      key={person.no}
                      className="py-3 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-[#00509E]">{person.no}</span>
                        <span className="font-medium text-[#081B33]">{person.name}</span>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#E6F0FA] text-[#003973] font-medium">
                        {person.callsign}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#003973] text-white rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-[#FFC72C] mb-2">
                    <Activity className="w-4 h-4" />
                    SURGING WITH VOLTAGE · #UNLEASHYOURPOWER
                  </span>
                  <h3
                    className="text-2xl font-medium mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Visit the Laboratory Desk
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    Laboratorium Tegangan Tinggi dan Pengukuran Listrik (TTPL)
                    <br />
                    Gedung Departemen Teknik Elektro, Lantai 2
                    <br />
                    Fakultas Teknik Universitas Indonesia, Depok 16424
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3 text-sm">
                    <span>laboratorium.ttpl@gmail.com</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FFC72C] hover:text-white transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://www.instagram.com/lttpl.ui"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-sm transition-colors"
                    >
                      <span>@lttpl.ui</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://ttpl-website.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-sm transition-colors"
                    >
                      <span>Lab Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
