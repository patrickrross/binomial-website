"use client";

import { useEffect, useRef } from "react";

export function Vision() {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">
      <div className="wrap vision-inner">
        <p ref={ref} className="vision-text">
          The best teams don&apos;t just work harder. They know what each other knows. Binomial is the information infrastructure for the <span style={{ whiteSpace: "nowrap" }}>world-class</span> enterprise teams of the future.
        </p>
      </div>
    </section>
  );
}
