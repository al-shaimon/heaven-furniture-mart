"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Instantly reveal all scroll-animated elements
      document
        .querySelectorAll(".reveal-on-scroll, .reveal-fade, .reveal-slide-left, .reveal-slide-right")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // --- Lenis Smooth Scrolling ---
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
      infinite: false,
      autoResize: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- IntersectionObserver for scroll reveal ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-visible), .reveal-fade:not(.is-visible), .reveal-slide-left:not(.is-visible), .reveal-slide-right:not(.is-visible)"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-observe on dynamic DOM changes
    const mutationObserver = new MutationObserver(() => observeElements());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // --- Smooth anchor link handler (through Lenis) ---
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -88, // matches scroll-padding-top for navbar
            duration: 1.2,
          });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
