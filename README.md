# EMBER & ORIGIN — Artisanal Fire-Roasted Specialty Coffee

> **"Where Fire Meets Coffee"**

EMBER & ORIGIN is a complete, production-ready, original website for a fictional specialty coffee roastery and tasting room. Built with React, TypeScript, Tailwind CSS, and Three.js, it translates the visual cadence, editorial layout rhythm, and section flow of a video reference into an original brand experience.

---

## ☕ Key Features

1. **Interactive 3D Ceramic Coffee Cup (Three.js)**
   - Sculptural hand-thrown stoneware cup with custom ceramic glaze finishes (Sandstone Glaze, Terracotta Ember, Obsidian Matte).
   - Real-time procedural crema surface with microfoam Rosetta latte art.
   - 3D roasted coffee beans resting on a slate coaster with contact shadows.
   - Rising volumetric steam particles with drift simulation.
   - Interactive camera angle presets (Hero 45°, Top Crema 90°, Close Rim) and collapsible bottom dock.
   - High-fidelity static photo fallback switch for low-power devices.

2. **Full Page Flow (Following Video Reference)**
   - **Announcement Bar**: Top utility strip with location, hours, and portfolio concept notice.
   - **Navigation Bar**: Strict 3-zone contract with brand wordmark, single-line links, and "Reserve Tasting" CTA.
   - **Split Hero**: Editorial typography, dual CTAs ("Explore Menu", "Book a Table"), and 3D coffee cup presentation.
   - **Benefit Strip**: 4 horizontal trust cards ("Freshly Brewed Coffee", "Food & Dessert Pairings", "Cozy Ambient Space", "High-Speed WiFi Access").
   - **Story Feature ("Why People Come Back")**: Split layout pairing roastery photography with a warm terracotta hours panel.
   - **Signature Beverage Cards ("Make Your Morning Better")**: 4 beverage cards with prices, tasting notes, and modal profile inspection.
   - **Daily Coffee Ritual**: Dark, photo-led editorial section with an interactive live coffee-to-water ratio calculator and extraction stopwatch.
   - **Collection & Dessert Grid**: 4-column filterable grid featuring single-origin espresso roasts, slow brews, and house desserts.
   - **Community Notes**: Three customer perspective cards clearly labeled as illustrative portfolio content.
   - **Newsletter Callout ("Join In & Get 15% Off")**: Validated email subscription with coupon code and explicit demo notification.
   - **Footer**: Brand identity, tasting room hours, navigation links, and mandatory portfolio disclaimer.

3. **Interactive Modals**
   - **Tasting Table Reservation**: Date, time, party size, and flight selection with instant confirmation.
   - **Product Flavor Profile Inspector**: Coffee terroir, altitude, process, tasting notes, and barista extraction specs.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (`@theme` tokens for typography and warm coffee palette)
- **3D Graphics**: Three.js (`WebGLRenderer`, `MeshPhysicalMaterial`, `CanvasTexture`, `LatheGeometry`, particle systems)
- **Icons**: Lucide React
- **Testing**: Node.js built-in test runner (`node:test`, `node:assert/strict`) via `tsx`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+ LTS
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ember-and-origin.git
cd ember-and-origin

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open `http://localhost:3000` to preview the site.

### Running Unit Tests

```bash
npx tsx --test src/utils/brewingCalculator.test.ts
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 📜 Portfolio Disclaimer

EMBER & ORIGIN is a fictional portfolio concept created for design and development demonstration. It is not affiliated with Brewista, Roastery Coffee House, or any existing commercial brand.
