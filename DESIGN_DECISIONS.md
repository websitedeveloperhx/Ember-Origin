# DESIGN DECISIONS — VIDEO REFERENCE TO ORIGINAL PRODUCTION WEBSITE

## 1. Video Analysis & Structural Reconstruction

The reference video (`VN20261021_130912.mp4`) captures a rapid 4-second top-to-bottom scroll of an artisanal coffee shop website. Rather than copying the reference brand's proprietary assets or commercial identity, we extracted the structural cadence, layout balance, and content hierarchy to create an original brand: **EMBER & ORIGIN ("Where Fire Meets Coffee")**.

### Section-by-Section Mapping

| Video Observation | EMBER & ORIGIN Implementation | Originality & Enhancement |
|---|---|---|
| **00:00 — Top Utility Bar** | `AnnouncementBar.tsx` | Slim, dark espresso bar with district address, hours, contact, and concept badge. |
| **00:00 — Main Navigation** | `Header.tsx` | Clean 3-zone contract: Brand wordmark in Fraunces serif, 5 single-line navigation links, and "Reserve Tasting" action button. Mobile drawer with focus containment. |
| **00:00 — Split Hero** | `Hero.tsx` + `CoffeeScene3D.tsx` | Left: Bold editorial headline ("Start Your Day the Right Way"), dual CTAs ("Explore Menu", "Book a Table"). Right: Interactive 3D Three.js ceramic cup with live glaze switcher, crema latte art, and steam simulation. |
| **00:00 — Benefit Strip** | `BenefitStrip.tsx` | 4 horizontal trust cards below the hero fold, highlighting small-batch roasting, dessert pairings, cozy space, and high-speed WiFi. |
| **00:01 — Split Value / Hours Feature** | `StoryFeature.tsx` | Left: "Why People Come Back" with documentary roasting photography and story dialog. Right: Warm terracotta panel with daily hours (7 AM – 7 PM), cupping schedule, and directions CTA. |
| **00:01 — 4-Card Beverage Row** | `BeverageCards.tsx` | "Make Your Morning Better" headline with script accent. 4 signature beverages (Flat White, Caramel Latte, Cascara Cold Brew, Copper Mocha) with prices, flavor notes, and profile inspector. |
| **00:02 — Daily Coffee Ritual** | `CoffeeRitual.tsx` | Dark, photo-led moody cinematic section. Includes an interactive live brew calculator (calculates water volume from coffee dose) and extraction stopwatch. |
| **00:02 — Collection & Dessert Grid** | `CollectionGrid.tsx` | 8-item filterable grid with tabs ("All", "Espresso Roasts", "Filter & Cold Brew", "Artisan Desserts"). |
| **00:03 — Customer Review Cards** | `CommunityNotes.tsx` | 3 cards with 5-star ratings, quotes, and guest favorite drinks. Transparently marked as illustrative concept community notes. |
| **00:03 — Newsletter Callout** | `NewsletterForm.tsx` | "Join In & Get 15% Off" subscription card framed with coffee bean silhouettes, interactive email validation, and explicit "Demo form — no email sent" feedback. |
| **00:03 — Multi-Column Footer** | `Footer.tsx` | Brand wordmark, site links, tasting room location, daily cupping times, smooth back-to-top button, and clear portfolio disclaimer. |

---

## 2. Brand Identity & Visual Language

- **Brand Name**: EMBER & ORIGIN
- **Tagline**: *Where Fire Meets Coffee*
- **Color Palette**:
  - Dominant Neutral: Warm Cream (`#FBF8F3`, `#F4EFE7`)
  - Structural Dark: Espresso Brown (`#211612`, `#160E0A`)
  - Accent Color: Burnt Copper / Terracotta (`#C35B34`, `#A54420`)
  - Warm Highlights: Golden Amber (`#E29547`, `#FFDCB5`)
  - Organic Accent: Olive Leaf (`#58644A`)
- **Typography**:
  - Display / Headlines: `Fraunces` (Characterful optical serif)
  - Body & UI: `Plus Jakarta Sans` (Clean, contemporary geometric sans-serif)
  - Data / Metrics / Timer: `JetBrains Mono` with `tabular-nums`

---

## 3. Three.js 3D Craft Architecture

In compliance with the Three.js skill:
- **Procedural Model Assembly**: Built as a multi-part `THREE.Group` consisting of a lathed ceramic cup, toroidal ergonomic handle, slate coaster plate, circle crema surface, and 5 positioned 3D roasted coffee beans.
- **Dynamic Procedural Materials**: `MeshPhysicalMaterial` with adjustable clearcoat, roughness, and noise speckle bump maps.
- **Interactive Bottom Dock**: Angle selector (Hero, Crema, Rim), ceramic glaze switchers (Sandstone, Terracotta, Obsidian), and steam toggle.
- **Graceful Fallback**: Smooth transition to high-resolution studio photography for devices without WebGL.
- **Software WebGL Guard**: Detects CPU-rendered WebGL to avoid dropped frames.
