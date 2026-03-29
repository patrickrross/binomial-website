"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <nav className="nav-inner">
          <a href="#" className="nav-logo-link">
            <Image src="/logo.png" alt="Binomial" width={28} height={28} />
            <span className="nav-logo-wordmark">Binomial</span>
          </a>
          <a href="#early-access" className="btn-primary-sm">Join the waitlist</a>
        </nav>
      </div>
    </header>
  );
}
