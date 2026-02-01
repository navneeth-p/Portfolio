# Navneeth Premanand - Portfolio Website

A modern, professional portfolio website showcasing expertise in Business Analysis, Data Engineering, and Full-Stack Development. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Strategic Hero Section**: Highlights the bridge between business strategy and technical execution.
- **Interactive Skills Grid**: Categorized technical and analytical skills with smooth animations.
- **Professional Timeline**: Detailed experience in Business Analysis and Engineering.
- **Modern UI/UX**: Clean, minimalist design with dark/light mode support (via Tailwind).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Direct Downloads**: Easy access to resume and contact links.

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with strategic positioning
│   ├── Skills.tsx      # Categorized skills showcase
│   ├── Experience.tsx  # Professional experience timeline
│   ├── Projects.tsx    # Key projects and outcomes
│   └── Contact.tsx     # Contact and social links
└── public/             # Optimized assets (Resume, Profile Picture)
```

## 🎨 Design Philosophy

- **Clarity & Precision**: Reflects a Business Analyst's focus on clear communication.
- **Minimalist Aesthetic**: Professional dark theme with focused accent colors.
- **Information Hierarchy**: Prioritizes key value propositions and measurable outcomes.
- **Technical Depth**: Subtle animations that enhance rather than distract.

## 🔧 Customization

### Update Personal Information

Edit the following files:

- `components/Hero.tsx` - Name, title, and social links
- `components/Contact.tsx` - Contact information
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Projects and portfolio items
- `components/Skills.tsx` - Technical skills

### Color Scheme

Modify colors in `app/globals.css`:

```css
:root {
  --accent: #00d4ff; /* Cyan */
  --accent-secondary: #7c3aed; /* Purple */
  --accent-tertiary: #f59e0b; /* Orange */
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Navneeth Premanand**

- Email: kannan.nambiar9@gmail.com
- LinkedIn: [navneeth-premanand](https://linkedin.com/in/navneeth-premanand)
- Location: Dubai, UAE

---

Built with ❤️ using Next.js and Three.js
