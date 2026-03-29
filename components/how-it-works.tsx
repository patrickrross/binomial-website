"use client";

import { useEffect, useRef } from "react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const steps = [
  {
    id: "connect",
    num: "01",
    title: "Connect",
    body: "Connects to the tools your team already uses; Slack, Notion, Linear, Google Workspace. No migration, no new interface to learn.",
  },
  {
    id: "understand",
    num: "02",
    title: "Understand",
    body: "Builds a living map of what your organisation knows, who knows it, and where the gaps sit. Updated continuously as your team works.",
  },
  {
    id: "surface",
    num: "03",
    title: "Surface",
    body: "Delivers the right context to the right person at the right moment; before they know to look for it. Directly in the tools they already use.",
  },
];

function Step({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref}>
      <span className="step-label">{step.num}</span>
      <p className="step-title">{step.title}</p>
      <p className="step-body">{step.body}</p>
    </div>
  );
}

export function HowItWorks() {
  const headerRef = useReveal(0);

  return (
    <section className="how-section">
      <div className="wrap">
        <div ref={headerRef}>
          <span className="section-label">How it works</span>
          <h2 className="how-headline">Three steps. No new habits.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <Step key={step.id} step={step} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
