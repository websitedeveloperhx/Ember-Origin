# MASTER BUILD PROMPT — ORIGINAL COFFEE WEBSITE FROM VIDEO REFERENCE
## For Google AI Studio Build mode | Desktop + Mobile | Complete working project

You are a senior creative director, UI/UX designer, motion designer, React/TypeScript engineer, and responsive frontend specialist. Build the actual working website—not a plan, not a static screenshot, and not only a homepage mockup.

## INPUTS AND ORDER OF AUTHORITY

The user will attach a short video showing a coffee-shop website scrolling from the top to the bottom. Treat that supplied video as the primary visual reference for the sequence of sections, overall composition, relative image/text placement, spacing rhythm, colors, card density, and footer structure.

The video is only about 4 seconds long and is low-resolution. Analyze every visible moment carefully. Extract representative frames or inspect the video frame-by-frame if the environment supports it. Do not pretend to see details that are too small to read. Where text or details are illegible, infer a sensible equivalent and document the assumption.

The goal is a faithful reconstruction of the *observed page-by-page structure and visual rhythm*, but this must still be an original portfolio project—not a deceptive clone of a real brand.

## ORIGINAL BRAND AND IP RULES

Create a new fictional coffee brand called **EMBER & ORIGIN**. It is an original portfolio concept and is not affiliated with Brewista, Roastery Coffee House, or any other existing business.

Do not reuse the reference site's logo, exact brand name, distinctive copy, or copyrighted product photos. Do not claim the video shows Ember & Origin. Reproduce the layout logic and section sequence from the video with original copy, original design details, and original or legally reusable images.

Use AI-generated illustrative coffee imagery or appropriately licensed stock assets. If using generated imagery, do not present it as an actual photograph of a real café. Create an original typographic logo/wordmark for EMBER & ORIGIN.

## VIDEO OBSERVATIONS — USE AS A STARTING MAP, VERIFY AGAINST ATTACHED VIDEO

The supplied video appears to show a desktop coffee website in a top-to-bottom scroll, with these visible sections:

1. A thin dark announcement / utility strip at the top.
2. A cream-colored main navigation row with logo at left, navigation links across the middle, and a dark rounded CTA at right.
3. A large split hero: headline and short supporting copy with buttons on the left; a large premium coffee-cup image on the right. A slim row of benefits/quick facts overlaps or sits below the hero.
4. A two-column brand/value section: plant/coffee imagery and a headline like “Why People Come Back” on the left, a warm terracotta panel with opening-hours-style information on the right.
5. A “Make Your Morning Better” menu area with four beverage cards in a horizontal row.
6. A darker, photo-led coffee section about a daily coffee ritual, with product/coffee imagery and editorial copy.
7. A product/collection grid with multiple coffee, beverage, dessert, or café imagery cards. Build a clean, balanced grid inspired by the video, not a pixel-perfect asset copy.
8. A customer-review/testimonial area with three light cards, star indicators, and short review text.
9. A newsletter / email sign-up callout with coffee-bean decoration.
10. A multi-column footer with brand details, navigation, contact/location links, and social links.

This map is provisional. The attached video itself takes precedence if it shows a different order or additional visible sections. Preserve the page's top-to-bottom order and broad proportions. Do not omit sections simply because the first screen looks complete.

## CREATIVE DIRECTION

Build a polished specialty-coffee site with:
- warm cream background
- espresso/dark brown text
- restrained terracotta/caramel accent
- olive/leaf green as a small secondary accent
- editorial serif headlines paired with a clean sans-serif body font
- rich coffee imagery
- clean grid and deliberate whitespace
- understated borders and rounded buttons/cards only where useful
- premium but welcoming tone

Do not copy the reference brand's exact logo, wording, or image assets. Use the video to understand layout and hierarchy, then art-direct an original design.

## RESPONSIVE REQUIREMENT — NON-NEGOTIABLE

The website must work well on desktop, tablet, and mobile. It must not be a desktop-only page or merely shrink the desktop canvas.

