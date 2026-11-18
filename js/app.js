/* ==========================================================================
   LABORATORIUM TTPL FTUI — Architectural & Scientific Interactive Engine
   Pure Vanilla JS · Scientific HTML5 Canvas Plots · Booktabs Syllabus · EN/ID
   ========================================================================== */

const I18N = {
  en: {
    'a11y.skip': 'Skip to main content',
    'nav.profile': 'Profile',
    'nav.syllabus': 'Practicum',
    'nav.bench': 'Simulation',
    'nav.instruments': 'Instruments',
    'nav.artifacts': 'Research',
    'nav.people': 'People',
    'nav.alumni': 'Alumni',
    'nav.contact': 'Contact',
    'hero.dept': 'Department of Electrical Engineering · FTUI',
    'hero.line1': 'High Voltage',
    'hero.line2': 'Electrical Measurement',
    'hero.line3': 'Surging With Voltage.',
    'hero.deck': 'Laboratorium Tegangan Tinggi dan Pengukuran Listrik (TTPL) is the teaching, research, and testing center for high-voltage engineering, precision instrumentation, grounding systems, and electric power networks at Universitas Indonesia.',
    'hero.ctaSyllabus': 'Inspect Practicum Syllabus',
    'hero.ctaBench': 'Open Engineering Bench',
    'hero.ctaPeople': 'Meet Batch 2024 Crew →',
    'hero.figCap': 'HIGH-VOLTAGE TRANSMISSION & DIELECTRIC SYSTEMS',
    'ledger.tracks': 'DISCIPLINES',
    'ledger.modules': 'CURRICULUM',
    'ledger.location': 'LABORATORY',
    'ledger.motto': 'IDENTITY',
    'profile.running': 'LABORATORY PROFILE & MANDATE',
    'profile.title': 'Where High Voltage Meets Precision Measurement.',
    'profile.mandate': '“Focused on education, research, and testing in <strong>high voltage engineering</strong>, <strong>electrical measurement</strong>, and <strong>electric power systems</strong>.”',
    'profile.p1': 'Operating on the second floor of the Department of Electrical Engineering building at FTUI Depok, Laboratorium TTPL bridges analytical electrical theory with disciplined laboratory practice for both Regular and International Undergraduate (KKI) students.',
    'profile.p2': 'Every semester, students progress from linear DC/AC circuit theorems and calibrated benchtop instrumentation to 3-point Fall-of-Potential soil earthing and AC/DC/Impulse high-voltage breakdown testing inside the safety cage.',
    'profile.valuesTitle': 'Core Engineering Culture · What TTPL Stands For',
    'profile.fig2': 'Hands-on instrument discipline across RL, IDP, and T3 sessions.',
    'profile.uspCaption': 'Table 1.1 — Unique Selling Propositions of Laboratorium TTPL',
    'profile.colPillar': 'PILLAR',
    'profile.colScope': 'LABORATORY PRACTICE',
    'values.v1': 'Technical Curiosity',
    'values.v1d': 'Questioning every reading, tolerance, and physical mechanism behind the meter.',
    'values.v2': 'Responsibility & Commitment',
    'values.v2d': 'Strict adherence to high-voltage interlocks, calibration procedures, and deadlines.',
    'values.v3': 'Communication & Teamwork',
    'values.v3d': 'Clear technical reporting, peer teaching, and coordinated bench execution.',
    'values.v4': 'Problem Solving Mindset',
    'values.v4d': 'Diagnosing wiring faults, harmonic distortion, and grounding anomalies systematically.',
    'usp.u1Title': 'Hands-on Experience',
    'usp.u1Desc': 'Direct wiring & testing with calibrated Fluke multimeters, PQA, earth testers, oscilloscopes, and HV sets.',
    'usp.u2Title': 'Professional Collaboration',
    'usp.u2Desc': 'Structured KKI & Regular practicum operations uniting student cohorts, assistants, and industry partners.',
    'usp.u3Title': 'Technical Skill Mastery',
    'usp.u3Desc': 'Deep grounding in circuit analysis, IEEE 1159 power quality, IEEE 81 earthing, and IEC 60060 HV testing.',
    'syllabus.running': 'PRACTICUM CURRICULUM & OPERATING STANDARD',
    'syllabus.title': 'Three Disciplines. One Practicum Standard.',
    'syllabus.rlMeta': '8 Modules · 5 Report Checkpoints · DC, AC & 3-Phase',
    'syllabus.idpMeta': '8 Modules · Analog/Digital, Power Quality & Grounding',
    'syllabus.t3Meta': '8–10 Modules · AC/DC/Impulse HV & Dielectric Testing',
    'syllabus.colMod': 'MODULE',
    'syllabus.colTopic': 'EXPERIMENT TITLE & SCOPE',
    'syllabus.colCheck': 'CHECKPOINT',
    'syllabus.colAction': 'SPEC',
    'syllabus.footerNote': 'Click any module row to open its full specification, instrument list, and submission rules.',
    'workflow.title': 'Session Execution Standard',
    'workflow.s1Title': 'Prepare Before Lab',
    'workflow.s1Desc': 'Read bilingual LaTeX PDF modules (ID/EN), watch TTPL FTUI YouTube briefings, and complete pre-lab assignments (TP).',
    'workflow.s2Title': 'Attendance & QnA Gate',
    'workflow.s2Desc': 'Assistants record actual attendance (on-time / late) and QnA scores (0–100) to unlock report submission.',
    'workflow.s3Title': 'Next-Day 23:59 WIB Deadline',
    'workflow.s3Desc': 'PDF reports upload via the digital portal with a 5-minute grace window and 10 pts/min late deduction.',
    'calendar.title': 'Semester Operating Calendar',
    'calendar.phase': 'PHASE',
    'calendar.m1Title': 'RL Briefing, Pre-test & Practicum',
    'calendar.m2Title': 'UTS, RL Post-test & IDP Pre-test',
    'calendar.m3Title': 'IDP Practicum (KKI & Regular)',
    'calendar.m4Title': 'UAS, IDP Post-test & Grade Release',
    'bench.running': 'INTERACTIVE SCIENTIFIC SIMULATION BENCH',
    'bench.title': 'Verify the Physics Before Entering the Lab.',
    'bench.tabFop': '3-Point Fall-of-Potential Grounding (IEEE 81)',
    'bench.tabHv': 'Sphere-Gap Air Breakdown (IEC 60052)',
    'bench.tabPower': 'AC Power Triangle & Power Factor (PLN)',
    'bench.soilRho': 'Soil Resistivity (ρ — UI Depok Loam)',
    'bench.rodLen': 'Driven Rod Length (L)',
    'bench.probePos': 'Potential Probe P Position (x / D, D = 40 m)',
    'bench.hvV': 'Applied Peak Voltage (V)',
    'bench.hvD': 'Sphere Gap Spacing (d)',
    'bench.audio': 'Synthesize Spark Audio',
    'bench.vrms': 'RMS Line Voltage (V_rms)',
    'bench.irms': 'RMS Load Current (I_rms)',
    'bench.phi': 'Phase Angle φ (+Lagging L / −Leading C)',
    'instruments.running': 'EQUIPMENT INVENTORY & SAFETY PROTOCOLS',
    'instruments.title': 'Calibrated Hardware in the TTPL Hall.',
    'artifacts.running': 'ENGINEERING ARTIFACTS & DIGITAL INFRASTRUCTURE',
    'artifacts.title': 'Software, Simulations & Assistant Selection.',
    'artifacts.p1': '2-layer soil stratification (UI Depok loam/clay), underground potential contours Φ(x,z), and automated 61.8% FOP verification.',
    'artifacts.p2': 'Multi-bus distribution load-flow topology featuring PV (PLTS) & Grid-Forming BESS used in advanced RL & power-system evaluations.',
    'artifacts.sys1Title': 'TTPL Digital Practicum Platform',
    'artifacts.sys1Desc': 'Next.js + Supabase PostgreSQL + Google Apps Script 2-way attendance synchronization, tracked PDF reader analytics, RLS grade gating, and automated Google Drive PDF archiving.',
    'artifacts.sys2Title': 'Standardized Bilingual LaTeX Module Engine',
    'artifacts.sys2Desc': 'Strict booktabs & CircuiTikZ vector typesetting across Indonesian Regular and English KKI editions, paired with MATLAB automated grading sheets.',
    'oprec.eyebrow': 'OPEN RECRUITMENT PIPELINE · L.TTPL',
    'oprec.title': 'Five-Stage Assistant Selection Schedule',
    'oprec.viewSlide': 'View Recruitment Slide ↗',
    'oprec.colStage': 'SELECTION STAGE',
    'oprec.colFormat': 'FORMAT & VENUE',
    'oprec.s1': 'Written Exam (RL & IDP)',
    'oprec.s1d': '100 min per track · LKEL Hall · Scientific calculator',
    'oprec.s2': 'Individual Teaching Simulation (RL & IDP)',
    'oprec.s2d': '60 min live session · Randomized module · Lab TTPL',
    'oprec.s3': 'Equipment Proficiency Test (RL & IDP)',
    'oprec.s3d': '30 min individual hands-on · Randomized instrument · Lab TTPL',
    'oprec.s4': 'Group Teaching Simulation (High Voltage T3)',
    'oprec.s4d': '60 min team session · Assigned 1 week prior · Lab TTPL',
    'oprec.s5': 'Final Interview',
    'oprec.s5d': 'Commitment, lab stewardship, and engineering teamwork evaluation',
    'people.running': 'LABORATORY ASSISTANTS & ARCHIVE',
    'people.title': 'Built by People Who Teach Carefully.',
    'people.currentEyebrow': 'ACTIVE ASSISTANTS · 2026/2027',
    'people.currentDesc': 'Responsible for daily RL, IDP, and T3 laboratory execution, equipment maintenance, module authoring, and student mentorship across Regular and KKI Electrical Engineering cohorts.',
    'people.colName': 'FULL NAME',
    'people.colCall': 'CALLSIGN',
    'people.archiveEyebrow': 'ASSISTANT ARCHIVE',
    'people.archiveTitle': 'Generations Who Carried TTPL Before Us',
    'alumni.running': 'CAREER DESTINATIONS · LAST 3 YEARS',
    'alumni.title': 'Where TTPL Alumni Power the Industry.',
    'alumni.cat1': 'State-Owned Energy',
    'alumni.cat2': 'Power Technology',
    'alumni.cat3': 'Engineering Consulting',
    'alumni.cat4': 'Engineering & Testing',
    'contact.eyebrow': 'CONTACT & LOCATION',
    'contact.title': 'Visit the Laboratory Desk.',
    'contact.desc': 'For practicum administration, open recruitment questions, electrical testing studies, or collaborative engineering work, reach Laboratorium TTPL directly.',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'footer.top': 'Top ↑',
    'common.enlarge': 'Enlarge ↗',
    'common.close': 'Close',
    'common.spec': 'Inspect →'
  },
  id: {
    'a11y.skip': 'Langsung ke konten utama',
    'nav.profile': 'Profil',
    'nav.syllabus': 'Praktikum',
    'nav.bench': 'Simulasi',
    'nav.instruments': 'Instrumen',
    'nav.artifacts': 'Riset',
    'nav.people': 'Tim',
    'nav.alumni': 'Alumni',
    'nav.contact': 'Kontak',
    'hero.dept': 'Departemen Teknik Elektro · FTUI',
    'hero.line1': 'Tegangan Tinggi',
    'hero.line2': 'Pengukuran Listrik',
    'hero.line3': 'Surging With Voltage.',
    'hero.deck': 'Laboratorium Tegangan Tinggi dan Pengukuran Listrik (TTPL) adalah pusat pembelajaran, penelitian, dan pengujian teknik tegangan tinggi, instrumentasi presisi, sistem pentanahan, dan sistem tenaga listrik di Universitas Indonesia.',
    'hero.ctaSyllabus': 'Lihat Silabus Praktikum',
    'hero.ctaBench': 'Buka Meja Simulasi',
    'hero.ctaPeople': 'Kenali Tim Asisten 2024 →',
    'hero.figCap': 'TRANSMISI TEGANGAN TINGGI & SISTEM DIELEKTRIK',
    'ledger.tracks': 'BIDANG PRAKTIKUM',
    'ledger.modules': 'KURIKULUM',
    'ledger.location': 'LOKASI LAB',
    'ledger.motto': 'IDENTITAS',
    'profile.running': 'PROFIL & MANDAT LABORATORIUM',
    'profile.title': 'Titik Temu Tegangan Tinggi & Pengukuran Presisi.',
    'profile.mandate': '“Berfokus pada pembelajaran, penelitian, dan pengujian di bidang <strong>tegangan tinggi</strong>, <strong>pengukuran listrik</strong>, serta <strong>sistem tenaga listrik</strong>.”',
    'profile.p1': 'Beroperasi di Lantai 2 Gedung Departemen Teknik Elektro FTUI Depok, Laboratorium TTPL menjembatani teori analisis kelistrikan dengan disiplin eksperimen bagi mahasiswa kelas Reguler maupun Kelas Khusus Internasional (KKI).',
    'profile.p2': 'Setiap semester, praktikan berkembang dari analisis rangkaian DC/AC dan pengoperasian instrumen ukur terkalibrasi menuju pengukuran pentanahan 3-titik Fall-of-Potential serta pengujian tembus isolasi AC/DC/Impuls tegangan tinggi.',
    'profile.valuesTitle': 'Budaya Rekayasa · Karakter Asisten & Praktikan TTPL',
    'profile.fig2': 'Disiplin pengoperasian alat ukur pada sesi praktikum RL, IDP, dan T3.',
    'profile.uspCaption': 'Tabel 1.1 — Keunggulan Utama (Unique Selling Proposition) Laboratorium TTPL',
    'profile.colPillar': 'PILAR',
    'profile.colScope': 'IMPLEMENTASI LABORATORIUM',
    'values.v1': 'Rasa Ingin Tahu Teknis',
    'values.v1d': 'Memahami mekanisme fisis dan batas toleransi di balik setiap angka pembacaan alat ukur.',
    'values.v2': 'Tanggung Jawab & Komitmen',
    'values.v2d': 'Kepatuhan penuh terhadap prosedur keselamatan tegangan tinggi, kalibrasi, dan ketepatan waktu.',
    'values.v3': 'Komunikasi & Kerja Tim',
    'values.v3d': 'Pelaporan teknis yang terstruktur, pengajaran sebaya, dan koordinasi meja praktikum.',
    'values.v4': 'Pola Pikir Pemecahan Masalah',
    'values.v4d': 'Mendiagnosis kesalahan rangkaian, distorsi harmonik, dan anomali pentanahan secara sistematis.',
    'usp.u1Title': 'Pengalaman Praktik Langsung',
    'usp.u1Desc': 'Pengawatan dan pengujian langsung menggunakan multimeter Fluke, PQA, earth tester, osiloskop, dan perangkat uji TT.',
    'usp.u2Title': 'Kolaborasi Tim & Profesional',
    'usp.u2Desc': 'Operasional praktikum KKI & Reguler terintegrasi antara praktikan, asisten laboratorium, dan mitra industri.',
    'usp.u3Title': 'Pengembangan Kompetensi Teknis',
    'usp.u3Desc': 'Penguasaan analisis rangkaian, kualitas daya IEEE 1159, pentanahan IEEE 81, dan pengujian tegangan tinggi IEC 60060.',
    'syllabus.running': 'KURIKULUM PRAKTIKUM & STANDAR OPERASIONAL',
    'syllabus.title': 'Tiga Bidang. Satu Standar Praktikum.',
    'syllabus.rlMeta': '8 Modul · 5 Checkpoint Laporan · DC, AC & 3-Fasa',
    'syllabus.idpMeta': '8 Modul · Analog/Digital, Kualitas Daya & Pentanahan',
    'syllabus.t3Meta': '8–10 Modul · TT AC/DC/Impuls & Pengujian Isolasi',
    'syllabus.colMod': 'MODUL',
    'syllabus.colTopic': 'JUDUL PERCOBAAN & RUANG LINGKUP',
    'syllabus.colCheck': 'CHECKPOINT',
    'syllabus.colAction': 'DETAIL',
    'syllabus.footerNote': 'Klik baris modul mana pun untuk membuka spesifikasi lengkap, daftar instrumen, dan aturan laporan.',
    'workflow.title': 'Standar Pelaksanaan Sesi',
    'workflow.s1Title': 'Persiapan Sebelum Praktikum',
    'workflow.s1Desc': 'Pelajari modul PDF LaTeX dwibahasa (ID/EN), tonton video YouTube TTPL FTUI, dan selesaikan Tugas Pendahuluan (TP).',
    'workflow.s2Title': 'Verifikasi Kehadiran & QnA',
    'workflow.s2Desc': 'Asisten mencatat kehadiran aktual (tepat waktu / terlambat) dan nilai QnA (0–100) sebagai syarat pembuka laporan.',
    'workflow.s3Title': 'Batas Pengumpulan H+1 23.59 WIB',
    'workflow.s3Desc': 'Laporan PDF diunggah melalui portal digital dengan toleransi unggah 5 menit dan penalti keterlambatan 10 poin/menit.',
    'calendar.title': 'Kalender Operasional Semester',
    'calendar.phase': 'TAHAPAN',
    'calendar.m1Title': 'Briefing, Pre-test & Praktikum RL',
    'calendar.m2Title': 'UTS, Post-test RL & Pre-test IDP',
    'calendar.m3Title': 'Praktikum IDP (KKI & Reguler)',
    'calendar.m4Title': 'UAS, Post-test IDP & Rilis Nilai',
    'bench.running': 'MEJA SIMULASI REKAYASA INTERAKTIF',
    'bench.title': 'Uji Fenomena Fisis Sebelum Menyentuh Instrumen.',
    'bench.tabFop': 'Pentanahan 3-Titik Fall-of-Potential (IEEE 81)',
    'bench.tabHv': 'Tembus Udara Sela Bola (IEC 60052)',
    'bench.tabPower': 'Segitiga Daya AC & Faktor Daya (PLN)',
    'bench.soilRho': 'Resistivitas Tanah (ρ — Lempung UI Depok)',
    'bench.rodLen': 'Panjang Elektroda Batang (L)',
    'bench.probePos': 'Posisi Elektroda Potensial P (x / D, D = 40 m)',
    'bench.hvV': 'Tegangan Puncak Uji (V)',
    'bench.hvD': 'Jarak Sela Bola (d)',
    'bench.audio': 'Suara Percikan Tembus',
    'bench.vrms': 'Tegangan RMS Sistem (V_rms)',
    'bench.irms': 'Arus Beban RMS (I_rms)',
    'bench.phi': 'Sudut Fasa φ (+Lagging L / −Leading C)',
    'instruments.running': 'INVENTARIS INSTRUMEN & PROTOKOL KESELAMATAN',
    'instruments.title': 'Perangkat Ukur Terkalibrasi di Ruang TTPL.',
    'artifacts.running': 'ARTEFAK RISET & INFRASTRUKTUR DIGITAL',
    'artifacts.title': 'Perangkat Lunak, Simulasi & Seleksi Asisten.',
    'artifacts.p1': 'Simulasi tanah 2 lapis (lempung UI Depok), kontur medan potensial bawah tanah Φ(x,z), dan verifikasi otomatis kaidah 61,8% FOP.',
    'artifacts.p2': 'Topologi aliran daya jaringan distribusi multi-bus dengan PLTS & BESS Grid-Forming pada evaluasi lanjutan.',
    'artifacts.sys1Title': 'Platform Praktikum Digital TTPL',
    'artifacts.sys1Desc': 'Next.js + Supabase PostgreSQL + sinkronisasi kehadiran Google Apps Script 2 arah, analitik pembacaan PDF modul, proteksi nilai RLS, dan pengarsipan otomatis ke Google Drive.',
    'artifacts.sys2Title': 'Sistem Modul LaTeX Dwibahasa Terstandar',
    'artifacts.sys2Desc': 'Standarisasi booktabs & skematik vektor CircuiTikZ untuk edisi Reguler (Indonesia) dan KKI (Inggris) beserta kunci jawaban otomatis MATLAB.',
    'oprec.eyebrow': 'ALUR OPEN RECRUITMENT · L.TTPL',
    'oprec.title': 'Jadwal Lima Tahap Seleksi Asisten Laboratorium',
    'oprec.viewSlide': 'Lihat Slide Rekrutmen ↗',
    'oprec.colStage': 'TAHAPAN SELEKSI',
    'oprec.colFormat': 'FORMAT & LOKASI',
    'oprec.s1': 'Tes Tulis Rangkaian Listrik & IDP',
    'oprec.s1d': '100 menit per bidang · Ruang LKEL · Kalkulator saintifik',
    'oprec.s2': 'Tes Mengajar Individu (RL & IDP)',
    'oprec.s2d': 'Simulasi mengajar 60 menit · Modul acak · Ruang Lab TTPL',
    'oprec.s3': 'Tes Penggunaan Alat Praktikum (RL & IDP)',
    'oprec.s3d': 'Praktik individu 30 menit · Alat diacak · Ruang Lab TTPL',
    'oprec.s4': 'Tes Mengajar Berkelompok (Teknik Tegangan Tinggi)',
    'oprec.s4d': 'Sesi kelompok 60 menit · Modul ditentukan H-7 · Ruang Lab TTPL',
    'oprec.s5': 'Wawancara Akhir',
    'oprec.s5d': 'Evaluasi komitmen, tanggung jawab operasional, dan kerja sama tim',
    'people.running': 'TIM ASISTEN & ARSIP LABORATORIUM',
    'people.title': 'Dibangun oleh Tim yang Mengajar dengan Teliti.',
    'people.currentEyebrow': 'ASISTEN AKTIF · 2026/2027',
    'people.currentDesc': 'Bertanggung jawab atas pelaksanaan harian praktikum RL, IDP, dan T3, pemeliharaan alat, penyusunan modul, serta pembimbingan mahasiswa Reguler dan KKI.',
    'people.colName': 'NAMA LENGKAP',
    'people.colCall': 'PANGGILAN',
    'people.archiveEyebrow': 'ARSIP ASISTEN',
    'people.archiveTitle': 'Generasi Pendahulu Penjaga Standar TTPL',
    'alumni.running': 'JEJAK KARIER ALUMNI · 3 TAHUN TERAKHIR',
    'alumni.title': 'Kiprah Alumni TTPL di Industri Energi & Teknologi.',
    'alumni.cat1': 'BUMN Energi',
    'alumni.cat2': 'Teknologi Daya Global',
    'alumni.cat3': 'Konsultan Rekayasa',
    'alumni.cat4': 'Rekayasa & Pengujian',
    'contact.eyebrow': 'KONTAK & LOKASI',
    'contact.title': 'Kunjungi Meja Laboratorium TTPL.',
    'contact.desc': 'Untuk administrasi praktikum, pertanyaan open recruitment, pengujian kelistrikan, atau kolaborasi riset, hubungi Laboratorium TTPL.',
    'contact.copy': 'Salin',
    'contact.copied': 'Tersalin',
    'footer.top': 'Atas ↑',
    'common.enlarge': 'Perbesar ↗',
    'common.close': 'Tutup',
    'common.spec': 'Detail →'
  }
};

