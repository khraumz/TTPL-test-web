import type { CSSProperties } from 'react';

export interface MarqueeBrand {
  name: string;
  style: CSSProperties;
}

export const HERO_STANDARDS: MarqueeBrand[] = [
  {
    name: 'Fluke',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '15px',
    },
  },
  {
    name: 'IEEE 81',
    style: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 900,
      letterSpacing: '0.08em',
      fontSize: '13px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'IEC 60060',
    style: {
      fontFamily: '"Trebuchet MS", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontSize: '15px',
      fontStyle: 'italic',
    },
  },
  {
    name: 'HIOKI',
    style: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
      letterSpacing: '0.12em',
      fontSize: '13px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'PowerFactory',
    style: {
      fontFamily: 'Palatino, "Book Antiqua", serif',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      fontSize: '16px',
    },
  },
  {
    name: 'MATLAB',
    style: {
      fontFamily: 'Impact, "Arial Narrow", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.04em',
      fontSize: '14px',
    },
  },
  {
    name: 'IEEE 1159',
    style: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontSize: '13px',
    },
  },
];

export const ALUMNI_PARTNERS: MarqueeBrand[] = [
  {
    name: 'PT PLN (Persero)',
    style: {
      fontFamily: '"Times New Roman", serif',
      fontWeight: 400,
      letterSpacing: '0.02em',
      fontSize: '14px',
    },
  },
  {
    name: 'SIEMENS',
    style: {
      fontFamily: '"Arial Black", Arial, sans-serif',
      fontWeight: 900,
      letterSpacing: '0.08em',
      fontSize: '16px',
    },
  },
  {
    name: 'GE VERNOVA',
    style: {
      fontFamily: 'Impact, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontSize: '18px',
    },
  },
  {
    name: 'Schneider',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontSize: '17px',
    },
  },
  {
    name: 'AFRY',
    style: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      fontSize: '15px',
    },
  },
  {
    name: 'PERTAMINA',
    style: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.06em',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'VINCI',
    style: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
      letterSpacing: '0.18em',
      fontSize: '14px',
    },
  },
  {
    name: 'Anindya',
    style: {
      fontFamily: 'Palatino, serif',
      fontWeight: 500,
      letterSpacing: '0.03em',
      fontSize: '15px',
    },
  },
];

export interface LabDomainMode {
  id: 'switchgear' | 'grid' | 'circuits';
  code: string;
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  targetTab: 'simulation' | 'syllabus' | 'hardware';
  image: string;
  metrics: string[];
}

export const LAB_DOMAIN_MODES: LabDomainMode[] = [
  {
    id: 'switchgear',
    code: '01 · T3',
    label: 'High Voltage & Switchgear',
    title: 'Switchgear & HV',
    description:
      'Execute AC, DC, and 1.2/50 μs Marx impulse dielectric tests alongside GIS switchgear coordination and IEC 60052 sphere-gap calibration inside the FTUI safety cage.',
    ctaLabel: 'Know more',
    targetTab: 'simulation',
    image: '/images/usecase-switchgear.jpg',
    metrics: ['Up to 240 kVpk Impulse', 'IEC 60052 & 60060', 'Faraday Cage Interlocks'],
  },
  {
    id: 'grid',
    code: '02 · IDP',
    label: 'Grid & Grounding',
    title: 'Grid & Earthing',
    description:
      'Map 3-phase power quality harmonics per IEEE 1159, optimize PLN power factor cos φ ≥ 0.85, and verify 3-point Fall-of-Potential earthing resistance under PUIL < 5 Ω.',
    ctaLabel: 'Know more',
    targetTab: 'hardware',
    image: '/assets/hero_pylons.jpg',
    metrics: ['IEEE Std 81 (61.8% Rule)', '3-Phase PQA Harmonics', 'VirtualGroundLab MATLAB'],
  },
  {
    id: 'circuits',
    code: '03 · RL',
    label: 'Circuits & Power Flow',
    title: 'Circuits & Flow',
    description:
      'Build rock-solid electrical engineering fundamentals from DC/AC phasor theorems and two-port ABCD matrices to 3-phase Wye/Delta networks and PowerFactory SLD studies.',
    ctaLabel: 'Know more',
    targetTab: 'syllabus',
    image: '/images/card-dielectric.jpg',
    metrics: ['8 Core Lab Modules', 'KKI & Regular Bilingual', 'DIgSILENT PowerFactory'],
  },
];

export interface SyllabusModule {
  num: number;
  checkpoint: string;
  title: string;
  scope: string;
  instruments: string;
}

export const SYLLABUS_TRACKS: Record<
  'rl' | 'idp' | 't3',
  { name: string; semester: string; summary: string; modules: SyllabusModule[] }
