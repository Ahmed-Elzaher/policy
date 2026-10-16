import React, { useEffect, useState, useRef, useCallback } from "react";
import { DocumentIcon } from "./Icons.jsx";

export function TableOfContents({ sections, lang }) {
  const [activeId, setActiveId] = useState("sec-0");
  const isClickScrolling = useRef(false);
  const clickTimer = useRef(null);

  const updateActiveSection = useCallback(() => {
    if (isClickScrolling.current) return;
    if (!sections || sections.length === 0) return;

    // Detect active section based on heading distance from sticky navbar
    const triggerOffset = 140;
    let current = "sec-0";

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(`sec-${i}`);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerOffset) {
        current = `sec-${i}`;
      }
    }

    setActiveId(current);
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, [updateActiveSection]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    isClickScrolling.current = true;

    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
      updateActiveSection();
    }, 700);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const title = lang === "ar" ? "محتويات الوثيقة" : "Table of Contents";

  return (
    <aside className="toc-sidebar" aria-label={title}>
      <h3 className="toc-title">
        <DocumentIcon size={18} />
        <span>{title}</span>
      </h3>
      <ul className="toc-list">
        {sections.map((s, i) => {
          const id = `sec-${i}`;
          const isActive = activeId === id;
          return (
            <li key={i}>
              <a
                href={`#${id}`}
                className={`toc-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {s.h}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
