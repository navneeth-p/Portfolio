"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "./ui/Container";
import { cn } from "./ui/cn";
import ThemeControls from "./ThemeControls";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[color:color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-xl ui-divider"
          : "bg-[color:color-mix(in_oklab,var(--bg)_55%,transparent)] backdrop-blur-md",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className="h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-base sm:text-lg font-semibold tracking-tight text-[color:var(--fg)] relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Navneeth Premanand</span>
          <motion.div
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, var(--accent) 30%, transparent), color-mix(in oklab, var(--accent-2) 22%, transparent))",
            }}
            layoutId="navbar-bg"
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-1.5">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="relative px-3.5 py-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors rounded-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="relative z-10">{item.name}</span>
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "color-mix(in oklab, var(--fg) 6%, transparent)",
                }}
              />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <ThemeControls />
        </div>

        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors relative"
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.div>
        </motion.button>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              scaleY: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
                scaleY: { duration: 0.3 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              scaleY: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                scaleY: { duration: 0.3 },
              },
            }}
            className="md:hidden ui-divider bg-[color:color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-xl overflow-hidden"
            style={{ transformOrigin: "top" }}
          >
            <Container className="py-5 space-y-1.5">
              <div className="px-4 pb-2">
                <ThemeControls />
              </div>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="group block py-4 px-4 text-base font-medium text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors rounded-xl relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(248, 250, 252, 0.8)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--accent), var(--accent-2))",
                    }}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Contact CTA in mobile menu */}
              <motion.div
                className="pt-4 mt-4 ui-divider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <motion.a
                  href="mailto:kannan.nambiar9@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[color:var(--fg)] text-[color:var(--bg)] text-base font-semibold rounded-xl hover:opacity-95 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaTimes className="rotate-45" size={16} />
                  Get In Touch
                </motion.a>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
