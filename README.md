# Laboratorium TTPL FTUI — Official Lab Introduction

Static, zero-dependency **HTML, CSS, and JavaScript** introduction website for **Laboratorium Tegangan Tinggi dan Pengukuran Listrik (TTPL)**, Departemen Teknik Elektro, Fakultas Teknik Universitas Indonesia (FTUI).

> **Surging With Voltage · `#UnleashYourPower`**

## Highlights

- **TTPL Monograph & LaTeX Design System**: Built directly from TTPL’s official LaTeX style tokens (`#00509E` Deep Blue, `#FFC72C` Golden Yellow, `#E6F0FA` Light Blue formula tint, `booktabs` tables, and double-rule dividers) with **Paper (Light)** default and **Night (Dark)** toggle.
- **Bilingual Support (EN / ID)**: Instant toggle between English (KKI) and Indonesian (Regular) across all sections, tables, instruments, and modal specifications.
- **Live Hero Oscilloscope**: Interactive HTML5 `<canvas>` trace switching between `50 Hz AC Grid`, `1.2/50 μs Marx Impulse`, and `3-Phase Balanced` waveforms with a Pause/Play control.
- **Interactive `booktabs` Practicum Syllabus**: Covers **Rangkaian Listrik (RL)**, **Instrumentasi & Pengukuran (IDP)**, and **Teknik Tegangan & Arus Tinggi (T3)** with clickable module specifications and a `SEP–DEC` semester Gantt calendar.
- **Scientific Simulation Bench (`<canvas>`)**:
  - **IDP Mod 07 — 3-Point Fall-of-Potential Grounding (IEEE Std 81)** with soil resistivity $\rho$, rod length $L$, and 52%–72% plateau verification.
  - **T3 Mod 05 — IEC 60052 Sphere-Gap Air Breakdown** ($V_b = 30\text{ kV/cm}\cdot d$) with flashover arc discharge and optional Web Audio spark synthesis.
  - **IDP Mod 04–05 — AC Power Triangle & PLN Power Factor ($\cos\varphi \ge 0.85$)**.
- **Research Artifacts, Team & Alumni**: Features `VirtualGroundLab` (MATLAB), PowerFactory SLD, 5-stage Open Recruitment schedule, active **Batch 2024** assistants, filterable **Elektro ’23 & ’22** archive, and 3-year alumni destinations.

## Preview Locally

Run a local static server inside `ttpl-lab-intro`:

```bash
# Option 1: Python
python -m http.server 8080

# Option 2: Node.js
npx serve . -l 8080
```

Then open `http://localhost:8080`.

## Push to GitHub & Deploy on GitHub Pages

```powershell
cd c:\Users\LENOVO\Documents\TTPL\ttpl-lab-intro
git init
git add .
git commit -m "Initial commit: Laboratorium TTPL FTUI introduction website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

To publish on GitHub Pages: **Repository Settings → Pages → Build and deployment → Source: Deploy from a branch (`main` / `/ (root)`)**.