> = {
  t3: {
    name: 'Teknik Tegangan & Arus Tinggi (T3)',
    semester: 'SEMESTER 7 · POWER STREAM · IEC 60060',
    summary:
      'Generation and precision measurement of AC, DC, and lightning Impulse high voltages, paired with dielectric breakdown testing of air, transformer oil, and solid insulators.',
    modules: [
      {
        num: 1,
        checkpoint: 'Safety Gate',
        title: 'Introduction to High Voltage & Switchgear Safety',
        scope: 'Faraday cage door interlocks, earthing discharge rod operation, and clearance rules.',
        instruments: 'Earthing Discharge Rod, Interlock Safety Cage, HV Console',
      },
      {
        num: 2,
        checkpoint: 'HV Lab Session',
        title: 'Generation & Measurement of AC High Voltage',
        scope: 'HV step-up test transformers, capacitive dividers, and IEC 60052 sphere-gap calibration.',
        instruments: 'HV AC Test Transformer, Capacitive Divider, Sphere Gap',
      },
      {
        num: 3,
        checkpoint: 'HV Lab Session',
        title: 'Generation & Measurement of DC High Voltage',
        scope: 'Cockcroft-Walton voltage multiplier cascades, ripple factor, and resistive dividers.',
        instruments: 'HV Diode Rectifier Stack, Smoothing Capacitors, Resistive Divider',
      },
      {
        num: 4,
        checkpoint: 'HV Lab Session',
        title: 'Generation & Measurement of Impulse High Voltage',
        scope: 'Marx generator parallel charging & series firing for 1.2/50 μs lightning impulses.',
        instruments: 'Marx Impulse Generator, Trigger Gap, Impulse Oscilloscope',
      },
      {
        num: 5,
        checkpoint: 'HV Lab Session',
        title: 'AC Air Insulation Breakdown Testing',
        scope: 'Townsend and streamer breakdown across sphere-sphere and needle-plane air gaps.',
        instruments: 'Sphere, Needle & Plane Electrodes, Barometer, Hygrometer',
      },
      {
        num: 6,
        checkpoint: 'HV Lab Session',
        title: 'Liquid Dielectric Insulation Testing (IEC 60156)',
        scope: 'Transformer mineral oil breakdown voltage (BDV) across a 2.5 mm VDE electrode gap.',
        instruments: 'Automatic Liquid Dielectric Oil Tester, VDE Oil Test Vessel',
      },
    ],
  },
  idp: {
    name: 'Instrumentasi & Pengukuran (IDP)',
    semester: 'SEMESTER 5 · KKI & REGULAR · IEEE 1159 & IEEE 81',
    summary:
      'Operation and uncertainty analysis of analog and digital meters, three-phase power quality analyzers, 3-point Fall-of-Potential grounding, and energy metering.',
    modules: [
      {
        num: 2,
        checkpoint: 'Report M2&3',
        title: 'Analog Electrical Measurement',
        scope: 'PMMC movement, parallax correction, Ω/V sensitivity, and voltmeter loading effect.',
        instruments: 'Analog Voltmeter, Analog Ammeter, R/L/C Decade Box',
      },
      {
        num: 3,
        checkpoint: 'Report M2&3',
        title: 'Digital Electrical Measurement',
        scope: 'True-RMS vs average-responding meters, crest factor, and CT clamp ammeters.',
        instruments: 'Fluke 15B MAX Digital Multimeter, Clamp Meter, LCR Meter',
      },
      {
        num: 4,
        checkpoint: 'Report M4&5',
        title: 'Single-Phase Active, Reactive & Apparent Power',
        scope: 'Electrodynamic wattmeter coil wiring, power triangle (P, Q, S), and PF correction.',
        instruments: 'Electrodynamic Wattmeter, Digital Power Meter, R-L-C Load Bank',
      },
      {
        num: 5,
        checkpoint: 'Report M4&5',
        title: 'Power Quality & Three-Phase Power Measurement',
        scope: 'Aron two-wattmeter methods, IEEE 1159 sags/swells, and IEEE 519 THD harmonics.',
        instruments: 'Three-Phase Power Quality Analyzer (PQA), CT Clamps',
      },
      {
        num: 7,
        checkpoint: 'Individual M7',
        title: 'Earthing / Grounding Resistance Measurement',
        scope: '3-Point Fall-of-Potential method, 61.8% probe rule, and PUIL < 5 Ω threshold.',
        instruments: 'Hioki / Fluke 3-Pole Digital Earth Tester, Auxiliary Spikes',
      },
      {
        num: 8,
        checkpoint: 'Individual M8',
        title: 'Electrical Energy Consumption Metering',
        scope: 'Induction vs electronic smart kWh meters, rev/kWh calibration, and tariff auditing.',
        instruments: 'kWh Energy Meter Test Bench, Variable Load Bank',
      },
    ],
  },
  rl: {
    name: 'Rangkaian Listrik (RL)',
    semester: 'SEMESTER 5 · KKI & REGULAR · 5 CHECKPOINTS',
    summary:
      'Experimental circuit analysis covering Ohm & Kirchhoff laws, mesh and nodal methods, superposition, Thevenin & Norton equivalents, two-port networks, and 3-phase systems.',
    modules: [
      {
        num: 2,
        checkpoint: 'Report M2&3',
        title: 'Electrical Fundamentals & Mesh Analysis',
        scope: 'KVL loop equations, meter internal resistance loading, and DC mesh currents.',
        instruments: 'Regulated DC Power Supply, Fluke 15B MAX, Resistor Board',
      },
      {
        num: 4,
        checkpoint: 'Report M4&5',
        title: 'Superposition & Thevenin’s Theorem',
        scope: 'Multi-source decomposition and determining V_Th and equivalent R_Th.',
        instruments: 'Dual DC Supply, Digital Multimeter, Variable Load Resistor',
      },
      {
        num: 5,
        checkpoint: 'Report M4&5',
        title: 'Norton’s Theorem & Maximum Power Transfer',
        scope: 'Short-circuit Norton current I_N and impedance matching for peak transfer.',
        instruments: 'DC Power Supply, Ammeter, Decade Load Box',
      },
      {
        num: 6,
        checkpoint: 'Individual M6',
        title: 'Two-Port Networks (Z, Y & ABCD Matrices)',
        scope: 'Open-circuit impedance and transmission parameter matrices on T and Π networks.',
        instruments: 'DC/AC Source, Digital Multimeters, Two-Port Module',
      },
      {
        num: 7,
        checkpoint: 'Individual M7',
        title: 'Single-Phase AC Circuits & Phasor Analysis',
        scope: 'RLC impedance triangles, phase shift on oscilloscope, and power factor cos φ.',
        instruments: 'AC Function Generator, Digital Storage Oscilloscope, LCR Meter',
      },
      {
        num: 8,
        checkpoint: 'Individual M8',
        title: 'Three-Phase Wye (Y) & Delta (Δ) Systems',
        scope: 'Balanced/unbalanced 3-phase loads, line-to-line voltages, and neutral diagnostics.',
        instruments: 'Three-Phase Power Bench, Clamp Power Meter, Multimeters',
      },
    ],
  },
};

