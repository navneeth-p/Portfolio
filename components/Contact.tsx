"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheck,
  FaDownload,
} from "react-icons/fa";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdyjaeq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <Section
      id="contact"
      eyebrow="GET IN TOUCH"
      title={
        <>
          Let&apos;s talk about
          <span className="block mt-2 text-[color:var(--muted)]">
            your next project.
          </span>
        </>
      }
      subtitle={
        <>
          Open to BA, DA, DE, and Full-stack roles. Or just discuss data
          systems, analytics architecture, or fleet operations. Always happy to
          connect.
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
          {/* Contact Information */}
          <motion.div
            className="ui-card ui-noise p-7 sm:p-9 shadow-none"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.a
                href="mailto:kannan.nambiar9@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-[color:var(--border)] p-4 sm:p-5 transition-colors"
                style={{
                  background:
                    "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                }}
                whileHover={{ x: 2 }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-[color:var(--accent-ink)]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), var(--accent-2))",
                  }}
                >
                  <FaEnvelope className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
                    Email
                  </p>
                  <p className="truncate font-semibold">
                    kannan.nambiar9@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+971544034810"
                className="flex items-center gap-4 rounded-xl border border-[color:var(--border)] p-4 sm:p-5 transition-colors"
                style={{
                  background:
                    "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                }}
                whileHover={{ x: 2 }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-[color:var(--accent-ink)]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), var(--accent-2))",
                  }}
                >
                  <FaPhone className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
                    Phone (UAE)
                  </p>
                  <p className="truncate font-semibold">(+971) 544034810</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918310469810"
                className="flex items-center gap-4 rounded-xl border border-[color:var(--border)] p-4 sm:p-5 transition-colors"
                style={{
                  background:
                    "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                }}
                whileHover={{ x: 2 }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-[color:var(--accent-ink)]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), var(--accent-2))",
                  }}
                >
                  <FaPhone className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
                    Phone (India)
                  </p>
                  <p className="truncate font-semibold">(+91) 8310469810</p>
                </div>
              </motion.a>

              <div
                className="flex items-center gap-4 rounded-xl border border-[color:var(--border)] p-4 sm:p-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-[color:var(--accent-ink)]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), var(--accent-2))",
                  }}
                >
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-2)]">
                    Location
                  </p>
                  <p className=" font-semibold">
                    Dubai, UAE · Bengaluru, India · Open to remote
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <motion.a
                  href="/BA-Navneeth-DxB.txt"
                  download="Navneeth-Premanand-Resume-BA.txt"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-ink)] hover:shadow-lg transition-shadow"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload />
                  Download Resume (BA)
                </motion.a>

                <div className="flex gap-2">
                  <motion.a
                    href="https://linkedin.com/in/navneeth-premanand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2.5 text-sm font-semibold flex-1"
                    style={{
                      background:
                        "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaLinkedin />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/navneeth-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2.5 text-sm font-semibold flex-1"
                    style={{
                      background:
                        "color-mix(in oklab, var(--card-solid) 80%, transparent)",
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="ui-card ui-noise p-7 sm:p-9 shadow-none"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[color:var(--muted)] mb-2.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card-solid)_86%,transparent)] px-4 py-3.5 text-[color:var(--fg)] placeholder:text-[color:var(--muted-2)] focus:ui-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[color:var(--muted)] mb-2.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card-solid)_86%,transparent)] px-4 py-3.5 text-[color:var(--fg)] placeholder:text-[color:var(--muted-2)] focus:ui-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[color:var(--muted)] mb-2.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card-solid)_86%,transparent)] px-4 py-3.5 text-[color:var(--fg)] placeholder:text-[color:var(--muted-2)] focus:ui-ring"
                />
              </div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full"
                  variant={isSubmitted ? "secondary" : "primary"}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="h-4 w-4 rounded-full border-2 border-[color:var(--bg)] border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheck className="text-base" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-base" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