/* ---------- Syllabus Data ---------- */
const TRACKS_DATA = {
  rl: {
    nameEn: 'Rangkaian Listrik (Electric Circuits)',
    nameId: 'Rangkaian Listrik (RL)',
    meta: 'SEMESTER 5 · KKI & REGULAR · 5 REPORT CHECKPOINTS',
    summaryEn: 'Experimental circuit analysis covering Ohm & Kirchhoff laws, mesh and nodal methods, linearity, superposition, Thevenin & Norton equivalents, two-port networks, AC phasors, and 3-phase systems.',
    summaryId: 'Praktikum analisis rangkaian listrik mencakup hukum Ohm & Kirchhoff, analisis mesh dan node, linearitas, superposisi, teorema Thevenin & Norton, kutub empat, rangkaian AC, hingga sistem tiga fasa.',
    modules: [
      {
        num: 1,
        checkpoint: 'Offline Pre-test',
        titleEn: 'Pre-test – Fundamentals of Electric Circuits',
        titleId: 'Pre-test – Dasar Rangkaian Listrik',
        descEn: 'Baseline evaluation on Ohm’s Law, KVL/KCL, series-parallel reductions, and laboratory safety procedures.',
        descId: 'Evaluasi dasar hukum Ohm, KVL/KCL, penyederhanaan rangkaian seri-paralel, dan tata tertib keselamatan lab.',
        instruments: 'Scientific Calculator, RL Module Handbook',
        reportRuleEn: 'Schedule & resources only — no PDF report upload.',
        reportRuleId: 'Jadwal & materi persiapan saja — tanpa pengumpulan laporan PDF.'
      },
      {
        num: 2,
        checkpoint: 'Combined Report M2&3',
        titleEn: 'Electrical Fundamentals & Mesh Analysis',
        titleId: 'Dasar Kelistrikan dan Analisis Mesh',
        descEn: 'Verification of KVL loop equations, meter internal resistance loading effects, and multi-loop DC mesh currents.',
        descId: 'Verifikasi persamaan loop KVL, efek resistansi dalam voltmeter/amperemeter, dan analisis arus mesh DC.',
        instruments: 'Regulated DC Power Supply, Fluke 15B MAX Multimeter, Decade Resistor Board',
        reportRuleEn: 'Combined into one PDF report with Module 3 (unlocked after attending both sessions).',
        reportRuleId: 'Digabung menjadi satu laporan PDF bersama Modul 3.'
      },
      {
        num: 3,
        checkpoint: 'Combined Report M2&3',
        titleEn: 'Linearity & Nodal Analysis',
        titleId: 'Linearitas dan Analisis Node',
        descEn: 'Proportionality in linear resistive networks and KCL nodal voltage measurement across reference nodes.',
        descId: 'Uji proporsionalitas jaringan resistor linier dan pengukuran tegangan node berbasis KCL.',
        instruments: 'Regulated DC Supply, Digital Multimeter, Linear Resistor Network',
        reportRuleEn: 'Submitted together with Module 2 as the Module 2&3 Report.',
        reportRuleId: 'Dikumpulkan bersama Modul 2 dalam Laporan Modul 2&3.'
      },
      {
        num: 4,
        checkpoint: 'Combined Report M4&5',
        titleEn: 'Superposition & Thevenin’s Theorem',
        titleId: 'Analisis Superposisi dan Thevenin',
        descEn: 'Decomposing multi-source circuits and determining open-circuit V_Th and equivalent resistance R_Th.',
        descId: 'Dekomposisi kontribusi tiap sumber independen serta penentuan parameter ekivalen V_Th dan R_Th.',
        instruments: 'Dual DC Power Supply, Digital Multimeter, Variable Load Resistor',
        reportRuleEn: 'Combined into one PDF report with Module 5.',
        reportRuleId: 'Digabung menjadi satu laporan PDF bersama Modul 5.'
      },
      {
        num: 5,
        checkpoint: 'Combined Report M4&5',
        titleEn: 'Norton’s Theorem & Maximum Power Transfer',
        titleId: 'Analisis Norton',
        descEn: 'Short-circuit Norton current I_N measurement, Thevenin-Norton duality, and maximum power transfer matching.',
        descId: 'Pengukuran arus hubung singkat Norton I_N, kesetaraan Thevenin-Norton, dan transfer daya maksimum.',
        instruments: 'DC Power Supply, Ammeter/Multimeter, Decade Load Box',
        reportRuleEn: 'Submitted together with Module 4 as the Module 4&5 Report.',
        reportRuleId: 'Dikumpulkan bersama Modul 4 dalam Laporan Modul 4&5.'
      },
      {
        num: 6,
        checkpoint: 'Individual Report M6',
        titleEn: 'Two-Port Networks (Rangkaian Kutub Empat)',
        titleId: 'Rangkaian Kutub Empat',
        descEn: 'Characterization of open-circuit impedance (Z), short-circuit admittance (Y), and ABCD transmission matrices.',
        descId: 'Karakterisasi matriks parameter impedansi (Z), admitansi (Y), dan transmisi ABCD pada jaringan T dan Π.',
        instruments: 'DC/AC Source, Digital Multimeters, Two-Port Network Module',
        reportRuleEn: 'Individual PDF report due next calendar day at 23:59 WIB.',
        reportRuleId: 'Laporan PDF mandiri dengan tenggat H+1 pukul 23.59 WIB.'
      },
      {
        num: 7,
        checkpoint: 'Individual Report M7',
        titleEn: 'Single-Phase AC Circuits & Phasor Analysis',
        titleId: 'Rangkaian AC',
        descEn: 'RLC impedance triangles, phase shift measurement on oscilloscope, power factor cos φ, and frequency response.',
        descId: 'Segitiga impedansi RLC, pengukuran beda fasa dengan osiloskop, faktor daya cos φ, dan respons frekuensi.',
        instruments: 'AC Source / Function Generator, Digital Storage Oscilloscope, LCR Meter',
        reportRuleEn: 'Individual PDF report due next calendar day at 23:59 WIB.',
        reportRuleId: 'Laporan PDF mandiri dengan tenggat H+1 pukul 23.59 WIB.'
      },
      {
        num: 8,
        checkpoint: 'Individual Report M8',
        titleEn: 'Three-Phase Wye (Y) & Delta (Δ) Systems',
        titleId: 'Rangkaian Tiga Fasa',
        descEn: 'Balanced and unbalanced 3-phase loads, line-to-line vs. line-to-neutral voltages, and neutral shift diagnostics.',
        descId: 'Beban tiga fasa seimbang dan tak seimbang, tegangan antar-fasa vs fasa-netral, serta arus kawat netral.',
        instruments: 'Three-Phase Power Bench, Clamp Power Meter, Digital Multimeters',
        reportRuleEn: 'Final individual RL report prior to the RL Post-test.',
        reportRuleId: 'Laporan mandiri terakhir sebelum Post-test Rangkaian Listrik.'
      }
    ]
  },
  idp: {
    nameEn: 'Instrumentasi & Pengukuran (Instrumentation & Measurement)',
    nameId: 'Instrumentasi dan Pengukuran (IDP)',
    meta: 'SEMESTER 5 · KKI & REGULAR · IEEE 1159 & IEEE 81',
    summaryEn: 'Operation and uncertainty analysis of analog and digital meters, single-phase and three-phase power quality analyzers, illuminance mapping, 3-point Fall-of-Potential grounding, and energy metering.',
    summaryId: 'Pengoperasian dan analisis ketidakpastian alat ukur analog dan digital, analisis daya 1 fasa & kualitas daya 3 fasa, tingkat pencahayaan (lux), resistansi pentanahan 3-titik, serta konsumsi energi.',
    modules: [
      {
        num: 1,
        checkpoint: 'EMAS / Pre-test',
        titleEn: 'Pre-test – Fundamentals of Electrical Measurement',
        titleId: 'Pre-test – Dasar Pengukuran Besaran Listrik',
        descEn: 'Accuracy, precision, resolution, systematic/random error propagation, and CAT III/IV instrument safety standards.',
        descId: 'Akurasi, presisi, resolusi, perambatan galat ukur sistematis/acak, dan kategori keselamatan alat ukur CAT III/IV.',
        instruments: 'Module 1 Handbook (Dasar Pengukuran Besaran Listrik)',
        reportRuleEn: 'Schedule & resources placeholder (online assessments run via UI EMAS).',
        reportRuleId: 'Jadwal & materi pre-test (jika daring, melalui EMAS UI).'
      },
      {
        num: 2,
        checkpoint: 'Combined Report M2&3',
        titleEn: 'Analog Electrical Measurement',
        titleId: 'Pengukuran Analog',
        descEn: 'PMMC d’Arsonval movement, parallax correction, Ω/V sensitivity rating, and voltmeter loading effect calculation.',
        descId: 'Mekanisme kumparan putar PMMC, koreksi paralaks, sensitivitas Ω/V, dan efek pembebanan voltmeter analog.',
        instruments: 'Analog Voltmeter, Analog Ammeter, Variable R/L/C Decade Box',
        reportRuleEn: 'Combined with Module 3 report checkpoint.',
        reportRuleId: 'Tergabung dalam checkpoint laporan Modul 2&3.'
      },
      {
        num: 3,
        checkpoint: 'Combined Report M2&3',
        titleEn: 'Digital Electrical Measurement',
        titleId: 'Pengukuran Digital',
        descEn: 'True-RMS vs. average-responding multimeters, ADC resolution digits, crest factor, and non-invasive Hall/CT clamp meters.',
        descId: 'Multimeter digital True-RMS vs rata-rata, resolusi digit ADC, crest factor, dan pengukuran arus dengan tang amper.',
        instruments: 'Fluke 15B MAX Digital Multimeter, Digital Clamp Meter, LCR Meter',
        reportRuleEn: 'Submitted following attendance and QnA verification.',
        reportRuleId: 'Dikumpulkan setelah kehadiran dan nilai QnA tercatat.'
      },
      {
        num: 4,
        checkpoint: 'Combined Report M4&5',
        titleEn: 'Single-Phase Active, Reactive & Apparent Power',
        titleId: 'Pengukuran Daya 1 Fasa',
        descEn: 'Electrodynamic wattmeter current/potential coil wiring, power triangle (P, Q, S), and capacitor bank PF correction.',
        descId: 'Pengawatan kumparan arus dan tegangan wattmeter elektrodinamis, segitiga daya (P, Q, S), dan perbaikan cos φ.',
        instruments: 'Electrodynamic Wattmeter, Digital Power Meter, R-L-C Load Bank',
        reportRuleEn: 'Combined with Module 5 in the Power & Power Quality report.',
        reportRuleId: 'Digabung bersama Modul 5 dalam laporan Daya & Kualitas Daya.'
      },
      {
        num: 5,
        checkpoint: 'Combined Report M4&5',
        titleEn: 'Power Quality & Three-Phase Power Measurement',
        titleId: 'Kualitas Daya dan Pengukuran Daya 3 Fasa',
        descEn: '1P2W & 3P3W Aron two-wattmeter methods, IEEE 1159 disturbances (sag, swell, transients), and IEEE 519 THD limits.',
        descId: 'Metode pengukuran 1P2W & 3P3W dua wattmeter Aron, 7 gangguan kualitas daya IEEE 1159, dan harmonisa THD IEEE 519.',
        instruments: 'Three-Phase Power Quality Analyzer (PQA), CT Clamps, Non-Linear Loads',
        reportRuleEn: 'Submitted before next calendar day at 23:59 WIB.',
        reportRuleId: 'Batas pengumpulan H+1 pukul 23.59 WIB.'
      },
      {
        num: 6,
        checkpoint: 'Individual Report M6',
        titleEn: 'Illuminance & Lighting Level Measurement',
        titleId: 'Pengukuran Tingkat Pencahayaan',
        descEn: 'Cosine-corrected lux meter grid sampling, room index calculation, luminous efficacy, and SNI lighting compliance.',
        descId: 'Pemetaan grid intensitas pencahayaan ruangan dengan lux meter, perhitungan indeks ruang, dan evaluasi standar SNI.',
        instruments: 'Digital Lux Meter, Measuring Tape, Luminaire Test Grid',
        reportRuleEn: 'Individual PDF report due next calendar day at 23:59 WIB.',
        reportRuleId: 'Laporan PDF mandiri dengan tenggat H+1 pukul 23.59 WIB.'
      },
      {
        num: 7,
        checkpoint: 'Individual Report M7',
        titleEn: 'Earthing / Grounding Resistance Measurement',
        titleId: 'Pengukuran Resistansi Pentanahan',
        descEn: 'Three-Point Fall-of-Potential (FOP) method, IEEE Std 81 61.8% probe rule, soil stratification, and PUIL < 5 Ω threshold.',
        descId: 'Metode 3-Titik Fall-of-Potential (FOP), kaidah jarak probe 61,8% IEEE Std 81, stratifikasi tanah, dan syarat PUIL < 5 Ω.',
        instruments: 'Hioki / Fluke 3-Pole Digital Earth Tester, Auxiliary Spikes P & C',
        reportRuleEn: 'Individual PDF report with FOP plateau curve verification.',
        reportRuleId: 'Laporan PDF mandiri dilengkapi verifikasi kurva plateau FOP.'
      },
      {
        num: 8,
        checkpoint: 'Individual Report M8',
        titleEn: 'Electrical Energy Consumption Metering',
        titleId: 'Pengukuran Konsumsi Energi',
        descEn: 'Electromechanical induction disk vs. electronic smart kWh meters, rev/kWh constant calibration, and tariff auditing.',
        descId: 'Perbandingan kWh meter induksi dan elektronik, kalibrasi konstanta putaran/impuls per kWh, dan audit energi.',
        instruments: 'kWh Energy Meter Test Bench, Variable Load Bank, Power Meter',
        reportRuleEn: 'Final individual IDP report before the IDP Post-test.',
        reportRuleId: 'Laporan mandiri terakhir sebelum Post-test IDP.'
      }
    ]
  },
  t3: {
    nameEn: 'Teknik Tegangan & Arus Tinggi (High Voltage Engineering)',
    nameId: 'Teknik Tegangan dan Arus Tinggi (T3)',
    meta: 'SEMESTER 7 · POWER STREAM · IEC 60060 & IEC 60052',
    summaryEn: 'Generation and precision measurement of AC, DC, and lightning Impulse high voltages, coupled with dielectric breakdown testing of air, transformer oil, and solid high-voltage insulators.',
    summaryId: 'Pembangkitan dan pengukuran Tegangan Tinggi AC, DC, dan Impuls petir, disertai pengujian ketahanan dielektrik isolasi udara, minyak transformator, dan isolator zat padat.',
    modules: [
      {
        num: 1,
        checkpoint: 'Safety Orientation',
        titleEn: 'Introduction to High Voltage & High Current Engineering',
        titleId: 'Pengantar Teknik Tegangan dan Arus Tinggi',
        descEn: 'Faraday cage door interlocks, manual earthing discharge rod operation, clearance rules, and HV test hall discipline.',
        descId: 'Interlock sangkar Faraday, prosedur tongkat pentanahan (earthing stick), jarak aman, dan disiplin ruang uji TT.',
        instruments: 'Earthing Discharge Rod, Interlock Safety Cage, HV Control Console',
        reportRuleEn: 'Mandatory safety qualification prior to HV energization.',
        reportRuleId: 'Kualifikasi keselamatan wajib sebelum pengoperasian tegangan tinggi.'
      },
      {
        num: 2,
        checkpoint: 'HV Lab Session',
        titleEn: 'Generation & Measurement of AC High Voltage',
        titleId: 'Pembangkitan dan Pengukuran Tegangan Tinggi AC',
        descEn: 'HV step-up testing transformers, capacitive voltage dividers, crest voltmeters, and IEC 60052 sphere-gap calibration.',
        descId: 'Transformator uji penaik tegangan, pembagi tegangan kapasitif, voltmeter puncak, dan kalibrasi sela bola IEC 60052.',
        instruments: 'HV AC Test Transformer, Capacitive Divider, Calibrated Sphere Gap',
        reportRuleEn: 'High-voltage laboratory log and calibration curve analysis.',
        reportRuleId: 'Catatan data uji laboratorium dan analisis kurva kalibrasi.'
      },
      {
        num: 3,
        checkpoint: 'HV Lab Session',
        titleEn: 'Generation & Measurement of DC High Voltage',
        titleId: 'Pembangkitan dan Pengukuran Tegangan Tinggi DC',
        descEn: 'Half-wave and Cockcroft-Walton voltage multiplier cascades, ripple factor vs. load current, and resistive dividers.',
        descId: 'Penyearah setengah gelombang dan pengganda tegangan Cockcroft-Walton, faktor riak (ripple), dan pembagi resistif.',
        instruments: 'HV Diode Rectifier Stack, Smoothing Capacitors, Resistive Divider',
        reportRuleEn: 'High-voltage laboratory log and ripple regulation analysis.',
        reportRuleId: 'Catatan data uji laboratorium dan analisis regulasi tegangan DC.'
      },
      {
        num: 4,
        checkpoint: 'HV Lab Session',
        titleEn: 'Generation & Measurement of Impulse High Voltage',
        titleId: 'Pembangkitan dan Pengukuran Tegangan Tinggi Impuls',
        descEn: 'Marx generator parallel charging and series spark-gap firing to synthesize standard 1.2/50 μs lightning impulses.',
        descId: 'Generator Marx (pengisian paralel, pelepasan sela seri) untuk membangkitkan gelombang impuls petir 1,2/50 μs.',
        instruments: 'Marx Impulse Generator, Trigger Gap, Impulse Divider & Oscilloscope',
        reportRuleEn: 'Front time T1 and tail time T2 waveform evaluation.',
        reportRuleId: 'Evaluasi bentuk gelombang waktu muka T1 dan waktu paruh ekor T2.'
      },
      {
        num: 5,
        checkpoint: 'HV Lab Session',
        titleEn: 'AC Air Insulation Breakdown Testing',
        titleId: 'Pengujian Isolasi Udara AC',
        descEn: 'Townsend and streamer breakdown across uniform (sphere-sphere) and non-uniform (needle-plane) air gaps with air density correction.',
        descId: 'Mekanisme tembus udara pada medan seragam (bola-bola) dan tak seragam (jarum-plat) dengan faktor koreksi kerapatan udara.',
        instruments: 'Sphere, Needle & Plane Electrodes, Barometer, Hygrometer',
        reportRuleEn: 'Breakdown voltage V_b vs. gap spacing d characteristic plot.',
        reportRuleId: 'Plot karakteristik tegangan tembus V_b terhadap jarak sela d.'
      },
      {
        num: 6,
        checkpoint: 'HV Lab Session',
        titleEn: 'Liquid Dielectric Insulation Testing',
        titleId: 'Pengujian Isolasi Zat Cair',
        descEn: 'Dielectric breakdown voltage (BDV) testing of transformer mineral oil per IEC 60156 across a 2.5 mm VDE electrode gap.',
        descId: 'Pengujian tegangan tembus (BDV) minyak isolasi transformator sesuai IEC 60156 pada celah elektroda 2,5 mm.',
        instruments: 'Automatic Liquid Dielectric Oil Tester, VDE Oil Test Vessel',
        reportRuleEn: 'Mean breakdown voltage and standard deviation over 6 shots.',
        reportRuleId: 'Perhitungan rata-rata tegangan tembus dan standar deviasi 6 uji.'
      },
      {
        num: 7,
        checkpoint: 'HV Lab Session',
        titleEn: 'Solid Dielectric Insulation Testing',
        titleId: 'Pengujian Isolasi Zat Padat',
        descEn: 'Dry and wet surface flashover, creepage tracking, and puncture strength of porcelain, glass, and polymeric insulators.',
        descId: 'Pengujian lewat-denyar (flashover) kering/basah, jarak rambat (creepage), dan tembus isolator porselen, kaca, dan polimer.',
        instruments: 'HV Insulator Test Stand, Solid Dielectric Discs, Leakage Monitor',
        reportRuleEn: 'Dry vs. wet flashover performance comparison.',
        reportRuleId: 'Perbandingan performa tegangan lewat-denyar kondisi kering dan basah.'
      },
      {
        num: 8,
        checkpoint: 'Final Assessment',
        titleEn: 'High Voltage & High Current Post-Test',
        titleId: 'Post-test Teknik Tegangan dan Arus Tinggi',
        descEn: 'Comprehensive final assessment covering HV generation, IEC measurement standards, and insulation coordination.',
        descId: 'Evaluasi akhir komprehensif mencakup pembangkitan TT, standar pengukuran IEC, dan koordinasi isolasi.',
        instruments: 'Written & Oral Examination',
        reportRuleEn: 'Final checkpoint concluding the T3 practicum track.',
        reportRuleId: 'Checkpoint penutup rangkaian Praktikum Teknik Tegangan dan Arus Tinggi.'
      }
    ]
  }
};

