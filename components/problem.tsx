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
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

function ProblemItem({ num, title, body, delay }: { num: string; title: string; body: string; delay: number }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className="problem-item">
      <span className="problem-num">{num}</span>
      <div className="problem-content">
        <p className="problem-title">{title}</p>
        <p className="problem-body">{body}</p>
      </div>
    </div>
  );
}

const items = [
  {
    num: "01",
    title: "The call that engineering never heard.",
    body: "A sales rep describes a workaround for a missing feature on a customer call. The engineer building that feature finds out two weeks later. Binomial flags it in minutes.",
  },
  {
    num: "02",
    title: "The sync that could have been async.",
    body: "Monday's team sync covers updates that could have been shared on Friday. The meeting still happens; but now it's for generating ideas, not trading updates.",
  },
  {
    num: "03",
    title: "The new hire reading stale docs.",
    body: "Week-one onboarding pulls from a wiki last updated four months ago. Binomial generates a living briefing from what the team actually discussed last week.",
  },
];

export function Problem() {
  const headRef = useReveal(0);
  return (
    <section className="problem-section">
      <div className="wrap">
        <div ref={headRef}>
          <h2 className="section-headline">
            Your team already has the knowledge. It&apos;s just trapped in the wrong places.
          </h2>
          <p style={{ fontSize: 18, fontWeight: 300, color: "#999", maxWidth: 800, marginBottom: 110, lineHeight: 1.65 }}>
            The insight from a customer call that would change an engineer&apos;s approach. The strategy update that would save a new hire two weeks of confusion. The context that turns a good decision into the right one. It&apos;s all there; it just doesn&apos;t move.
          </p>
        </div>
        <div className="problem-list">
          {items.map((item, i) => (
            <ProblemItem key={item.num} num={item.num} title={item.title} body={item.body} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
