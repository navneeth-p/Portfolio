"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { useLayoutEffect, useState } from "react";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Soft spotlight + subtle blobs (playful but minimal) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 55%)`,
          }}
        />
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--accent) 45%, transparent), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--accent-2) 45%, transparent), transparent 60%)",
          }}
        />
      </div>

      {/* Tiny “orbiting” dots (no randomness) */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute left-[12%] top-[22%] h-2 w-2 rounded-full"
            style={{
              background: "color-mix(in oklab, var(--accent) 55%, transparent)",
            }}
            animate={{ y: [0, -14, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[16%] top-[34%] h-2 w-2 rounded-full"
            style={{
              background:
                "color-mix(in oklab, var(--accent-2) 55%, transparent)",
            }}
            animate={{ y: [0, 16, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 6.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          />
          <motion.div
            className="absolute left-[28%] bottom-[18%] h-1.5 w-1.5 rounded-full"
            style={{
              background: "color-mix(in oklab, var(--fg) 22%, transparent)",
            }}
            animate={{ y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
          />
        </div>
      )}

      <motion.div
        className="relative z-10 w-full py-20 sm:py-24 lg:py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <div className="space-y-12">
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* <motion.p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-2)] font-semibold">
                NAVNEETH PREMANAND
              </motion.p> */}
              <motion.h1
                className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl leading-[1.03]"
                variants={itemVariants}
              >
                <span className="block">I turn business needs</span>
                <span className="block mt-3 text-[color:var(--muted)]">
                  into data-driven systems.
                </span>
              </motion.h1>
              <motion.p
                className="max-w-2xl text-base sm:text-lg text-[color:var(--muted)] leading-relaxed"
                variants={itemVariants}
              >
                I bridge business strategy and technical execution. From
                gathering requirements to shipping analytics dashboards and data
                pipelines—I translate strategic goals into measurable systems.
                Published in IEEE; built 10+ interactive BI dashboards; scaled
                analytics for 50+ autonomous robots on AWS.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={itemVariants}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink
                  href="/BA-Navneeth-DxB.txt"
                  download="Navneeth-Premanand-Resume-BA.txt"
                  variant="primary"
                >
                  <FaDownload className="text-base" />
                  <span>Resume</span>
                </ButtonLink>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink
                  href="mailto:kannan.nambiar9@gmail.com"
                  variant="secondary"
                >
                  <FaEnvelope className="text-base" />
                  <span>Say Hello!</span>
                </ButtonLink>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink
                  href="https://linkedin.com/in/navneeth-premanand"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaLinkedin className="text-base" />
                  <span>LinkedIn</span>
                </ButtonLink>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink
                  href="https://github.com/navneeth-p"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </ButtonLink>
              </motion.div>
            </motion.div>

            {/* Profile image - optimized for LCP with priority loading */}
            <motion.div className="mt-8" variants={itemVariants}>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block rounded-full overflow-hidden w-20 h-20">
                  <Image
                    src="/Navneeth_p.jpg"
                    alt="Navneeth Premanand"
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="text-sm text-[color:var(--muted)]">
                  {/* Bengaluru · Dubai · Open to BA, DA, DE, Full‑stack roles */}
                  Bengaluru · Dubai
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 mt-10"
              variants={itemVariants}
            >
              <motion.a
                href="#experience"
                className="ui-card ui-noise p-6 sm:p-7 shadow-none hover:-translate-y-1 transition will-change-transform cursor-pointer"
              >
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)] font-semibold">
                    ✦ Expertise
                  </p>
                  <p className="text-lg font-semibold">Business Analysis</p>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    Requirements, stakeholder alignment, data-driven decisions.
                  </p>
                </div>
              </motion.a>

              <motion.div className="ui-card ui-noise p-6 sm:p-7 shadow-none hover:-translate-y-1 transition">
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-2)] font-semibold">
                    ✦ Technical
                  </p>
                  <p className="text-lg font-semibold">
                    Full-Stack Engineering
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    Python, React, AWS, data pipelines, dashboards.
                  </p>
                </div>
              </motion.div>

              <motion.div className="ui-card ui-noise p-6 sm:p-7 shadow-none hover:-translate-y-1 transition">
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)] font-semibold">
                    ✦ Available
                  </p>
                  <p className="text-lg font-semibold">Now</p>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    Remote & on-site. Bengaluru · Dubai.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
