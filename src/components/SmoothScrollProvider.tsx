"use client";

import { useEffect, useRef } from "react";

export default function SmoothScrollProvider() {
  const lenisRef = useRef<{ scrollTo: (target: HTMLElement, options?: any) => void; destroy: () => void } | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll(".reveal-on-scroll, .reveal-fade, .reveal-slide-left, .reveal-slide-right")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Detect if device is touch-only (mobile phones & tablets)
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;

    // --- Smooth anchor link handler ---
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement as HTMLElement, {
              offset: -88,
              duration: 1.0,
            });
          } else {
            const targetPosition =
              (targetElement as HTMLElement).getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: Math.max(0, targetPosition - 88),
              behavior: "smooth",
            });
          }
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // --- Desktop Smooth Scrolling ONLY ---
    // Dynamic import Lenis only on non-touch devices to save mobile JS bundle size
    let rafId: number | null = null;

    if (!isTouchOnly) {
      import("lenis").then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.0,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
          autoResize: true,
          prevent: (node) => {
            return (
              node instanceof HTMLElement &&
              (node.hasAttribute("data-lenis-prevent") ||
                Boolean(node.closest("[data-lenis-prevent]")) ||
                Boolean(node.closest("[role='dialog']")))
            );
          },
        });
        lenisRef.current = lenis;
        if (typeof window !== "undefined") {
          (window as unknown as { __lenis?: any }).__lenis = lenis;
        }

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      });
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // --- Lightweight Scroll Reveal Observer (No DOM MutationObserver thrashing) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observeElements = () => {
      document
        .querySelectorAll(
          ".reveal-on-scroll:not(.is-visible), .reveal-fade:not(.is-visible), .reveal-slide-left:not(.is-visible), .reveal-slide-right:not(.is-visible)"
        )
        .forEach((el) => observer.observe(el));
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => observeElements());
    } else {
      setTimeout(observeElements, 250);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        if (typeof window !== "undefined") {
          delete (window as unknown as { __lenis?: any }).__lenis;
        }
      }
    };
  }, []);

  return null;
}
