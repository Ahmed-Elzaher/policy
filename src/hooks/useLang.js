import { useState, useEffect } from "react";
import { UI } from "../content.js";

/**
 * Custom hook to manage active language (ar/en) with document
 * direction (RTL/LTR) synchronization and localStorage persistence.
 */
export function useLang() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "ar";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = UI[lang].dir;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return [lang, setLang];
}
