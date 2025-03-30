# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my work as a Full Stack Developer, Data Engineer, and Business Analyst.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📝 Contact form for easy communication

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio-website/
├── public/
│   └── projects/         # Project images
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── styles/         # Global styles
└── package.json
```

## Customization

1. Update the content in `src/app/page.tsx` with your personal information
2. Add your project images to the `public/projects` directory
3. Update the project information in `src/components/Projects.tsx`
4. Customize the color scheme in `tailwind.config.js`
5. Update contact information in `src/components/Contact.tsx`

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 