import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CONFIG as C } from "../config.js";
import { UI } from "../content.js";
import { SunIcon, MoonIcon } from "./Icons.jsx";

export function Navbar({ lang, setLang, theme, toggleTheme }) {
  const t = UI[lang];
  const location = useLocation();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setReadingProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      setReadingProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, [location.pathname]);

  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="MatchIn Home">
          <div className="brand-badge">M</div>
          <span className="brand-text">{lang === "ar" ? C.appName : C.appNameEn}</span>
          <span className="brand-tag">Legal</span>
        </Link>

        <nav className="nav-links" aria-label="Main Navigation">
          {["privacy", "terms", "delete", "support"].map((k) => (
            <NavLink key={k} to={`/${k}`}>
              {t.nav[k]}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>

          <button
            className="icon-btn"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label="Toggle language"
            title="Switch Language"
          >
            🌐 {t.langBtn}
          </button>
        </div>
      </div>

      {location.pathname !== "/" && (
        <div className="reading-progress-track">
          <div
            className="reading-progress-fill"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}
    </header>
  );
}
