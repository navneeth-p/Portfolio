"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "./ui/Section";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Christ University Bengaluru",
    period: "2022 - 2024",
  },
  {
    degree:
      "Bachelor of Science in Computer Science, Mathematics and Statistics",
    school: "Christ University Bengaluru",
    period: "2018 - 2021",
  },
];

const certifications = [
  "Google Data Analytics Professional Certificate - Coursera",
  "Data Science 101 - IBM",
  "Business Analysis & Process Management - Coursera",
  "Cybersecurity and Internet of Things - University System of Georgia (Coursera)",
  "Cyber Law - Christ University",
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section
      id="education"
      eyebrow="EDUCATION & CREDENTIALS"
      title={
        <>
          Formal training &
          <span className="block mt-2 text-[color:var(--muted)]">
            continuous learning.
          </span>
        </>
      }
      subtitle={
        <>
          MSc in Data Science with a focus on ML and analytics, plus
          professional certifications in data and business analysis to stay
          current.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            variants={itemVariants}
            className="ui-card p-7 sm:p-9 shadow-none"
          >
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="text-lg font-semibold">{e.degree}</p>
                  <p className="text-sm text-[color:var(--muted)]">
                    {e.school} · {e.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="ui-card p-7 sm:p-9 shadow-none"
          >
            <div className="space-y-3">
              <p className="text-lg font-semibold">Certifications</p>
              <ul className="text-sm text-[color:var(--muted)] list-disc list-inside space-y-1">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
