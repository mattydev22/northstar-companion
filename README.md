# NorthStar Companion

**Companion app frontend for the NorthStar Auth (NSA) hardware password vault.**

NorthStar Auth is a hardware-encrypted password manager built on the principle of physical sovereignty — *"Own your security, physically."* This repository contains the companion web app used to stage, manage, and securely push credentials to the NSA hardware device over USB.

> **Status:** Phase 1 — UI/UX Discovery · Academic Year 2026 · Lead: Owen Oliveira

---

## What is NorthStar Auth?

Traditional password managers have a software footprint: they touch your clipboard, sit in browser memory, or sync to the cloud. NSA eliminates that entirely.

The NSA device acts as a **USB Human Interface Device (HID)** — it emulates a keyboard and types your credentials directly into any target machine. Your passwords never touch the host computer's clipboard or unencrypted RAM.

This companion app is the **Loader**: a temporary, zero-knowledge bridge that lets you enter credentials into a local interface, encrypts them using a hardware-generated key, and pushes the encrypted payload to the NSA device over USB. Once the device is unplugged, no data persists anywhere.

---

## Features

| Screen | Description |
|---|---|
| **Welcome** | Landing page with project overview and hardware connection status |
| **Local Vault Dashboard** | Credential staging area — view, manage, and add entries before sync |
| **Add New Credential** | Modal form with icon picker, service name, username, and encrypted password field |
| **Secure Sync Modal** | Visualizes the AES-256-GCM encryption handshake during device push |
| **FAQ / Docs** | In-app documentation drawn from the project charter |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Routes

| Route | Page |
|---|---|
| `/` | Welcome screen |
| `/vault` | Local vault dashboard |
| `/faq` | FAQ & documentation |

---

## Project Structure

```
src/
  app/
    page.tsx              # Welcome / landing screen
    vault/page.tsx        # Vault dashboard (credential state owner)
    faq/page.tsx          # FAQ & project docs
    layout.tsx            # Root layout: dark bg, mono font
    globals.css           # Tailwind import only
  components/
    TopBar.tsx            # Logo + title + hardware status + nav links
    CredentialCard.tsx    # Single credential row with green left accent
    CredentialList.tsx    # Scrollable list, accepts credentials as props
    BottomActionBar.tsx   # INITIATE SYNC + Add New buttons
    Dashboard.tsx         # Assembles TopBar + CredentialList + BottomActionBar
    ProgressRing.tsx      # SVG circular progress ring
    TransferModal.tsx     # Secure sync overlay with beam animation
    AddCredentialModal.tsx# Add new credential form with icon picker
  types/
    credential.ts         # Credential interface + mock data + icon options
```

---

## Security Model

The companion app enforces a strict zero-knowledge, ephemeral-only policy:

- **No persistence** — credentials live in React state only. Nothing is written to disk or localStorage.
- **AES-256-GCM** — all data is encrypted before it leaves the companion app and travels over USB to the device.
- **Hardware-generated key** — the encryption key never leaves the NSA device. The companion app cannot decrypt the vault on its own.
- **RAM wipe on disconnect** — the NSA device zeroes all in-memory credential data immediately upon USB disconnection.
- **Self-destruct** — after 5 consecutive failed PIN attempts, the device wipes its flash memory entirely.

### Promise 0 — Universal Definition of Done

Every feature in this project must meet these standards before it is considered complete:

| Standard | Requirement |
|---|---|
| **Security** | AES-256 encryption at rest + audit logging for all access attempts |
| **Performance** | UI responsiveness < 2s · Keystroke emulation < 500ms |
| **Integrity** | Self-destruct logic wipes memory after 5 failed PIN attempts |
| **Isolation** | Device RAM wiped immediately upon USB disconnection |

---

## Hardware (NSA Device)

The companion app is designed to sync with the following hardware:

| Component | Spec |
|---|---|
| Microcontroller | STM32F4 series — native USB support + hardware encryption engine |
| Display | 1.3" I2C OLED (128×64) |
| Input | 5-way tactile navigation joystick or 3-button membrane switch |
| Storage | W25Qxx series external flash — encrypted credential store |
| Enclosure | 3D-printed PLA/ABS or CNC-milled acrylic |

The device uses a **D-pad + Send button** interaction model. Users navigate the OLED menu with the directional pad and press Send to trigger the "Keystroke Burst" — the device types the selected credential directly into the active input on the connected machine.

---

## Development Timeline

This project follows an 8-month parallel development schedule.

| Phase | Weeks | Companion App Track |
|---|---|---|
| 1 — UI/UX Discovery | 1–8 | Wireframe onboarding journey, establish frontend framework ✓ |
| 2 — Encryption Handshake | 9–16 | Build local encryption library, USB/Serial HID communication |
| 3 — Integration & Sync | 17–24 | Account management interface, test Import → Encrypt → Push flow |
| 4 — Quality Assurance | 25–32 | Security audits, vulnerability scanning, user documentation |

---

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- No backend — frontend layout and state only at this stage

---

## Risk Mitigations

| Risk | Strategy |
|---|---|
| Physical theft | Master PIN required; self-destructs after 5 failed attempts |
| Hardware failure | BIP-39 mnemonic recovery key provided during setup |
| Side-channel attack | Power analysis protection + immediate RAM wipe on disconnect |
| USB interception | AES-256-GCM encrypts all data before it leaves the PC |