const INSTRUMENTS_DATA = [
  {
    code: 'INST-01 // DMM',
    tracks: ['RL', 'IDP'],
    nameEn: 'Fluke 15B MAX Digital Multimeter',
    nameId: 'Multimeter Digital Fluke 15B MAX',
    descEn: 'Primary benchtop digital multimeter across RL and IDP for AC/DC voltage, current, resistance, capacitance, and continuity verification.',
    descId: 'Multimeter digital utama praktikum RL dan IDP untuk pengukuran tegangan AC/DC, arus, resistansi, kapasitansi, dan kontinuitas.',
    noteEn: 'Protocol: Probe voltage in parallel, current in series. Disconnect source power before measuring resistance.',
    noteId: 'Protokol: Ukur tegangan secara paralel, arus secara seri. Matikan sumber daya sebelum mengukur resistansi.'
  },
  {
    code: 'INST-02 // PQA',
    tracks: ['IDP'],
    nameEn: 'Three-Phase Power Quality Analyzer',
    nameId: 'Power Quality Analyzer Tiga Fasa',
    descEn: 'Real-time clamp-on analyzer capturing active/reactive/apparent power (P, Q, S), power factor, harmonic spectrum (THD), and IEEE 1159 sags/swells.',
    descId: 'Penganalisis kualitas daya waktu-nyata untuk mengukur P, Q, S, faktor daya, spektrum harmonik (THD), serta gangguan IEEE 1159.',
    noteEn: 'Protocol: Orient current clamp arrows from source toward load on all phases (1P2W / 3P3W / 3P4W).',
    noteId: 'Protokol: Arahkan panah tang arus (CT) dari sisi sumber menuju beban pada seluruh konduktor fasa.'
  },
  {
    code: 'INST-03 // FOP',
    tracks: ['IDP'],
    nameEn: 'Hioki / Fluke 3-Pole Digital Earth Tester',
    nameId: 'Earth Tester Digital 3-Kutub (FOP)',
    descEn: 'Injects 128 Hz switched test current into current spike C and senses potential at spike P to measure earthing resistance R_E.',
    descId: 'Menginjeksikan arus uji ke elektroda bantu C dan mengukur potensial di elektroda P untuk menentukan resistansi pentanahan R_E.',
    noteEn: 'Protocol: Drive auxiliary probe P at 61.8% of current probe distance D along a straight line.',
    noteId: 'Protokol: Tancapkan elektroda potensial P pada jarak 61,8% dari jarak elektroda arus D secara segaris.'
  },
  {
    code: 'INST-04 // HV-SET',
    tracks: ['T3'],
    nameEn: 'High-Voltage AC / DC / Impulse Test System',
    nameId: 'Sistem Uji Tegangan Tinggi AC / DC / Impuls',
    descEn: 'High-voltage hall apparatus comprising step-up testing transformers, Cockcroft-Walton rectifiers, Marx impulse stages, and IEC 60052 sphere gaps.',
    descId: 'Perangkat ruang uji tegangan tinggi mencakup trafo uji, penyearah pengganda tegangan, generator impuls Marx, dan sela bola IEC 60052.',
    noteEn: 'Protocol: Engage Faraday cage interlocks and discharge all HV capacitors with the grounding rod after testing.',
    noteId: 'Protokol: Pastikan interlock sangkar Faraday terkunci dan buang muatan sisa dengan tongkat pentanahan.'
  },
  {
    code: 'INST-05 // DSO',
    tracks: ['RL', 'T3'],
    nameEn: 'Digital Storage Oscilloscope',
    nameId: 'Osiloskop Penyimpanan Digital',
    descEn: 'Dual/quad-channel time-domain waveform acquisition for RLC phase angle measurement, transient response, and impulse waveshapes.',
    descId: 'Akuisisi gelombang domain waktu untuk pengukuran beda fasa RLC, respons transien, dan bentuk gelombang impuls.',
    noteEn: 'Protocol: Match probe attenuation (1x / 10x) and verify common BNC ground reference before probing.',
    noteId: 'Protokol: Sesuaikan faktor atenuasi probe (1x / 10x) dan periksa titik referensi ground bersama BNC.'
  },
  {
    code: 'INST-06 // WATTMETER',
    tracks: ['IDP', 'RL'],
    nameEn: 'Electrodynamic Wattmeter & Power Meter',
    nameId: 'Wattmeter Elektrodinamis & Power Meter',
    descEn: 'Four-terminal electrodynamic and digital wattmeters for single-phase and two-wattmeter Aron three-phase power measurement.',
    descId: 'Wattmeter empat terminal untuk pengukuran daya aktif 1 fasa serta metode dua wattmeter Aron pada sistem 3 fasa.',
    noteEn: 'Protocol: Connect the current coil in series and potential coil in parallel, observing ± generator-side polarity.',
    noteId: 'Protokol: Hubungkan kumparan arus secara seri dan kumparan tegangan secara paralel sesuai tanda polaritas ±.'
  },
  {
    code: 'INST-07 // LCR',
    tracks: ['RL', 'IDP'],
    nameEn: 'Precision Digital LCR Meter',
    nameId: 'LCR Meter Digital Presisi',
    descEn: 'Measures inductance (L), capacitance (C), series/parallel resistance (R), quality factor (Q), and dissipation factor (D).',
    descId: 'Mengukur nilai induktansi (L), kapasitansi (C), resistansi (R), faktor kualitas (Q), dan faktor disipasi (D).',
    noteEn: 'Protocol: Short-circuit and discharge capacitor terminals prior to insertion into the LCR test fixture.',
    noteId: 'Protokol: Kosongkan muatan kapasitor terlebih dahulu sebelum dipasang pada terminal uji LCR.'
  },
  {
    code: 'INST-08 // LUX & RLC',
    tracks: ['IDP', 'RL'],
    nameEn: 'Digital Lux Meter & Decade R/L/C Load Banks',
    nameId: 'Lux Meter Digital & Beban Variabel R/L/C',
    descEn: 'Cosine-corrected silicon lux meter for SNI room illuminance mapping alongside calibrated resistive, inductive, and capacitive load banks.',
    descId: 'Lux meter terkoreksi kosinus untuk pemetaan pencahayaan SNI beserta modul beban resistif, induktif, dan kapasitif variabel.',
    noteEn: 'Protocol: Position lux sensor horizontally at 0.75 m workplane height; observe current limits on decade boxes.',
    noteId: 'Protokol: Letakkan sensor lux mendatar setinggi 0,75 m; patuhi batas arus maksimum tiap langkah beban.'
  }
];

