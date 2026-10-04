# Contributing to Open Talk 🚀

Welcome! We are excited that you want to contribute to **Open Talk**, an open-source opinion sharing & discussion platform built for the **GDG On Campus (GDGOC) Open Source Sprint**.

Whether you are fixing a typo, resolving a bug, or building a major feature, your help is appreciated!

---

## 🧭 Code of Conduct
- Be respectful and welcoming to contributors of all experience levels.
- Provide constructive feedback in PR reviews and discussions.
- Follow our coding standards and repository structure.

---

## 🛠 Tech Stack Overview
- **Web Frontend**: React.js (JavaScript + Vite + Tailwind CSS + Lucide Icons) in `apps/web/`
- **Mobile Client**: Flutter (Dart) in `apps/mobile/`
- **Backend & Security**: Firebase (Cloud Firestore, Storage, Cloud Functions) in `firebase/`
- **Shared Schemas & Contracts**: Data models in `packages/shared/`

---

## 🌿 How to Contribute

### 1. Find an Issue
- Browse through our [Issues](../../issues) tab.
- Look for labels:
  - `good first issue` – Great for first-time contributors!
  - `gdgoc-sprint` – Official sprint milestone tasks.
  - `help wanted` – Tasks needing community expertise.
- Comment on the issue to get assigned before starting work.

### 2. Branch Naming Conventions
Create a descriptive branch off of `main`:
- `feat/<feature-name>` (e.g. `feat/threaded-debate-reply`)
- `fix/<bug-name>` (e.g. `fix/mobile-card-overflow`)
- `docs/<doc-update>` (e.g. `docs/setup-guide-update`)
- `refactor/<module-name>` (e.g. `refactor/auth-context`)

### 3. Commit Message Standards
We follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat(web): add side-by-side stance counter widget
fix(functions): prevent double-increment on post reactions
docs(readme): clarify firebase emulator ports
```

### 4. Submitting a Pull Request
1. Ensure your code is formatted and error-free.
2. Push your branch to GitHub and open a Pull Request against `main`.
3. Fill out the PR template with screenshots and issue reference (e.g., `Closes #12`).
4. Wait for a review from the GDGOC maintainers team.

---

## 💬 Need Help?
If you have questions or get stuck with Firebase emulators or Flutter setup, ask in our GDGOC Discord / Slack community channels!
