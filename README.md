# Joy Portfolio — Next.js Pro Edition

A more professional, research-oriented portfolio for **Md. Wadud Mahmud Joy** built with **Next.js App Router + TypeScript**.

## What changed

- fully redesigned from scratch instead of copying the old PDF layout
- dynamic hero with a canvas-based pseudo-3D ML network scene
- stronger CSE researcher / ML engineer positioning
- responsive navigation, theme toggle, animated stats, project filtering
- modern glassmorphism UI with hover spotlight effects
- content separated into `data/portfolio.ts` for easier editing

## Run locally

### 1) Open terminal in this folder

```powershell
cd "C:\Users\wadud\Downloads\joy_portfolio_nextjs_pro_v2"
```

### 2) Ensure Node.js is available

```powershell
node -v
npm.cmd -v
```

> On your machine, use `npm.cmd` in PowerShell if `npm` is blocked by execution policy.

### 3) Install and start

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`

## Quick Windows helper

You can also double-click `run-dev.cmd` after extracting the ZIP.

## Main files

- `app/page.tsx` → homepage layout
- `app/globals.css` → all styling
- `data/portfolio.ts` → portfolio content
- `components/HeroScene.tsx` → animated hero background
- `components/ProjectFilters.tsx` → interactive project filters

## Notes

- Edit text/content in `data/portfolio.ts`
- This project is intentionally kept dependency-light for easier setup
