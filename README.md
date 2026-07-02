# IDRiS-ShIttU — Next.js Portfolio App

A clean Next.js portfolio app with automated deployment via GitHub Actions → Vercel.

---

## 🚀 Setup Instructions (Step by Step)

### 1. Create the GitHub Repository

1. Go to [github.com](https://github.com) → click **New repository**
2. Name it: `idris-shittu-app`
3. Set to **Public**
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

---

### 2. Push Code to GitHub

Open your terminal and run:

```bash
# Navigate into the project folder
cd idris-shittu-app

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial Next.js app setup"

# Add your GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/idris-shittu-app.git

# Push to main
git branch -M main
git push -u origin main
```

---

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **Add New Project**
3. Import your `idris-shittu-app` repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy** — your app goes live!

---

### 4. Add GitHub Actions Secrets (for CI/CD pipeline)

After Vercel deploys, you need 3 secrets in GitHub:

#### Get your Vercel credentials:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link to your project (run inside the project folder)
vercel link
```

This creates a `.vercel/project.json` file — open it to find:
- `projectId` → this is your **VERCEL_PROJECT_ID**
- `orgId` → this is your **VERCEL_ORG_ID**

#### Get your Vercel Token:
1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **Create Token** → name it `github-actions`
3. Copy the token → this is your **VERCEL_TOKEN**

#### Add secrets to GitHub:
1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add all three:
   - `VERCEL_TOKEN` → paste your token
   - `VERCEL_ORG_ID` → paste your org ID
   - `VERCEL_PROJECT_ID` → paste your project ID

---

### 5. Test the Pipeline

Push any change to `main`:

```bash
git add .
git commit -m "test: trigger deployment pipeline"
git push
```

Go to your GitHub repo → **Actions** tab → watch the pipeline run.  
You'll see: **✅ Deployment to Vercel was SUCCESSFUL!**

---

## 🗂 Project Structure

```
idris-shittu-app/
├── app/
│   ├── globals.css       # All styles
│   ├── layout.js         # Root layout + metadata
│   └── page.js           # Main page
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions pipeline
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🛠 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
