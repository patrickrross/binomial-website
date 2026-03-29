"use client";

import { useState, useEffect, useRef } from "react";

// Replace YOUR_FORM_ID with the ID from your Formspree dashboard (formspree.io)
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export function Cta() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) { setError("Please enter your work email."); return; }
    if (!isValid(email)) { setError("That doesn't look like a valid email address."); return; }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="cta-section">
      <div className="wrap">
        <div ref={ref}>
          <h2 className="cta-headline">Join the waitlist.</h2>
          {submitted ? (
            <p style={{ fontSize: 15, color: "#999", fontWeight: 300 }}>
              Thanks. We&apos;ll be in touch within 48 hours.
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} noValidate className="email-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your work email"
                  autoComplete="email"
                  className="email-input"
                  disabled={submitting}
                />
                <button type="submit" className="btn-primary-lg" style={{ flexShrink: 0 }} disabled={submitting}>
                  {submitting ? "Sending…" : "Join the waitlist"}
                </button>
              </form>
              {error && <p className="form-error">{error}</p>}
              <p className="cta-expect">We review every application. You&apos;ll hear from us within 48 hours.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
