"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Section } from "./ui/Section";

const experiences = [
  {
    title: "Full Stack Engineer, Fleet Analytics & Data",
    company: "Flo Mobility",
    location: "Bengaluru / Remote to Dubai",
    period: "May 2025 – Nov 2025",
    type: "Full-time",
    highlights: [
      "Owned data ingestion and quality validation pipeline for 50+ autonomous robots; defined KPIs for fleet health.",
      "Designed and shipped analytics dashboard with 10+ live visualizations; collaborated with ops to identify key metrics.",
      "Optimized MongoDB pipelines and indexing strategies; reduced report latency for stakeholder decision-making.",
    ],
  },
  {
    title: "Full Stack Developer, Analytics & Requirements",
    company: "Rynova Trade LLC",
    location: "Dubai, UAE",
    period: "Aug 2024 – Apr 2025",
    type: "Contract",
    highlights: [
      "Led full discovery → architecture → deployment as sole technical lead.",
      "Configured analytics tracking and built performance dashboards; analyzed user behavior & conversion metrics.",
      "Designed system architecture and delivered responsive corporate site on AWS.",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Open Weaver",
    location: "Bengaluru, India",
    period: "Jun 2023",
    type: "Internship",
    highlights: [
      "Benchmarked CNN architectures on medical imaging datasets.",
      "Translated model diagnostics into visual narratives for stakeholders.",
    ],
  },
  {
    title: "Business Process Automation Intern",
    company: "ACZ Global Pvt Ltd",
    location: "Bengaluru, India",
    period: "Feb 2024 – Apr 2024",
    type: "Internship",
    highlights: [
      "Mapped processes and data flows for predictive analytics initiatives.",
      "Produced SRS and diagrams bridging business and data teams.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "ACZ Global Pvt Ltd",
    location: "Bengaluru, India",
    period: "Sep 2021 – Sep 2022",
    type: "Full-time",
    highlights: [
      "Designed MySQL schema and APIs for a 40+ user ERP/HRMS.",
      "Led migration from paper workflows to a monitored AWS stack.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title={
        <>
          Where I&apos;ve led projects
          <span className="block mt-2 text-[color:var(--muted)]">
            from requirements to production.
          </span>
        </>
      }
      subtitle={
        <>
          A timeline of full-stack, analytics, and process work—translating
          business needs into data pipelines, dashboards, and systems.
        </>
      }
      className="ui-noise"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto w-full max-w-4xl"
      >
        <div className="relative pl-4 sm:pl-6">
          <div
            className="absolute left-1.5 top-0 bottom-0 w-px"
            style={{
              background:
                "color-mix(in oklab, var(--border) 100%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.title}
                className="relative"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.08 }}
              >
                <div
                  className="absolute -left-[3px] top-7 h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), var(--accent-2))",
                  }}
                  aria-hidden="true"
                />

                <div className="ui-card ui-noise p-7 sm:p-9 shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold"
                      style={{
                        background:
                          "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                        color: "var(--fg)",
                      }}
                    >
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--muted-2)]">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight">
                    {exp.title}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-3 text-[color:var(--fg)]">
                      <FaBriefcase className="text-[color:var(--muted)]" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[color:var(--muted)]">
                      <FaMapMarkerAlt className="text-[color:var(--muted-2)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h, hIndex) => (
                      <motion.li
                        key={h}
                        className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[color:var(--muted)]"
                        initial={{ opacity: 0, x: -12 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -12 }
                        }
                        transition={{
                          delay: index * 0.06 + hIndex * 0.03 + 0.12,
                          duration: 0.25,
                        }}
                      >
                        <span
                          className="mt-[0.6rem] h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{
                            background:
                              "color-mix(in oklab, var(--fg) 55%, transparent)",
                          }}
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
