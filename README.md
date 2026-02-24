# Artisan - Modern Resume Builder & Career Hub

![Artisan Hero Banner](https://via.placeholder.com/1200x600?text=Artisan+Resume+Builder) *(Placeholder - Replace with actual project screenshot)*

**Artisan** (also known as Pinnacle Nexus) is a state-of-the-art Web Application built to empower professionals with a comprehensive suite of career tools. Featuring a stunning "Modern Artisan" design aesthetic, this platform integrates a dynamic Resume Builder, an immersive Interview Preparation portal, a Career Blog, and a personalized User Dashboard.

## ✨ Key Features

### 🛠️ Resume Builder (`/resume-builder`)
- **Drag-and-Drop Canvas**: Intuitive editor to craft and reorder resume sections smoothly.
- **Dynamic Previews & Interactivity**: Real-time visual updates with smooth transition animations.
- **Comprehensive Sections**: Covers Education, Experience, Achievements, Certifications, and more.
- **PDF Export**: Seamlessly download pixel-perfect resumes using `html2canvas` and `jsPDF`.

### 🎨 User Dashboard (`/dashboard`)
- **"Atelier" Inspired Studio**: A gorgeous, glassmorphic personalized workspace.
- **Project Management**: View ongoing projects in a neatly organized grid or start fresh from beautiful templates.

### 🧠 Interview Preparation (`/interview-prep`)
- **Interactive Practice Deck**: 3D flippable flashcards to test your knowledge.
- **Pre-Flight Checklist & Playbook**: Ensure you are 100% ready before any interview.

### 📰 Career Blog (`/blog`)
- **Magazine-Like Editorial Design**: A beautiful masonry grid layout for career-focused articles.

### 📞 Contact & Support (`/contact` & `/help`)
- **3D Interactive Contact Form**: A visually striking split-layout design featuring micro-animations, loading states, and automated email routing.
- **User Feedback Modal**: Integrated system to collect user insights and ratings.

### 🔐 Authentication & Onboarding (`/login` & `/register`)
- Secure and seamless user registration and login flows.

### ⚖️ Legal & Miscellaneous Pages
- Privacy Policy (`/privacy`), Terms of Service (`/terms`), Cookies Policy (`/cookies`), Pricing (`/pricing`), and Platform Updates (`/updates`).

## 💎 Design Aesthetics
The application adheres to a strict "**Modern Artisan**" design language:
- **Glassmorphism & Depth**: Elegant frosted-glass effects.
- **Smooth Animations**: Powered by `framer-motion` (e.g., 3D parallax tilts, smooth floating items, page transitions).
- **Curated Color Palette**: Earthy, premium tones prioritizing readability and visual excellence over generic defaults.

## 🚀 Technologies Used

- **Framework**: [Next.js (App Router)](https://nextjs.org/) (v16.1.6)
- **Library**: [React](https://react.dev/) (v19.2.3)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) with `clsx` and `tailwind-merge`
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: `html2canvas` + `jspdf`
- **Language**: TypeScript

## ⚙️ System Requirements

To run this project locally, you will need:
- **Node.js**: `v18.17.0` or higher (v20+ recommended).
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`.

## 🌐 Browser Requirements

For the best experience, including 3D animations and modern styling, use the latest versions of:
- Google Chrome
- Mozilla Firefox
- Apple Safari
- Microsoft Edge

## 🏃 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "Pinnacle Nexus/pinacleResume"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View the project**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`.

## 📂 Project Structure

```text
├── app/
│   ├── blog/             # Career Blog page
│   ├── contact/          # Interactive Contact & Support
│   ├── dashboard/        # User Workspace & Project Grid
│   ├── interview-prep/   # 3D Flashcards & Playbook
│   ├── resume-builder/   # Main Editor Canvas
│   ├── ...               # Other core pages (login, pricing, privacy, etc.)
├── components/           # Reusable UI components
├── public/               # Static assets & images
├── package.json          # Dependencies & Scripts
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---
*Built with ❤️ focusing on modern web aesthetics and exceptional user experience.*