const ARCHIVE_ASSISTANTS = [
  { name: 'Adrian Idham Alfarizi', code: 'AD', batch: 'Elektro 23', img: 'assets/people/adrian-idham-alfarizi.jpg', pos: '35% top' },
  { name: 'M. Fathoni', code: 'FT', batch: 'Elektro 23', img: 'assets/people/m-fathoni.jpg', pos: 'center top' },
  { name: 'Faddlin Alwan Hanafi H.', code: 'FN', batch: 'Elektro 23', img: 'assets/people/faddlin-alwan-hanafi.jpg', pos: 'center top' },
  { name: 'Alshandra Aurelya Walangadi', code: 'AL', batch: 'Elektro 23', img: 'assets/people/alshandra-aurelya.jpg', pos: 'center top' },
  { name: 'Rafandra Gifarrel Maritza A.', code: 'FR', batch: 'Elektro 23', img: 'assets/people/rafandra-gifarrel.jpg', pos: '75% top' },
  { name: 'Muhammad Gavin Jericho', code: 'VI', batch: 'Elektro 23', img: 'assets/people/muhammad-gavin-jericho.jpg', pos: 'center top' },
  { name: 'Belva Alisha Alam', code: 'BL', batch: 'Elektro 22', img: 'assets/people/belva-alisha.jpg', pos: 'center top' },
  { name: 'Daffa Arbika', code: 'DF', batch: 'Elektro 22', img: 'assets/people/daffa-arbika.jpg', pos: 'center top' },
  { name: 'Mochamad Raihan Triadi', code: 'RH', batch: 'Elektro 22', img: 'assets/people/mochamad-raihan.jpg', pos: 'center top' },
  { name: 'Fawwaz Niko Hadisatrio', code: 'FH', batch: 'Elektro 22', img: 'assets/people/fawwaz-niko.jpg', pos: 'center top' },
  { name: 'Muhammad Hanif Mawla', code: 'HN', batch: 'Elektro 22', img: 'assets/people/muhammad-hanif.jpg', pos: 'center top' }
];

