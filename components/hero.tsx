"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
    const timer = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60);
    return () => clearTimeout(timer);
  }, [delay]);
  return ref;
}

export function Hero() {
  const r0 = useReveal(0);
  const r1 = useReveal(80);
  const r2 = useReveal(200);

  return (
    <section className="hero-section">
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

        <div ref={r0}>
          <h1 className="hero-headline">
            Your tools make people productive. Binomial makes your organisation intelligent.
          </h1>
        </div>

        <div ref={r1}>
          <p className="hero-sub">
            A lightweight integration that connects to Slack and your project tools, watches for context your teammates would miss, and delivers it as a short summary directly where they work.
          </p>
        </div>

        <div ref={r2}>
          <div className="hero-ctas">
            <a href="#early-access" className="btn-primary-lg">
              Join the waitlist
              <ArrowRight width={14} height={14} />
            </a>
          </div>
          <p className="hero-cred">
            Built by operators from companies backed by Founder&apos;s Fund, the Collison Brothers, and Eric Schmidt.
          </p>
        </div>

      </div>
    </section>
  );
}
