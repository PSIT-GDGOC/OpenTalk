# Open Talk – Opinion Sharing & Discussion Platform

[![Flutter](https://img.shields.io/badge/Flutter-3.19%2B-blue?logo=flutter)](https://flutter.dev)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev)
[![Firebase](https://img.shields.io/badge/Firebase-12.x-ffca28?logo=firebase)](https://firebase.google.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/PSIT-GDGOC/OpenTalk/pulls)
[![GDGOC Sprint](https://img.shields.io/badge/GDGOC%20Open%20Source%20Sprint-2026-6366f1)](https://gdg.community.dev/)

> **Open Talk** is an open-source, production-grade opinion sharing and discussion platform engineered for our **Google Developer Groups On Campus (GDGOC) Open Source Sprint**. It enables structured debates, real-time topic discovery, and community moderation across Web and Mobile clients.

---

## 🌟 Pitch & Core Features

- 🗳️ **Opinion Feeds & Stances**: Post and discover short, impactful perspectives categorised across technology, campus life, design, and career topics.
- 💬 **Threaded Debates**: Structured side-by-side discussion spaces supporting `Support`, `Counter`, and `Neutral` stance positions with nested replies.
- 🔥 **Trending Hubs**: Dynamic activity-weighted algorithms surfacing high-engagement discussions across community channels.
- 🛡️ **Automated Trust & Moderation**: Serverless Firebase Cloud Functions enforcing spam protection, content integrity, and community guidelines.
- 📱💻 **Multi-Client Architecture**: Unified cross-platform experience with a JavaScript React.js web client and a feature-first Flutter mobile application.

---

## 📂 Monorepo Structure Map

```
opentalk/
├── apps/
│   ├── web/                         # Web Client (React.js + Vite + Tailwind CSS + Lucide)
│   │   ├── public/                  # Static assets & favicon
│   │   └── src/
│   │       ├── assets/              # Web image assets & icons
│   │       ├── components/          # Reusable UI primitives (Navbar, Sidebar, Modals)
│   │       ├── context/             # React Contexts (AuthContext, ThemeContext)
│   │       ├── features/            # Feature-driven slices
│   │       │   ├── auth/            # Authentication & onboarding views
│   │       │   ├── debate/          # Threaded debate & argument trees
│   │       │   ├── feed/            # Post feeds & voting interactions
│   │       │   └── trending/        # Trending topics & discovery hub
│   │       ├── hooks/               # Custom reusable React hooks
│   │       ├── services/            # API & Firebase client service layer
│   │       ├── styles/              # Global CSS & Tailwind utilities
│   │       └── utils/               # Formatting & helper functions
│   │
│   └── mobile/                      # Mobile Client (Flutter targeting Android, iOS, & Web)
│       ├── assets/                  # Mobile icons and imagery
│       └── lib/
│           ├── core/                # Core theme, router, and network clients
│           ├── features/            # Feature-first modular architecture
│           │   ├── auth/            # Auth flows & user session state
│           │   ├── debate/          # Mobile debate screens & side selectors
│           │   ├── feed/            # Mobile infinite feeds & stance cards
│           │   └── trending/        # Trending lists & tag filters
│           └── shared/              # Reusable Flutter widgets & utility helpers
│
├── firebase/                        # Cloud Infrastructure & Security Rules
│   ├── functions/                   # Cloud Functions backend (TypeScript / Node.js)
│   │   └── src/                     # Moderation triggers & background jobs
│   ├── firestore.rules              # Granular database security rules
│   ├── storage.rules                # Media upload security rules
│   └── firebase.json                # Emulators & Firebase service orchestration
│
└── packages/
    └── shared/                      # Shared Contracts & Constants
        ├── constants/               # Topic categories & enum definitions
        └── schemas/                 # JSON Schemas for cross-platform contracts
```

---

## 🛠 Prerequisites

Before starting local development, make sure you have the following toolchains installed:

| Tool | Recommended Version | Description |
|---|---|---|
| **Node.js** | `>= 20.0.0` (LTS) | JavaScript Runtime |
| **npm** / **pnpm** | `>= 10.0.0` / `>= 9.0.0` | Package & Workspace Manager |
| **Flutter SDK** | `>= 3.19.0` | Cross-Platform Mobile SDK |
| **Dart SDK** | `>= 3.3.0` | Dart Language Engine |
| **Firebase CLI** | `>= 13.0.0` | Firebase Local Emulators & Deployments |
| **Git** | `>= 2.30.0` | Version Control System |

---

## 🚀 Step-by-Step Local Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/PSIT-GDGOC/OpenTalk.git
cd opentalk
```

### 2. Install Workspace Dependencies

```bash
# Install root and workspace dependencies
npm install
```

### 3. Configure Firebase & Local Emulators

```bash
# 1. Log into your Firebase account
firebase login

# 2. Configure Flutter Firebase bindings (inside apps/mobile)
cd apps/mobile
flutterfire configure
cd ../..

# 3. Start local Firebase Emulators (Auth, Firestore, Functions, Storage)
cd firebase
firebase emulators:start
```
> 💡 The Firebase Emulator Suite UI will be running live at **`http://localhost:4000`**.

### 4. Run the React Web App

In a separate terminal:
```bash
cd apps/web
npm run dev
```
> The React web app will be accessible at **`http://localhost:5173`** (or `http://localhost:3000`).

### 5. Run the Flutter Mobile App

In another terminal:
```bash
cd apps/mobile

# Run in Chrome for quick web preview
flutter run -d chrome

# Or run on connected Android device / iOS Simulator
flutter run
```

---

## 🤝 Contribution Guidelines (GDGOC Sprint)

We encourage students, campus leads, and open-source enthusiasts to contribute!

### 🌿 Git Branch Strategy
Always create a feature branch off of `main`:
- Features: `feat/<feature-name>` (e.g. `feat/trending-filter-bar`)
- Bug fixes: `fix/<issue-description>` (e.g. `fix/auth-token-refresh`)
- Documentation: `docs/<update>` (e.g. `docs/setup-troubleshooting`)
- Refactoring: `refactor/<module>` (e.g. `refactor/firestore-service`)

### 📝 Conventional Commits
All commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/) format:
```
feat(web): add side-by-side debate voting widget
fix(mobile): resolve safe-area padding on Android gesture navigation
docs(readme): add troubleshooting section for firebase emulators
```

### 🎯 Picking & Submitting Issues
1. Head over to the [Issues](../../issues) tab.
2. Look for issues labeled with **`good first issue`**, **`gdgoc-sprint`**, or **`hacktoberfest`**.
3. Comment on the issue to request assignment before starting work.
4. Submit a Pull Request linked to the issue (e.g., `Resolves #42`) and provide clear description and screenshots.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👥 Maintainers & Community

Maintained with ❤️ by the **GDG On Campus (GDGOC) Core Team & Community Contributors**.

For questions, discussions, or mentorship during the sprint, connect with us on the GDGOC community channel!
