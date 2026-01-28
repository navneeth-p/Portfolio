# Navneeth Premanand - Portfolio Website

A modern, interactive portfolio website showcasing AI/ML engineering expertise, built with Next.js, Three.js, and Framer Motion.

## 🚀 Features

- **3D Interactive Neural Network**: Unique hero section with animated 3D neural network visualization
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Dark theme with gradient accents and glow effects
- **Interactive Components**: Hover effects, scroll animations, and dynamic transitions
- **Skills Showcase**: Animated skill cards with category organization
- **Experience Timeline**: Visual timeline with color-coded experiences
- **Project Gallery**: Featured projects with 3D card effects
- **Contact Form**: Animated contact section with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
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
│   ├── Hero.tsx        # Hero section with 3D neural network
│   ├── NeuralNetwork.tsx # 3D neural network component
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects gallery
│   └── Contact.tsx     # Contact form
└── public/             # Static assets
```

## 🎨 Design Philosophy

This portfolio breaks away from conventional design patterns with:
- **Data Universe Theme**: Neural network visualization representing AI/ML expertise
- **Bold Color Palette**: Cyan, purple, and orange gradients
- **Interactive Elements**: Every component responds to user interaction
- **Smooth Transitions**: Seamless scroll animations and hover effects
- **Modern Typography**: Clean, readable fonts with gradient text effects

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
  --accent: #00d4ff;        /* Cyan */
  --accent-secondary: #7c3aed; /* Purple */
  --accent-tertiary: #f59e0b;  /* Orange */
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
