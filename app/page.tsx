import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
// import FloatingGeometry from '@/components/FloatingGeometry'; // Temporarily disabled for build

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden flex flex-col items-center">
      {/* <FloatingGeometry /> */}
      <Navbar />
      <div id="home" className="w-full">
        <Hero />
      </div>
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="w-full py-14 sm:py-16 ui-divider">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[color:var(--fg)]">
                © {new Date().getFullYear()} Navneeth Premanand
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1">
                Business Analyst · Data Engineer · Full Stack Developer
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs font-semibold text-[color:var(--muted-2)] mb-1">
                  Reach out anytime
                </p>
                <a
                  href="mailto:kannan.nambiar9@gmail.com"
                  className="text-xs font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-2)] transition-colors"
                >
                  kannan.nambiar9@gmail.com
                </a>
              </div>
              <a
                href="#home"
                className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-2)] hover:text-[color:var(--fg)] transition-colors"
              >
                ↑ Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