/* ---------- Runtime State ---------- */
let currentLang = localStorage.getItem('ttpl-mono-lang') || 'en';
let currentTheme = localStorage.getItem('ttpl-mono-theme') || 'light';
let activeTrack = 'rl';
let heroWaveMode = 'ac50';
let heroWaveRunning = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let heroPhase = 0;
let hvFlashFrames = 0;
let hvCapturedArc = false;

/* ==========================================================================
   1. THEME & LANGUAGE ENGINE
   ========================================================================== */
function setTheme(theme) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = currentTheme;
  localStorage.setItem('ttpl-mono-theme', currentTheme);
  const label = document.getElementById('theme-label');
  if (label) {
    label.textContent = currentTheme === 'light' ? 'NIGHT' : 'PAPER';
  }
}

function setLanguage(lang) {
  currentLang = lang in I18N ? lang : 'en';
  document.documentElement.dataset.lang = currentLang;
  document.documentElement.lang = currentLang;
  localStorage.setItem('ttpl-mono-lang', currentLang);

  const dict = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) el.innerHTML = dict[k];
  });

  const activeEl = document.getElementById('lang-active');
  const inactiveEl = document.getElementById('lang-inactive');
  if (activeEl && inactiveEl) {
    activeEl.textContent = currentLang.toUpperCase();
    inactiveEl.textContent = currentLang === 'en' ? 'ID' : 'EN';
  }

  renderSyllabus(activeTrack);
  renderInstruments();
}

