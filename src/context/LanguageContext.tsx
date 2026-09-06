"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "bn" | "en";

export const SITE_TITLES: Record<Language, string> = {
  bn: "হেভেন ফার্নিচার মার্ট | Heaven Furniture Mart — আগ্রাবাদ, চট্টগ্রাম",
  en: "Heaven Furniture Mart | Agrabad, Chattogram — Premium Solid Wood Furniture",
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (bn: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bn",
  setLang: () => {},
  toggleLang: () => {},
  t: (bn, _en) => bn,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("bn");
  const [mounted, setMounted] = useState(false);

  // Initialize saved language from localStorage or cookie on mount
  useEffect(() => {
    try {
      let saved = localStorage.getItem("hfm_language") as Language | null;
      if (!saved) {
        const match = document.cookie.match(/(?:^|; )hfm_language=([^;]*)/);
        if (match && (match[1] === "bn" || match[1] === "en")) {
          saved = match[1] as Language;
        }
      }
      if (saved === "bn" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // Ignore localStorage access errors
    }
    setMounted(true);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "hfm_language" && (e.newValue === "bn" || e.newValue === "en")) {
        setLangState(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("hfm_language", newLang);
      document.cookie = `hfm_language=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "bn" ? "en" : "bn");
  };

  // Synchronize document.title and html lang whenever lang changes,
  // and protect against Next.js metadata reconciler resetting document.title on reload/hydration.
  useEffect(() => {
    const targetTitle = SITE_TITLES[lang];
    const syncTitleAndLang = () => {
      if (document.title !== targetTitle) {
        document.title = targetTitle;
      }
      if (document.documentElement.lang !== lang) {
        document.documentElement.lang = lang;
      }
    };

    // Immediate sync
    syncTitleAndLang();

    // Guard against Next.js metadata reconciler asynchronously overwriting title during hydration
    const rafId = requestAnimationFrame(syncTitleAndLang);
    const t50 = setTimeout(syncTitleAndLang, 50);
    const t200 = setTimeout(syncTitleAndLang, 200);
    const t500 = setTimeout(syncTitleAndLang, 500);
    const t1000 = setTimeout(syncTitleAndLang, 1000);

    // MutationObserver on document.querySelector("title") or head
    const targetEl = document.querySelector("title") || document.head;
    let observer: MutationObserver | null = null;
    if (typeof MutationObserver !== "undefined" && targetEl) {
      observer = new MutationObserver(() => {
        if (document.title !== targetTitle) {
          document.title = targetTitle;
        }
      });
      observer.observe(targetEl, {
        subtree: true,
        characterData: true,
        childList: true,
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t50);
      clearTimeout(t200);
      clearTimeout(t500);
      clearTimeout(t1000);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [lang]);

  const t = (bn: string, en: string) => {
    if (!mounted) return bn;
    return lang === "en" ? en : bn;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

