# Fighters Combat Academy — Frontend (Vite + React)

Production-ready frontend for Fighters Combat Academy built with Vite, React, Tailwind CSS, Framer Motion, and Swiper.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

Visit: http://localhost:3000

### Build for Production
```bash
npm run build
npm run preview
```

## 📋 Deployment

### Deploy on Netlify

**Option 1: Netlify CLI (Recommended)**
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

**Option 2: GitHub Integration**
1. Push code to GitHub
2. Visit https://app.netlify.com
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **"Deploy site"** ✅

**Option 3: Manual Deployment**
1. Run `npm run build`
2. Drag the `dist` folder to https://app.netlify.com/drop

## 📝 Configuration

- `netlify.toml` — Build & deployment settings
- `package.json` — Node 20.x required
- `vite.config.js` — Optimized code splitting & chunking

## 🔧 Next Steps

- Replace mock JSON in `src/data/` with real API
- Update `src/services/api.js` to use axios with backend endpoints
- Add environment variables in Netlify Dashboard
- Configure custom domain in Netlify Settings

## 📦 Project Structure

```
src/
  ├── components/    # Reusable UI components
  ├── pages/         # Page components
  ├── services/      # API services
  ├── data/          # Mock JSON data
  ├── layouts/       # Layout wrappers
  ├── hooks/         # Custom React hooks
  └── animations/    # Framer Motion variants
```
