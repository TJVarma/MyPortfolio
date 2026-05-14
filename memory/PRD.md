# Portfolio — Venkata Thanoj Varma Aturi

## Problem Statement
Build a stunning, premium personal portfolio website. Dark sleek aesthetic with subtle animated particles in hero, glassmorphism cards, smooth scroll animations, sticky navbar, fully responsive. Sections: Hero, About, Projects, Experience Timeline, Education, Contact, Footer. Stack: React + Tailwind + Framer Motion + FastAPI + MongoDB.

## Architecture
- **Frontend**: React (CRA), Tailwind CSS, Framer Motion, Sonner (toasts), Lucide icons. Single page `/` rendering `Portfolio.jsx` with section components.
- **Backend**: FastAPI on port 8001, all routes prefixed `/api`. MongoDB via Motor, async.
- **Data flow**: Contact form posts to `POST /api/contact` → stored in MongoDB `contact_messages` collection.

## Endpoints
- `GET /api/` — health
- `GET|POST /api/status` — legacy template endpoints
- `POST /api/contact` — create contact message (validates email + min lengths)
- `GET /api/contact` — list stored messages (admin/internal)

## User Personas
- **Recruiters / Hiring managers**: skim portfolio, evaluate projects + experience, hit "Let's talk".
- **Collaborators / Peers**: review tech stack, reach out via contact form or social links.
- **Casual visitors**: bookmark for design inspiration.

## Core Requirements (static)
- Premium dark aesthetic, cyan/blue accents
- Animated hero with particle network canvas
- Sticky navbar with smooth-scroll + active-section highlight
- Scroll-triggered fade/slide-in animations on every section
- Glassmorphism cards with hover lift + glow
- Fully mobile responsive (hamburger menu)
- Working contact form with toast feedback
- data-testid on all interactive elements

## Implemented (2026-05-14)
- Hero: particle network canvas, gradient headline, two CTAs, profile orb with orbiting dots, scroll cue
- Navbar: glass blur on scroll, active link underline (framer layoutId), mobile menu
- About: bio card + 4 skill groups (Systems & Infrastructure, ML & Data, Cloud & DevOps, Languages) with animated pills
- Projects: 4 glassmorphism cards (ML Model Serving Pipeline, Distributed Monitoring Dashboard, Cloud Cost Optimizer, Automation Toolkit) with tech badges + Source/Demo buttons
- Experience: alternating vertical timeline with 3 entries, glowing dots, animated reveal from sides
- Education: 2 cards (Degree, AWS cert)
- Contact: form posts to `/api/contact`, sonner toast feedback, social rail (LinkedIn / GitHub / Email)
- Footer: name, year, socials, tagline
- Backend: contact endpoint with Pydantic EmailStr validation, datetime ISO storage, MongoDB `_id` exclusion

## Testing
- Backend pytest: 6/6 passed (root, contact CRUD, 422 validation, no _id leakage)
- Frontend Playwright e2e: nav smooth-scroll, CTAs, form submit + success toast, mobile menu — all green

## Backlog (P1)
- Replace placeholder profile photo with real image
- Replace `#` social links with real LinkedIn / GitHub / email
- Replace placeholder bio/projects/experience with real content
- Add admin view for messages (auth-gated)

## Backlog (P2)
- Resend/SendGrid email delivery on contact form
- Blog / writing section
- Light theme toggle
- OG image + meta tags for sharing
- Analytics (PostHog / Plausible)