/* ==========================================================================
   2. HERO PRECISION OSCILLOSCOPE CANVAS
   ========================================================================== */
function initHeroScope() {
  const canvas = document.getElementById('hero-scope-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const titleEl = document.getElementById('hero-scope-title');
  const formulaEl = document.getElementById('hero-scope-formula');
  const pauseBtn = document.getElementById('hero-wave-pause');

  function updateMeta() {
    if (heroWaveMode === 'ac50') {
      titleEl.textContent = '50 Hz GRID · 220 Vrms / 311 Vpk';
      formulaEl.textContent = 'v(t) = 311.1 sin(100πt) V · IEEE 1159 NOMINAL';
    } else if (heroWaveMode === 'impulse') {
      titleEl.textContent = 'MARX IMPULSE · 240 kVpk (1.2/50 μs)';
      formulaEl.textContent = 'v(t) = V₀ [exp(-αt) - exp(-βt)] · IEC 60060';
    } else {
      titleEl.textContent = '3-PHASE BALANCED · 380 V_LL (120° SHIFT)';
      formulaEl.textContent = 'v_R, v_S (-120°), v_T (+120°) · SYMMETRICAL';
    }
  }

  function renderFrame() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Precision Graticule
    ctx.strokeStyle = 'rgba(145, 195, 235, 0.12)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 52) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += 31.5) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Zero axis
    ctx.strokeStyle = 'rgba(145, 195, 235, 0.28)';
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    if (heroWaveMode === 'ac50') {
      // Voltage v(t) in gold, Current i(t) in cyan
      ctx.strokeStyle = '#ffc72c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const theta = (x / w) * Math.PI * 4 + heroPhase;
        const y = h / 2 - Math.sin(theta) * 44;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#4ea1f3';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const theta = (x / w) * Math.PI * 4 + heroPhase - 0.42;
        const y = h / 2 - Math.sin(theta) * 28;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } else if (heroWaveMode === 'impulse') {
      // Standard double-exponential lightning impulse v(t) = A*(e^-at - e^-bt)
      ctx.strokeStyle = '#ffc72c';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      const shift = ((heroPhase * 18) % 90);
      for (let x = 0; x <= w; x += 2) {
        const u = (x - 28) / w;
        let y = h - 22;
        if (u > 0) {
          const val = 1.08 * (Math.exp(-u * 4.2) - Math.exp(-u * 48));
          const osc = Math.exp(-u * 25) * Math.sin(u * 140 + shift) * 0.03;
          y = h - 22 - (val + osc) * 86;
        }
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } else {
      // 3-Phase R, S, T
      const phases = [
        { offset: 0, color: '#ffc72c' },
        { offset: (-2 * Math.PI) / 3, color: '#4ea1f3' },
        { offset: (2 * Math.PI) / 3, color: '#3ad29f' }
      ];
      phases.forEach((p) => {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const theta = (x / w) * Math.PI * 4 + heroPhase + p.offset;
          const y = h / 2 - Math.sin(theta) * 42;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    }
  }

  function loop() {
    if (heroWaveRunning) {
      heroPhase += 0.045;
      renderFrame();
    }
    requestAnimationFrame(loop);
  }

  document.querySelectorAll('.mini-tab[data-wave]').forEach((btn) => {
    btn.addEventListener('click', () => {
      heroWaveMode = btn.dataset.wave;
      document.querySelectorAll('.mini-tab[data-wave]').forEach((b) => b.classList.toggle('active', b === btn));
      updateMeta();
      renderFrame();
    });
  });

  pauseBtn?.addEventListener('click', () => {
    heroWaveRunning = !heroWaveRunning;
    pauseBtn.textContent = heroWaveRunning ? 'Pause' : 'Play';
  });

  updateMeta();
  renderFrame();
  requestAnimationFrame(loop);
}

/* ==========================================================================
   3. LATEX-STYLE BOOKTABS PRACTICUM SYLLABUS & DIALOG
   ========================================================================== */
function renderSyllabus(trackKey) {
  activeTrack = trackKey;
  const track = TRACKS_DATA[trackKey];
  if (!track) return;
  const isId = currentLang === 'id';

  document.querySelectorAll('.track-btn').forEach((btn) => {
    const selected = btn.dataset.track === trackKey;
    btn.classList.toggle('active', selected);
    btn.setAttribute('aria-selected', String(selected));
  });

  const panel = document.getElementById('syllabus-panel');
  if (panel) panel.setAttribute('aria-labelledby', `tab-${trackKey}`);

  document.getElementById('sheet-track-name').textContent = isId ? track.nameId : track.nameEn;
  document.getElementById('sheet-track-code').textContent = track.meta;
  document.getElementById('sheet-track-summary').textContent = isId ? track.summaryId : track.summaryEn;

  const specLabel = I18N[currentLang]['common.spec'];
  const tbody = document.getElementById('syllabus-tbody');
  if (!tbody) return;

  tbody.innerHTML = track.modules
    .map((m) => {
      const title = isId ? m.titleId : m.titleEn;
      const desc = isId ? m.descId : m.descEn;
      return `
        <tr data-track="${trackKey}" data-mod="${m.num}" tabindex="0" role="button" aria-label="${title}">
          <td class="mono"><strong>MOD 0${m.num}</strong></td>
          <td>
            <strong>${title}</strong>
            <span class="mod-desc">${desc}</span>
          </td>
          <td><span class="check-tag">${m.checkpoint}</span></td>
          <td class="right"><span class="row-open-btn">${specLabel}</span></td>
        </tr>
      `;
    })
    .join('');

  tbody.querySelectorAll('tr').forEach((row) => {
    const openHandler = () => openModuleDialog(row.dataset.track, Number(row.dataset.mod));
    row.addEventListener('click', openHandler);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHandler();
      }
    });
  });
}

/* Top-Layer Dialog Helpers with Modern Web Guidance Discrete Display Probing */
let supportsDisplayTransition;
function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  supportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit() {
  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
}

async function closeTopLayer(dialog) {
  if (!dialog || !dialog.open) return;
  if (!supportsTopLayerExit()) {
    dialog.setAttribute('data-closing', '');
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((r) => setTimeout(r, 2000))
      ]);
    }
    if (!dialog.hasAttribute('data-closing')) return;
    dialog.removeAttribute('data-closing');
  }
  dialog.close();
}

function openModuleDialog(trackKey, modNum) {
  const track = TRACKS_DATA[trackKey];
  const mod = track?.modules.find((m) => m.num === modNum);
  const dialog = document.getElementById('detail-dialog');
  if (!mod || !dialog) return;

  const isId = currentLang === 'id';
  document.getElementById('dialog-eyebrow').textContent = `${trackKey.toUpperCase()} · MODULE 0${mod.num} · ${mod.checkpoint.toUpperCase()}`;
  document.getElementById('dialog-title').textContent = isId ? mod.titleId : mod.titleEn;

  document.getElementById('dialog-body').innerHTML = `
    <p>${isId ? mod.descId : mod.descEn}</p>
    <div class="dialog-spec-grid">
      <div class="dialog-spec-box">
        <span>${isId ? 'Instrumen & Peralatan' : 'Laboratory Apparatus'}</span>
        <strong>${mod.instruments}</strong>
      </div>
      <div class="dialog-spec-box">
        <span>${isId ? 'Ketentuan Laporan' : 'Submission Checkpoint'}</span>
        <strong>${isId ? mod.reportRuleId : mod.reportRuleEn}</strong>
      </div>
    </div>
    <ul class="dialog-checklist">
      <li>${isId ? 'Pelajari Dasar Teori pada modul PDF dwibahasa dan selesaikan Tugas Pendahuluan (TP).' : 'Review theoretical foundations in the bilingual PDF module and complete pre-lab tasks (TP).'}</li>
      <li>${isId ? 'Tonton video demonstrasi instrumen pada playlist YouTube resmi TTPL FTUI.' : 'Watch the official apparatus briefing on the TTPL FTUI YouTube playlist.'}</li>
      <li>${isId ? 'Pastikan kehadiran dan nilai QnA dicatat oleh asisten untuk membuka akses unggah laporan.' : 'Verify that attendance and QnA scores are recorded by your assistant to unlock report upload.'}</li>
    </ul>
  `;
  dialog.showModal();
}

function openLightboxDialog(src, title) {
  const dialog = document.getElementById('detail-dialog');
  if (!dialog) return;
  document.getElementById('dialog-eyebrow').textContent = 'TTPL ENGINEERING PLATE';
  document.getElementById('dialog-title').textContent = title;
  document.getElementById('dialog-body').innerHTML = `
    <img src="${src}" alt="${title}" class="dialog-lightbox-img">
  `;
  dialog.showModal();
}

/* ==========================================================================
   4. SCIENTIFIC ENGINEERING BENCH (3 HTML5 CANVAS SIMULATORS)
   ========================================================================== */
