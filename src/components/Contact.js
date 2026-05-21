import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("idle");
      setError(c.errorText || "Something went wrong. Try again.");
    }
  };

  return (
    <section className="contact-section section">
      <div className="contact-orb" aria-hidden="true" />

      <motion.div className="contact-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {/* Header */}
        <motion.div className="contact-header" variants={fadeUp} custom={0}>
          <span className="contact-label">{c.label}</span>
          <h2 className="contact-title">{c.title}</h2>
          <p className="contact-subtitle">{c.subtitle}</p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.div className="contact-form-card" variants={fadeUp} custom={1}>
            {status === "success" ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon"><HiMail size={40} /></div>
                <h3>{c.successTitle}</h3>
                <p>{c.successText}</p>
                <button className="contact-btn" onClick={() => setStatus("idle")}>
                  {c.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="name" name="name" type="text"
                      placeholder=" "
                      value={form.name} onChange={handleChange} required
                    />
                    <label htmlFor="name">{c.name}</label>
                  </div>
                  <div className="form-group">
                    <input
                      id="email" name="email" type="email"
                      placeholder=" "
                      value={form.email} onChange={handleChange} required
                    />
                    <label htmlFor="email">{c.email}</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    id="subject" name="subject" type="text"
                    placeholder=" "
                    value={form.subject} onChange={handleChange} required
                  />
                  <label htmlFor="subject">{c.subject}</label>
                </div>

                <div className="form-group">
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder=" "
                    value={form.message} onChange={handleChange} required
                  />
                  <label htmlFor="message">{c.message}</label>
                </div>

                {error && <p className="contact-error">{error}</p>}

                <button className="contact-btn" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <span className="btn-spinner" aria-label="Sending..." />
                  ) : (
                    c.send
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div className="contact-info" variants={fadeUp} custom={2}>
            <div className="contact-info-card">
              <h3>{c.connect}</h3>
              <p>{c.connectText}</p>

              <div className="contact-links">
                <a href="mailto:higuitaoc49@gmail.com" className="contact-link" aria-label="Send email">
                  <span className="contact-link__icon"><HiMail size={20} /></span>
                  <span className="contact-link__body">
                    <span className="contact-link__label">Email</span>
                    <span className="contact-link__value">higuitaoc49@gmail.com</span>
                  </span>
                  <HiExternalLink className="contact-link__arrow" size={16} />
                </a>

                <a
                  href="https://github.com/Jhiguita11"
                  target="_blank" rel="noopener noreferrer"
                  className="contact-link" aria-label="GitHub profile"
                >
                  <span className="contact-link__icon"><FaGithub size={20} /></span>
                  <span className="contact-link__body">
                    <span className="contact-link__label">GitHub</span>
                    <span className="contact-link__value">github.com/Jhiguita11</span>
                  </span>
                  <HiExternalLink className="contact-link__arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <span className="availability-dot" />
              <span>{c.availability}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
