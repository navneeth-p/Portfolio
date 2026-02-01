"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAward, FaCode, FaGithub, FaRocket } from "react-icons/fa";
import { Section } from "./ui/Section";

const projects = [
  {
    title: "Stellar Image Classification Pipeline",
    description:
      "Published in IEEE: Comparative performance analysis of CNN architectures (VGG16, Parallel CNN, ResNet) for stellar-galaxy classification. Designed full pipeline: data preprocessing, feature engineering, model training with hyperparameter tuning, and comprehensive performance evaluation across architectures.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Pandas"],
    tag: "Research",
    featured: true,
    repo: "https://github.com/navneeth-p",
    paper: "https://ieeexplore.ieee.org/document/10244794",
  },
  {
    title: "Autonomous Fleet Analytics Platform",
    description:
      "Real-time operations dashboard for 50+ autonomous robots. Led analytics design from stakeholder interviews to KPI definition. Built 10+ interactive visualizations in React; optimized MongoDB pipelines to reduce report latency by ~35%. End-to-end: requirements → schema → shipped.",
    tech: ["React", "Chart.js", "MongoDB", "AWS", "TypeScript"],
    tag: "Product Analytics",
    featured: true,
    repo: "https://github.com/navneeth-p",
  },
  {
    title: "ERP/HRMS Digital Transformation",
    description:
      "Migrated 40+ users from paper to digital: gathered business requirements, designed normalized MySQL schema, built Node.js REST APIs, and deployed on AWS. Led UAT and change management to ensure adoption and operational reliability.",
    tech: ["Node.js", "React", "MySQL", "AWS", "MERN"],
    tag: "Systems",
    featured: false,
    repo: "https://github.com/navneeth-p",
  },
  {
    title: "Medical Imaging ML & Reporting Pipeline",
    description:
      "End-to-end deep learning pipeline for breast cancer classification: exploratory data analysis on medical imaging datasets, preprocessing, CNN training with TensorFlow/Keras, model evaluation, and stakeholder-ready visualizations. Translated technical metrics into business narratives.",
    tech: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn"],
    tag: "ML Engineering",
    featured: false,
    repo: "https://github.com/navneeth-p",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title={
        <>
          Key work:
          <span className="block mt-2 text-[color:var(--muted)]">
            Requirements to shipped.
          </span>
        </>
      }
      subtitle={
        <>
          From research to analytics platforms to core systems—each project
          combined discovery, data design, and execution to drive decisions and
          operations.
        </>
      }
      className="ui-noise"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="ui-card ui-noise p-7 sm:p-8 lg:p-10 shadow-none flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold"
                      style={{
                        background:
                          "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                        color: "var(--fg)",
                      }}
                    >
                      {project.tag === "Research" && (
                        <FaRocket className="text-[10px]" />
                      )}
                      {project.tag === "Product Analytics" && (
                        <FaCode className="text-[10px]" />
                      )}
                      {project.tag === "Systems" && (
                        <FaGithub className="text-[10px]" />
                      )}
                      {project.tag === "ML Engineering" && (
                        <FaAward className="text-[10px]" />
                      )}
                      {project.tag}
                    </span>

                    {project.featured && (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold"
                        style={{
                          background:
                            "color-mix(in oklab, var(--accent) 32%, transparent)",
                          color: "var(--fg)",
                          border:
                            "1px solid color-mix(in oklab, var(--accent) 45%, transparent)",
                        }}
                      >
                        <FaAward className="text-[10px]" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--muted)] flex-grow">
                {project.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)]"
                      style={{
                        background:
                          "color-mix(in oklab, var(--card-solid) 78%, transparent)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2.5 text-xs font-semibold hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
                      style={{
                        background:
                          "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                      }}
                      title="View published paper on IEEE Xplore"
                    >
                      <FaAward className="text-[10px]" />
                      Paper
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2.5 text-xs font-semibold hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
                    style={{
                      background:
                        "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                    }}
                  >
                    <FaGithub />
                    Repo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
