# BUILD AND DEPLOYMENT GUIDE — EMBER & ORIGIN

This guide provides end-to-end instructions for running, testing, building, and deploying the EMBER & ORIGIN website.

---

## 1. Local Development & Verification

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Automated Unit Tests
```bash
npx tsx --test src/utils/brewingCalculator.test.ts
```

### Step 3: Start the Vite Dev Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your web browser.

### Step 4: Run Type-Checking & Linting
```bash
npm run lint
```

### Step 5: Test the Production Build
```bash
npm run build
npm run preview
```

---

## 2. GitHub Repository Deployment

1. Initialize git and commit the codebase:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Ember & Origin 3D coffee experience"
   ```
2. Create a repository on GitHub (e.g. `ember-and-origin`).
3. Link and push your branch:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/ember-and-origin.git
   git push -u origin main
   ```

---

## 3. Vercel Deployment

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project** and select your GitHub repository `ember-and-origin`.
3. Configure the Project Settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.
5. Once deployed, test your live production URL on both mobile and desktop viewports.
