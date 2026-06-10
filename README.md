# Ronan Angira - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](src/assets/profile-photo.png)

## 🚀 Technologies

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI Components
- **Lucide React** - Icons

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **bun**

To check your versions:
```bash
node --version
npm --version
```

---

## 🏠 Run Locally

### 1. Clone the repository

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
bun install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The app will be available at `http://localhost:5173`

---

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with static files ready for deployment.

### Preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment

### Deploy to Vercel

#### Option 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**

#### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify

#### Option 1: Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy"**

#### Option 2: Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json` scripts:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` with your repo name:
```ts
export default defineConfig({
  base: '/<REPO_NAME>/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages**
2. Click **"Create a project"** → **"Connect to Git"**
3. Select your repository
4. Set build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **"Save and Deploy"**

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

### Deploy to Render

1. Go to [render.com](https://render.com) and sign in
2. Click **"New"** → **"Static Site"**
3. Connect your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Create Static Site"**

---

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 250 85% 60%;
  --background: 220 20% 96%;
  /* ... */
}
```

### Updating Content

- **Hero Section:** `src/components/Hero.tsx`
- **About:** `src/components/About.tsx`
- **Experience:** `src/components/Experience.tsx`
- **Projects:** `src/components/Projects.tsx`
- **Skills:** `src/components/Skills.tsx`
- **Contact:** `src/components/Contact.tsx`

### Replacing Profile Photo

Replace `src/assets/profile-photo.png` with your own image.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📧 Contact

**Ronan Angira**
- GitHub: [@kareemblessed](https://github.com/kareemblessed)
- Dev.to: [kareemblessed](https://dev.to/kareemblessed)
