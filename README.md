# KOVA AUDIO — Landing Page

A modern product landing page for **The Dial One**, a wireless headphone featuring an analog control dial.

Built with **Next.js 14, TypeScript, Tailwind CSS, and the App Router**.

## Preview

> Add a project screenshot here if available.

```md
![KOVA Audio Preview](./public/preview.png)
```

## Tech Stack

* **Next.js 14** — App Router
* **TypeScript**
* **React**
* **Tailwind CSS**

## Features

* Responsive product landing page
* Product-focused hero section
* Interactive analog dial graphic
* Product showcase section
* Technical specifications
* User testimonials
* Pre-order call-to-action
* Responsive navigation and footer
* Custom animations and visual effects

## Project Structure

```text
kova-audio/
├── app/
│   ├── layout.tsx          # Root layout, fonts and metadata
│   ├── page.tsx            # Main page and section composition
│   └── globals.css         # Global styles and dial animations
│
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── DialGraphic.tsx     # Analog dial SVG graphic
│   ├── ProductShowcase.tsx # Product presentation
│   ├── SpecSheet.tsx       # Product specifications
│   ├── Voices.tsx          # User testimonials
│   ├── Preorder.tsx         # Pre-order CTA
│   └── Footer.tsx          # Footer
│
├── public/
│   └── ...                 # Static assets
│
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/truongtnn/kova-audio.git
cd kova-audio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Customization

### Brand & Product Information

Update the product and brand content in:

```text
components/Header.tsx
components/Hero.tsx
components/Footer.tsx
```

### Product Price & Delivery

Update the price and delivery information in:

```text
components/Preorder.tsx
```

### Product Specifications

Product specifications are defined in:

```text
components/SpecSheet.tsx
```

Update the `specs` array to change the displayed specifications.

### Theme & Colors

The main color palette and styling configuration can be customized in:

```text
tailwind.config.ts
```

Global styles and animations are located in:

```text
app/globals.css
```

## Live Demo

Coming soon.

## Author

**Tran Nhat Truong**

Frontend Developer

* GitHub: https://github.com/truongtnn
* Project: https://github.com/truongtnn/kova-audio

---

Built with Next.js and Ty