function initScientificBench() {
  document.querySelectorAll('.bench-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const sim = tab.dataset.sim;
      document.querySelectorAll('.bench-tab').forEach((t) => {
        const active = t.dataset.sim === sim;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('.bench-panel').forEach((p) => {
        const match = p.id === `bpanel-${sim}`;
        p.classList.toggle('active', match);
        p.hidden = !match;
      });
      drawFopPlot();
      drawHvPlot();
      drawPowerPlot();
    });
  });

  /* --- BENCH 1: 3-POINT FALL-OF-POTENTIAL GROUNDING (IEEE Std 81) --- */
  const fopCanvas = document.getElementById('fop-canvas');
  const fopRho = document.getElementById('fop-rho');
  const fopLen = document.getElementById('fop-len');
  const fopPct = document.getElementById('fop-pct');

  function calcTrueRe(rho, len) {
    // Dwight formula for single vertical driven rod of radius a = 0.008 m (16mm dia)
    const a = 0.008;
    return (rho / (2 * Math.PI * len)) * (Math.log((4 * len) / a) - 1);
  }

  function calcFopCurve(rho, len, pct) {
    const re = calcTrueRe(rho, len);
    const u = pct / 100;
    const dropNearE = -0.58 * re * Math.exp(-u / 0.115);
    const riseNearC = 0.92 * re * Math.exp(-(1 - u) / 0.082);
    return re + dropNearE + riseNearC;
  }

  function drawFopPlot() {
    if (!fopCanvas) return;
    const ctx = fopCanvas.getContext('2d');
    const w = fopCanvas.width;
    const h = fopCanvas.height;

    const rho = Number(fopRho.value);
    const len = Number(fopLen.value);
    const pct = Number(fopPct.value);
    const distM = (pct / 100) * 40;
    const trueRe = calcTrueRe(rho, len);
    const rx = calcFopCurve(rho, len, pct);
    const errPct = (Math.abs(rx - trueRe) / trueRe) * 100;
    const inPlateau = pct >= 52 && pct <= 72;

    document.getElementById('fop-rho-out').textContent = `${rho} Ω·m`;
    document.getElementById('fop-len-out').textContent = `${len.toFixed(1)} m`;
    document.getElementById('fop-pct-out').textContent = `${pct.toFixed(1)}% (${distM.toFixed(1)} m)`;
    document.getElementById('fop-rx').textContent = `${rx.toFixed(2)} Ω`;
    document.getElementById('fop-re').textContent = `${trueRe.toFixed(2)} Ω`;
    document.getElementById('fop-err').textContent = `${errPct.toFixed(2)}%`;
    document.getElementById('fop-puil').textContent = trueRe < 5 ? 'PASS (< 5 Ω)' : 'Add Parallel Rods';

    const badge = document.getElementById('fop-badge');
    badge.className = `status-tag ${inPlateau ? 'ok' : 'warn'}`;
    badge.textContent = inPlateau ? 'IEEE 52%–72% PLATEAU VALID' : 'OUTSIDE PLATEAU ZONE';

    ctx.clearRect(0, 0, w, h);
    const padL = 56;
    const padR = 24;
    const padT = 28;
    const padB = 42;
    const pw = w - padL - padR;
    const ph = h - padT - padB;
    const yMax = Math.max(60, Math.ceil((trueRe * 1.9) / 10) * 10);

    const xToPx = (p) => padL + (p / 100) * pw;
    const yToPx = (r) => padT + ph - Math.min(1.05, Math.max(0, r / yMax)) * ph;

    // Shaded 52%-72% IEEE Plateau Zone
    const x52 = xToPx(52);
    const x72 = xToPx(72);
    ctx.fillStyle = 'rgba(58, 210, 159, 0.11)';
    ctx.fillRect(x52, padT, x72 - x52, ph);
    ctx.strokeStyle = 'rgba(58, 210, 159, 0.35)';
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(x52, padT, x72 - x52, ph);
    ctx.setLineDash([]);

    // Grid lines
    ctx.strokeStyle = 'rgba(145, 195, 235, 0.13)';
    ctx.lineWidth = 1;
    ctx.font = '11px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#8ab0ce';

    for (let i = 0; i <= 4; i++) {
      const rVal = (yMax / 4) * i;
      const y = yToPx(rVal);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + pw, y);
      ctx.stroke();
      ctx.fillText(`${rVal.toFixed(0)}Ω`, 12, y + 4);
    }

    for (let m = 0; m <= 40; m += 10) {
      const x = xToPx((m / 40) * 100);
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + ph);
      ctx.stroke();
      ctx.fillText(`${m}m`, x - 10, padT + ph + 20);
    }

    // True R_E dashed horizontal reference
    const yRe = yToPx(trueRe);
    ctx.strokeStyle = 'rgba(255, 199, 44, 0.7)';
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(padL, yRe);
    ctx.lineTo(padL + pw, yRe);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ffc72c';
    ctx.fillText(`True R_E = ${trueRe.toFixed(2)} Ω`, padL + 10, yRe - 7);

    // 61.8% Vertical Line
    const x618 = xToPx(61.8);
    ctx.strokeStyle = 'rgba(58, 210, 159, 0.75)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(x618, padT);
    ctx.lineTo(x618, padT + ph);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#4be3ae';
    ctx.fillText('61.8% (24.7m)', x618 - 38, padT + 15);

    // FOP S-Curve R(x)
    ctx.strokeStyle = '#4ea1f3';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let p = 4; p <= 96; p += 1) {
      const x = xToPx(p);
      const y = yToPx(calcFopCurve(rho, len, p));
      if (p === 4) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Live Probe P Marker
    const mx = xToPx(pct);
    const my = yToPx(rx);
    ctx.strokeStyle = '#ffc72c';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(mx, padT);
    ctx.lineTo(mx, padT + ph);
    ctx.stroke();

    ctx.fillStyle = '#ffc72c';
    ctx.beginPath();
    ctx.arc(mx, my, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#08121e';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  [fopRho, fopLen, fopPct].forEach((el) => el?.addEventListener('input', drawFopPlot));
  document.querySelectorAll('[data-fop-snap]').forEach((btn) => {
    btn.addEventListener('click', () => {
      fopPct.value = btn.dataset.fopSnap;
      document.querySelectorAll('[data-fop-snap]').forEach((b) => b.classList.toggle('active', b === btn));
      drawFopPlot();
    });
  });

  /* --- BENCH 2: IEC 60052 SPHERE GAP BREAKDOWN --- */
  const hvCanvas = document.getElementById('hv-canvas');
  const hvV = document.getElementById('hv-v');
  const hvD = document.getElementById('hv-d');
  const hvFireBtn = document.getElementById('hv-fire-btn');
  const hvAudioChk = document.getElementById('hv-audio-chk');

  function playHvSparkSound() {
    if (!hvAudioChk?.checked) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.14, ctx.sampleRate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const flt = ctx.createBiquadFilter();
      flt.type = 'bandpass';
      flt.frequency.value = 1700;
      flt.Q.value = 3;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.8, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);
      src.connect(flt);
      flt.connect(gain);
      gain.connect(ctx.destination);
      src.start();
    } catch (_) {
      // ignore
    }
  }

  function drawHvPlot() {
    if (!hvCanvas) return;
    const ctx = hvCanvas.getContext('2d');
    const w = hvCanvas.width;
    const h = hvCanvas.height;

    const v = Number(hvV.value);
    const d = Number(hvD.value);
    const eField = v / d;
    const vb = d * 30;
    const breakdown = eField >= 30;

    document.getElementById('hv-v-out').textContent = `${v} kV`;
    document.getElementById('hv-d-out').textContent = `${d.toFixed(1)} cm`;
    document.getElementById('hv-e-out').textContent = `${eField.toFixed(1)} kV/cm`;
    document.getElementById('hv-vb-out').textContent = `${vb.toFixed(0)} kV`;
    document.getElementById('hv-state-out').textContent = breakdown ? 'Breakdown Ready' : 'Insulated';

    const badge = document.getElementById('hv-badge');
    badge.className = `status-tag ${breakdown ? 'crit' : 'ok'}`;
    badge.textContent = breakdown ? 'CRITICAL (E ≥ 30 kV/cm)' : 'DIELECTRIC INSULATED';
    if (hvFireBtn) hvFireBtn.disabled = !breakdown;

    ctx.clearRect(0, 0, w, h);

    // Left Half: V_b(d) Characteristic Plot
    const padL = 52;
    const pw = 270;
    const padT = 28;
    const ph = h - 70;

    ctx.strokeStyle = 'rgba(145, 195, 235, 0.14)';
    ctx.lineWidth = 1;
    ctx.font = '10.5px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#8ab0ce';

    for (let kv = 0; kv <= 500; kv += 100) {
      const y = padT + ph - (kv / 500) * ph;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + pw, y);
      ctx.stroke();
      ctx.fillText(`${kv}kV`, 8, y + 3);
    }

    for (let cm = 0; cm <= 15; cm += 5) {
      const x = padL + (cm / 15) * pw;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + ph);
      ctx.stroke();
      ctx.fillText(`${cm}cm`, x - 12, padT + ph + 18);
    }

    // Breakdown threshold line V_b = 30 * d
    ctx.strokeStyle = '#ff6b81';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padL, padT + ph);
    ctx.lineTo(padL + pw, padT + ph - (450 / 500) * ph);
    ctx.stroke();
    ctx.fillStyle = '#ff6b81';
    ctx.fillText('V_b = 30 kV/cm · d', padL + 12, padT + 18);

    // Current Operating Point (d, V)
    const opX = padL + (d / 15) * pw;
    const opY = padT + ph - (v / 500) * ph;
    ctx.fillStyle = breakdown ? '#ffc72c' : '#4ea1f3';
    ctx.beginPath();
    ctx.arc(opX, opY, 5.5, 0, Math.PI * 2);
    ctx.fill();

    // Right Half: Sphere-Gap Chamber Visualization
    const chX = 355;
    const chW = 260;
    const chY = 28;
    const chH = ph;
    const cy = chY + chH / 2;
    const cx = chX + chW / 2;

    ctx.strokeStyle = 'rgba(145, 195, 235, 0.25)';
    ctx.strokeRect(chX, chY, chW, chH);

    const halfGap = (d / 15) * 68 + 10;
    const rSphere = 26;
    const leftSx = cx - halfGap - rSphere;
    const rightSx = cx + halfGap + rSphere;

    // Conductive rods
    ctx.strokeStyle = '#607d9c';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(chX, cy);
    ctx.lineTo(leftSx, cy);
    ctx.moveTo(rightSx, cy);
    ctx.lineTo(chX + chW, cy);
    ctx.stroke();

    // Brass / Steel Calibration Spheres
    [leftSx, rightSx].forEach((sx) => {
      const grad = ctx.createRadialGradient(sx - 8, cy - 8, 3, sx, cy, rSphere);
      grad.addColorStop(0, '#c8d8e8');
      grad.addColorStop(0.55, '#4b6580');
      grad.addColorStop(1, '#1a2838');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sx, cy, rSphere, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#8ab0ce';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Corona / Electric Field Lines
    if (breakdown || hvFlashFrames > 0) {
      ctx.fillStyle = 'rgba(255, 199, 44, 0.14)';
      ctx.beginPath();
      ctx.arc(cx, cy, halfGap + 14, 0, Math.PI * 2);
      ctx.fill();
    }

    // Active or Captured Flashover Arc
    if (hvFlashFrames > 0 || (hvCapturedArc && breakdown)) {
      const xStart = leftSx + rSphere;
      const xEnd = rightSx - rSphere;
      ctx.strokeStyle = '#ffc72c';
      ctx.lineWidth = 3.2;
      ctx.beginPath();
      ctx.moveTo(xStart, cy);
      const segs = 8;
      for (let i = 1; i < segs; i++) {
        const px = xStart + ((xEnd - xStart) * i) / segs;
        const jitter = hvFlashFrames > 0 ? (Math.random() * 2 - 1) * 16 : Math.sin(i * 2.3) * 11;
        ctx.lineTo(px, cy + jitter);
      }
      ctx.lineTo(xEnd, cy);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }

    ctx.fillStyle = '#8ab0ce';
    ctx.fillText(`GAP d = ${d.toFixed(1)} cm · E = ${eField.toFixed(1)} kV/cm`, chX + 24, chY + chH + 18);
  }

  hvFireBtn?.addEventListener('click', () => {
    playHvSparkSound();
    hvCapturedArc = true;
    hvFlashFrames = 8;
    const timer = setInterval(() => {
      drawHvPlot();
      hvFlashFrames--;
      if (hvFlashFrames <= 0) {
        clearInterval(timer);
        drawHvPlot();
      }
    }, 60);
  });

  [hvV, hvD].forEach((el) =>
    el?.addEventListener('input', () => {
      hvCapturedArc = false;
      drawHvPlot();
    })
  );

  /* --- BENCH 3: AC POWER TRIANGLE & POWER FACTOR (MODUL 4 & 5 IDP) --- */
  const pwrCanvas = document.getElementById('power-canvas');
  const pfV = document.getElementById('pf-v');
  const pfI = document.getElementById('pf-i');
  const pfPhi = document.getElementById('pf-phi');

  function drawPowerPlot() {
    if (!pwrCanvas) return;
    const ctx = pwrCanvas.getContext('2d');
    const w = pwrCanvas.width;
    const h = pwrCanvas.height;

    const vrms = Number(pfV.value);
    const irms = Number(pfI.value);
    const phiDeg = Number(pfPhi.value);
    const phiRad = (phiDeg * Math.PI) / 180;

    const sVA = vrms * irms;
    const cosPhi = Math.cos(phiRad);
    const pW = sVA * cosPhi;
    const qVAR = sVA * Math.sin(phiRad);
    const plnOk = cosPhi >= 0.85;

    const modeLabel = phiDeg > 0 ? 'Lagging (Inductive)' : phiDeg < 0 ? 'Leading (Capacitive)' : 'Unity (Resistive)';
    document.getElementById('pf-v-out').textContent = `${vrms} V`;
    document.getElementById('pf-i-out').textContent = `${irms.toFixed(1)} A`;
    document.getElementById('pf-phi-out').textContent = `${phiDeg > 0 ? '+' : ''}${phiDeg}° (${modeLabel})`;

    document.getElementById('pf-p-out').textContent = `${pW.toFixed(0)} W`;
    document.getElementById('pf-q-out').textContent = `${qVAR >= 0 ? '+' : ''}${qVAR.toFixed(0)} VAR`;
    document.getElementById('pf-s-out').textContent = `${sVA.toFixed(0)} VA`;
    document.getElementById('pf-cos-out').textContent = cosPhi.toFixed(3);

    const badge = document.getElementById('pf-badge');
    badge.className = `status-tag ${plnOk ? 'ok' : 'warn'}`;
    badge.textContent = plnOk ? `PLN COMPLIANT (cos φ = ${cosPhi.toFixed(2)} ≥ 0.85)` : `kVARh PENALTY (cos φ = ${cosPhi.toFixed(2)} < 0.85)`;

    ctx.clearRect(0, 0, w, h);

    // Left Half: Instantaneous v(t), i(t), and p(t)
    const padL = 24;
    const pw = 320;
    const cy = h / 2;

    ctx.strokeStyle = 'rgba(145, 195, 235, 0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, cy);
    ctx.lineTo(padL + pw, cy);
    ctx.stroke();

    // Instantaneous Power p(t) shaded fill
    ctx.fillStyle = 'rgba(58, 210, 159, 0.14)';
    ctx.strokeStyle = '#3ad29f';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(padL, cy);
    for (let x = 0; x <= pw; x += 2) {
      const wt = (x / pw) * Math.PI * 2;
      const vInst = Math.sin(wt);
      const iInst = Math.sin(wt - phiRad);
      const pInst = vInst * iInst;
      const y = cy - pInst * 85;
      ctx.lineTo(padL + x, y);
    }
    ctx.lineTo(padL + pw, cy);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // v(t) in Gold
    ctx.strokeStyle = '#ffc72c';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (let x = 0; x <= pw; x += 2) {
      const wt = (x / pw) * Math.PI * 2;
      const y = cy - Math.sin(wt) * 65;
      if (x === 0) ctx.moveTo(padL + x, y);
      else ctx.lineTo(padL + x, y);
    }
    ctx.stroke();

    // i(t) in Blue
    ctx.strokeStyle = '#4ea1f3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const iScale = 25 + (irms / 30) * 40;
    for (let x = 0; x <= pw; x += 2) {
      const wt = (x / pw) * Math.PI * 2;
      const y = cy - Math.sin(wt - phiRad) * iScale;
      if (x === 0) ctx.moveTo(padL + x, y);
      else ctx.lineTo(padL + x, y);
    }
    ctx.stroke();

    ctx.font = '10.5px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#ffc72c';
    ctx.fillText('v(t)', padL + 8, 28);
    ctx.fillStyle = '#4ea1f3';
    ctx.fillText('i(t)', padL + 48, 28);
    ctx.fillStyle = '#3ad29f';
    ctx.fillText('p(t) = v(t)·i(t)', padL + 88, 28);

    // Right Half: Vector Power Triangle (P, Q, S)
    const ox = 390;
    const oy = cy + 35;
    const maxScale = 190 / Math.max(2200, sVA);
    const pxLen = pW * maxScale;
    const qyLen = -qVAR * maxScale;

    // P vector (Horizontal)
    ctx.strokeStyle = '#3ad29f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + pxLen, oy);
    ctx.stroke();

    // Q vector (Vertical)
    ctx.strokeStyle = '#4ea1f3';
    ctx.beginPath();
    ctx.moveTo(ox + pxLen, oy);
    ctx.lineTo(ox + pxLen, oy + qyLen);
    ctx.stroke();

    // S vector (Hypotenuse)
    ctx.strokeStyle = '#ffc72c';
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + pxLen, oy + qyLen);
    ctx.stroke();

    ctx.fillStyle = '#3ad29f';
    ctx.fillText(`P = ${pW.toFixed(0)} W`, ox + pxLen / 2 - 30, oy + 18);
    ctx.fillStyle = '#4ea1f3';
    ctx.fillText(`Q = ${qVAR.toFixed(0)} VAR`, ox + pxLen + 8, oy + qyLen / 2);
    ctx.fillStyle = '#ffc72c';
    ctx.fillText(`S = ${sVA.toFixed(0)} VA`, ox + pxLen / 2 - 40, oy + qyLen / 2 - 10);
  }

  [pfV, pfI, pfPhi].forEach((el) => el?.addEventListener('input', drawPowerPlot));

  drawFopPlot();
  drawHvPlot();
  drawPowerPlot();
}