export interface InstrumentItem {
  code: string;
  tracks: string[];
  name: string;
  desc: string;
  protocol: string;
}

export const INSTRUMENTS: InstrumentItem[] = [
  {
    code: 'INST-01 · HV-SET',
    tracks: ['T3'],
    name: 'High-Voltage AC / DC / Impulse Test System',
    desc: 'Step-up testing transformers, Cockcroft-Walton rectifiers, Marx impulse stages, and IEC 60052 sphere gaps inside the interlocked cage.',
    protocol: 'Engage Faraday cage interlocks and discharge all HV capacitors with the grounding rod.',
  },
  {
    code: 'INST-02 · PQA',
    tracks: ['IDP'],
    name: 'Three-Phase Power Quality Analyzer',
    desc: 'Real-time clamp analyzer capturing active/reactive/apparent power (P, Q, S), power factor, harmonic THD, and IEEE 1159 sags/swells.',
    protocol: 'Orient current clamp arrows from source toward load on all phases.',
  },
  {
    code: 'INST-03 · FOP',
    tracks: ['IDP'],
    name: 'Hioki / Fluke 3-Pole Digital Earth Tester',
    desc: 'Injects 128 Hz switched test current into spike C and senses potential at spike P to measure earthing resistance R_E.',
    protocol: 'Drive potential spike P at 61.8% of current spike distance D along a straight line.',
  },
  {
    code: 'INST-04 · DMM',
    tracks: ['RL', 'IDP'],
    name: 'Fluke 15B MAX Digital Multimeter',
    desc: 'Primary benchtop True-RMS multimeter across RL and IDP for AC/DC voltage, current, resistance, and continuity verification.',
    protocol: 'Probe voltage in parallel, current in series; isolate power before measuring Ω.',
  },
  {
    code: 'INST-05 · DSO',
    tracks: ['RL', 'T3'],
    name: 'Digital Storage Oscilloscope',
    desc: 'Multi-channel time-domain acquisition for RLC phase angle, transient switching response, and 1.2/50 μs impulse waveshapes.',
    protocol: 'Verify probe attenuation (1x / 10x) and common BNC ground reference before probing.',
  },
  {
    code: 'INST-06 · LCR',
    tracks: ['RL', 'IDP'],
    name: 'Precision Digital LCR & Electrodynamic Wattmeter',
    desc: 'Measures inductance (L), capacitance (C), Q/D factors, and Aron two-wattmeter three-phase active power.',
    protocol: 'Short-circuit and discharge capacitor terminals prior to insertion.',
  },
];

export const BATCH_2024_ASSISTANTS = [
  { no: '01', name: 'Dominick Dexter G.', callsign: 'Dexter' },
  { no: '02', name: 'Abdul Jafor M.', callsign: 'Jafor' },
  { no: '03', name: 'Shannon Aurelia W.', callsign: 'Shannon' },
  { no: '04', name: 'Naila Faiza', callsign: 'Naila' },
  { no: '05', name: 'Alief Rizki F.', callsign: 'Alief' },
  { no: '06', name: 'Iftikharus Raudana M.', callsign: 'Rau' },
];
