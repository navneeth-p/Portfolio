"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAmazon,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiTableau,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiKeras,
  SiScikitlearn,
} from "react-icons/si";
import { Section } from "./ui/Section";

const skillGroups = [
  {
    label: "Business Analysis & Requirements",
    items: [
      { name: "Stakeholder Management", icon: SiGit },
      { name: "Requirements Gathering", icon: SiGit },
      { name: "Process Mapping", icon: SiGit },
      { name: "User Stories", icon: SiGit },
      { name: "Agile Methodologies", icon: SiGit },
      { name: "Data Storytelling", icon: SiGit },
    ],
  },
  {
    label: "Data Analysis & SQL",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Pandas & NumPy", icon: SiPython },
      { name: "SQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Statistical Analysis", icon: SiPython },
      { name: "Data Pipelines", icon: SiPython },
    ],
  },
  {
    label: "Frontend & Visualization",
    items: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tableau", icon: SiTableau },
      { name: "Power BI", icon: SiTableau },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "Database Design", icon: SiMysql },
      { name: "MySQL", icon: SiMysql },
      { name: "Stored Procedures", icon: SiMysql },
      { name: "Data Modeling", icon: SiMysql },
    ],
  },
  {
    label: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "CNN Architectures", icon: SiTensorflow },
      { name: "Feature Engineering", icon: SiPython },
      { name: "Model Evaluation", icon: SiTensorflow },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3, Lambda)", icon: SiAmazon },
      { name: "Azure", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD Pipelines", icon: SiGit },
      { name: "Git & Version Control", icon: SiGit },
      { name: "Infrastructure Management", icon: SiAmazon },
    ],
  },
  {
    label: "Tools & Documentation",
    items: [
      { name: "Lucidchart", icon: SiGit },
      { name: "Visio", icon: SiGit },
      { name: "Google Analytics", icon: SiGit },
      { name: "Miro", icon: SiGit },
      { name: "SRS Documentation", icon: SiGit },
      { name: "Data Flow Diagramming", icon: SiGit },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title={
        <>
          Tools I reach for
          <span className="block mt-2 text-[color:var(--muted)]">
            across BA, data, and product.
          </span>
        </>
      }
      subtitle={
        <>
          BA-focused skills plus engineering depth: analytics, dashboards, data
          pipelines, and systems. Everything I use to translate business needs
          into production.
        </>
      }
      className="ui-noise"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto w-full max-w-4xl space-y-5"
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            className="ui-card p-7 sm:p-9 shadow-none"
            variants={itemVariants}
            whileHover={{ y: -3 }}
          >
            <div className="space-y-5">
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[color:var(--muted-2)]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map(({ name, icon: Icon }, skillIndex) => (
                  <motion.span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card-solid)_80%,transparent)] px-3.5 py-2 text-sm font-semibold text-[color:var(--fg)]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-base text-[color:var(--muted)]" />
                    <span>{name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