/* ==========================================================================
   5. INSTRUMENTS LEDGER & ASSISTANT CONTACT SHEET
   ========================================================================== */
function renderInstruments() {
  const container = document.getElementById('instrument-ledger');
  if (!container) return;
  const isId = currentLang === 'id';

  container.innerHTML = INSTRUMENTS_DATA.map(
    (item) => `
      <article class="inst-entry">
        <div>
          <div class="inst-head">
            <span class="inst-id">${item.code}</span>
            <div class="inst-tags">
              ${item.tracks.map((t) => `<span>${t}</span>`).join('')}
            </div>
          </div>
          <h3>${isId ? item.nameId : item.nameEn}</h3>
          <p>${isId ? item.descId : item.descEn}</p>
        </div>
        <div class="inst-note">${isId ? item.noteId : item.noteEn}</div>
      </article>
    `
  ).join('');
}

function renderAssistantArchive(filter = 'all') {
  const grid = document.getElementById('archive-grid');
  if (!grid) return;

  document.querySelectorAll('.filter-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.batch === filter);
  });

  const items = filter === 'all' ? ARCHIVE_ASSISTANTS : ARCHIVE_ASSISTANTS.filter((a) => a.batch === filter);
  grid.innerHTML = items
    .map(
      (person) => `
      <figure class="portrait-frame">
        <img src="${person.img}" alt="${person.name} — ${person.batch}" loading="lazy" style="object-position: ${person.pos || 'center top'}">
        <figcaption>
          <span>${person.batch} · ${person.code}</span>
          <strong>${person.name}</strong>
        </figcaption>
      </figure>
    `
    )
    .join('');
}

/* ==========================================================================
   6. MODERN WEB GUIDANCE PROGRESSIVE ENHANCEMENTS & FALLBACKS
   ========================================================================== */
function initModernWebFallbacks() {
  const noReducedMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  /* 1. Scroll Progress Indicator Fallback */
  if (!window.CSS?.supports?.('animation-timeline', 'scroll()') && noReducedMotion) {
    const bar = document.getElementById('scroll-progress');
    if (bar) {
      window.addEventListener(
        'scroll',
        () => {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = max > 0 ? window.scrollY / max : 0;
          bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
        },
        { passive: true }
      );
    }
  }

  /* 2. Scroll Entry Reveal Fallback */
  if (!window.CSS?.supports?.('(animation-timeline: view()) and (animation-range: entry)') && noReducedMotion) {
    const items = document.querySelectorAll('.reveal');
    items.forEach((el) => el.classList.add('io-hidden'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('io-visible');
            entry.target.classList.remove('io-hidden');
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* 3. Scrollspy ARIA Sync + IntersectionObserver Fallback */
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section[id]');

  if (window.CSS?.supports?.('scroll-target-group: auto')) {
    const syncAriaCurrent = () => {
      const currentLink = document.querySelector('.nav-links a:target-current');
      navLinks.forEach((link) => {
        link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
      });
    };
    syncAriaCurrent();
    document.addEventListener('scrollend', syncAriaCurrent, { passive: true });
  } else {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const active = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('target-current', active);
              link.setAttribute('aria-current', String(active));
            });
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* 4. Dialog Light-Dismiss (<dialog closedby="any">) & Top-Layer Exit Animation Fallback */
  const dialog = document.getElementById('detail-dialog');
  if (dialog) {
    document.getElementById('dialog-close-btn')?.addEventListener('click', () => closeTopLayer(dialog));
    document.getElementById('dialog-dismiss-btn')?.addEventListener('click', () => closeTopLayer(dialog));

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeTopLayer(dialog);
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const inside =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!inside) closeTopLayer(dialog);
      });
    }
  }
}

/* ==========================================================================
   7. BOOTSTRAP
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLanguage(currentLang);
  renderAssistantArchive('all');
  initHeroScope();
  initScientificBench();
  initModernWebFallbacks();

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
  });

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navBox = document.getElementById('nav-links');
  mobileBtn?.addEventListener('click', () => {
    const open = navBox.classList.toggle('open');
    mobileBtn.setAttribute('aria-expanded', String(open));
  });
  navBox?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navBox.classList.remove('open');
      mobileBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.track-btn').forEach((btn) => {
    btn.addEventListener('click', () => renderSyllabus(btn.dataset.track));
  });

  document.querySelectorAll('.filter-tab').forEach((btn) => {
    btn.addEventListener('click', () => renderAssistantArchive(btn.dataset.batch));
  });

  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openLightboxDialog(btn.dataset.lightbox, btn.dataset.lightboxTitle || 'Laboratorium TTPL FTUI');
    });
  });

  const copyBtn = document.getElementById('copy-email-btn');
  copyBtn?.addEventListener('click', async () => {
    const email = copyBtn.dataset.copy;
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = I18N[currentLang]['contact.copied'];
      setTimeout(() => {
        copyBtn.textContent = I18N[currentLang]['contact.copy'];
      }, 1600);
    } catch (_) {
      window.location.href = `mailto:${email}`;
    }
  });
});
