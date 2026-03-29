"use client";

import { useEffect, useRef } from "react";

export function Teaser() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="teaser-section">
      <div className="wrap">
        <p className="teaser-text">
          Binomial is a lightweight integration that connects to Slack and your project tools, watches for context your teammates would miss, and delivers it as a short summary directly where they work.
        </p>
      </div>
    </section>
  );
}
