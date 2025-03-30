# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Responsive design for all device sizes
- Dark mode/light mode toggle with system preference detection
- Smooth animations and transitions
- Server-side rendering with static export for optimal performance
- Modern, professional UI with interactive elements
- SEO optimized with metadata and sitemap generation

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Netlify
- **Icons**: React Icons

## Development

### Prerequisites

- Node.js (v18.17.0 or later)
- npm (v9.6.7 or later)

### Getting Started

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run export` - Export the application as static HTML
- `npm run serve` - Serve the static export locally
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build directories
- `npm run analyze` - Analyze the bundle size

## Deployment on Netlify

This project is configured for seamless deployment on Netlify.

### Automatic Deployment (recommended)

1. Push your repository to GitHub (or GitLab, Bitbucket)
2. Create a new site on Netlify and connect it to your repository
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Trigger a deployment by pushing to your repository

### Manual Deployment

1. Build the project locally:
   ```bash
   npm run clean
   npm run build
   ```

2. Deploy using Netlify CLI:
   ```bash
   npx netlify deploy --prod --dir=out
   ```

## Project Structure

- `/src/app` - Next.js app router routes and layouts
- `/src/components` - Reusable UI components
- `/src/context` - React context providers (e.g., theme)
- `/public` - Static assets like images and icons

## Customization

- Edit `/src/app/layout.tsx` to change global metadata and layout
- Modify `/src/context/ThemeContext.tsx` to adjust theme settings
- Update component files in `/src/components` to change UI elements
- Replace images in `/public` directory with your own assets

## License

MIT 