Test and deliberately design for:
- desktop 1440px
- laptop 1280px
- tablet 768px
- mobile 430px
- mobile 390px
- small mobile 360px

Responsive behavior:
- desktop: split hero, horizontal benefit strip, 4-card beverage row where space permits, balanced product grid
- tablet: adapt columns and card widths; keep text readable and images properly cropped
- mobile: stacked hero with readable text and coffee image, compact navigation with working hamburger menu, cards as a horizontal swipe row or stacked grid where appropriate, no tiny text, no clipped CTAs, no overflow
- avoid fixed heights that cut off content
- use responsive typography with clamp()
- make all touch targets comfortably tappable
- avoid hover-only interactions
- no horizontal page overflow at any supported width

## REQUIRED PAGE SECTIONS AND BEHAVIOR

### A. Announcement bar
A slim top strip with short original announcement copy. It can contain a delivery / coffee / opening note only if framed as concept content, not a real promise. Keep it discreet.

### B. Header/navigation
Original Ember & Origin wordmark. Links to Story, Menu, Coffee, Reviews, and Visit. Primary CTA such as “Explore the menu”. All links must work and scroll to the correct section. Mobile menu opens and closes correctly, closes after selecting a link, supports keyboard access, and has accessible labels.

### C. Hero
Use a strong headline such as “Make Room for a Better Coffee Ritual” or write an equally compelling original headline. Include a short supporting paragraph, primary and secondary CTA, and a large coffee image on the right (desktop) or below the copy (mobile). Add subtle entrance animation, but do not delay access to content. The hero should visually echo the video’s split composition without copying exact text or assets.

### D. Quick benefits / trust strip
Use 3–4 concise items with simple icons, e.g. thoughtfully roasted, made with care, seasonal favourites, welcoming spaces. These are fictional brand positioning statements; do not invent certifications, awards, sourcing guarantees, or real customer counts. Keep icons consistent and accessible.

### E. Story + hours-style feature panel
Create a split section with an atmospheric coffee/plant image and an original heading about why people return. Pair it with a warm terracotta/caramel panel containing a short brand statement and an optional “Visit the café” CTA. Since Ember & Origin is fictional, do not publish fabricated real opening hours or address. If a schedule-like visual is used, label it “Concept experience” or use “Your daily coffee ritual” rather than fake operational hours.

### F. Beverage cards
A heading such as “Find Your Next Favourite”. Create four cards with distinct original concept beverages, for example:
- Velvet Flat White
- Brown Sugar Latte
- Slow-Brew Cold Coffee
- Cocoa Cloud
Names and descriptions are fictional concept menu content. Do not claim these belong to Roastery or Brewista. Use original/generative/licensed images, consistent aspect ratios, concise descriptions, and clear buttons or tags. Cards should be keyboard accessible and mobile-friendly.

### G. Coffee ritual / editorial section
Use a dark or photo-led panel inspired by the video’s daily coffee section. Include one large visual, a short original headline, and a concise paragraph about slowing down and enjoying coffee. Do not make health claims or unsupported claims about origin/sourcing.

### H. Collection / product grid
Create a well-art-directed grid of 6–8 image cards. Mix beverage, coffee bean, brewing, pastry, and café atmosphere imagery. Use original titles and descriptions. If any product is conceptual, label it as such in content data. Do not implement fake purchasing or a nonfunctional cart. Buttons should scroll to menu or an optional concept product detail section.

### I. Testimonials
The video shows a three-card review-like section. Because this is a fictional brand, do not invent real customer testimonials or imply genuine reviews. Instead create three clearly labelled “Community notes — sample content” cards, or replace this with “The little things people love” and clearly mark all quotes as illustrative placeholder copy. Do not include fake Google review badges or fabricated star ratings presented as real.

### J. Newsletter
Create a tasteful email signup UI with input validation and success/error states. Since no backend is configured, the form must clearly behave as a demo: on valid submission, show “Demo form — no email was sent.” Do not collect or transmit personal information to a server. Include decorative coffee-bean imagery as CSS or an original asset.

