# 🛡️ MaskME

**Disposable Digital Identity Generator** – A browser extension + backend system that lets users create temporary email aliases instead of sharing their real email during online sign-ups. This helps protect privacy, reduce spam, and avoid long-term tracking.

---

## 🎯 Overview

MaskME generates disposable email aliases on demand and delivers them through a clean browser extension interface.  
Behind the scenes, a Node.js + Express backend API creates unique aliases (like `user-a83f91@maskme.io`) which can later be extended with expiry rules, OTP handling, and database storage.

The goal is to provide:
- A simple, one-click way to mask your real identity
- A privacy-first alternative to using your personal email everywhere
- A foundation for a full privacy-preserving identity system (aliases, OTP, expiry, encryption, dashboard, etc.)

---

## ✨ Features

- Generate unique disposable email aliases
- React + Vite powered browser extension popup
- Live backend API integration using REST (Fetch)
- UUID-based random alias generation
- Clean full-stack separation: `frontend/`, `backend/`, `database/` (planned)