### K. Footer
Include wordmark, section links, contact placeholder, social links only if real links exist (otherwise omit them or use clearly marked placeholders), and a concise portfolio disclaimer:
“EMBER & ORIGIN is a fictional portfolio concept created for design and development demonstration. It is not affiliated with any existing café brand.”
Do not use real business addresses or phone numbers for the fictional brand.

## IMAGERY AND ASSET HANDLING

The user cannot provide separate photos; the attached video is the visual reference. Source visuals yourself:
1. Prefer original AI-generated illustrative coffee images or properly licensed stock.
2. Do not scrape or reuse images from the reference site unless reuse rights explicitly permit it.
3. Do not use broken image URLs or leave placeholders in the finished page.
4. Avoid hotlinking; store assets locally where the environment allows.
5. Optimize images and use WebP/AVIF where practical.
6. Add useful alt text. Decorative images should have empty alt text.
7. If the environment cannot generate/download images, use CSS-generated visual treatments or well-designed local placeholders, and clearly state the limitation. Do not falsely claim all assets were sourced.

## MOTION AND INTERACTION

Use tasteful, lightweight motion:
- short hero reveal
- subtle image parallax where appropriate
- reveal-on-scroll for section headings/cards
- button hover/press states
- mobile menu animation
- optional subtle coffee-bean drift

Prefer CSS transitions or IntersectionObserver; use GSAP only if actually available and beneficial. Avoid scroll hijacking, long pinned sequences, autoplay sound, excessive particles, and animation that hurts readability or performance. Respect `prefers-reduced-motion`.

## TECH STACK AND PROJECT STRUCTURE

Use the stack supported by Google AI Studio Build. Prefer:
- React
- TypeScript
- Vite or the environment's supported app framework
- clean CSS or Tailwind if available
- Lucide icons or simple inline SVG icons

Create reusable components such as:
- AnnouncementBar
- Header
- Hero
- BenefitStrip
- StoryFeature
- BeverageCard
- CoffeeRitual
- CollectionGrid
- CommunityNotes
- NewsletterForm
- Footer

Keep content in data arrays where sensible. Keep code readable and maintainable. Do not put the entire application in a single unmaintainable component unless the platform forces it.

## ACCESSIBILITY, SEO, AND QUALITY

- semantic landmarks and heading order
- keyboard-accessible navigation
- visible focus styles
- sufficient color contrast
- descriptive alt text
- accessible form labels and errors
- reduced-motion support
- page title and meta description for the fictional brand
- no fake structured data for a real business
- no console errors that break the app
- no dead buttons or placeholder links that look functional
- no horizontal overflow
- no broken image assets

## BUILD, REVIEW, AND TEST

Do not stop after the first render. Complete this checklist:
1. Implement every section in the video map.
2. Inspect the full page from top to footer.
3. Compare the section order and overall composition against the attached video.
4. Fix spacing, typography, image crops, alignment, and card consistency.
5. Run the available build/type checks.
6. Fix all build errors and runtime errors you can reproduce.
7. Test mobile menu, section links, beverage cards, newsletter demo form, and CTAs.
8. Review at desktop and mobile widths.
9. Check reduced-motion behavior.
10. Verify every visible image loads.
11. Do not claim tests passed unless you actually ran them.

## DELIVERABLES

Provide:
- a complete working website in the AI Studio project
- all source files
- all local assets that can be redistributed
- `README.md` with setup/run/build instructions
- `ASSET_MANIFEST.md` with asset source/license/creation notes
- `DESIGN_DECISIONS.md` describing how the video sections were mapped to the original design
- `BUILD_AND_DEPLOY.md` with GitHub and Vercel instructions
- downloadable ZIP of the complete source project if the environment supports export

## FINAL EXECUTION RULE

Begin by inspecting the attached video. Map its top-to-bottom sections. Then implement the complete original EMBER & ORIGIN website using the section order and composition described above. Do not ask the user to upload individual photos. Do not stop at a plan, design explanation, or screenshot. Build, review, test, and provide the project files.
