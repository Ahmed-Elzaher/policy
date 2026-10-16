import React, { useEffect, useState } from "react";
import { DocumentIcon } from "./Icons.jsx";

export function TableOfContents({ sections, lang }) {
  const [activeId, setActiveId] = useState("sec-0");

  useEffect(() => {
    const handleScroll = () => {
      if (!sections || sections.length === 0) return;

      // 1. If user is at the very bottom edge of the page (within 12px), activate last section
      const scrollBottom =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

      if (scrollBottom <= 12) {
        setActiveId(`sec-${sections.length - 1}`);
        return;
      }

      // 2. Find the current section in view based on viewport position
      // A section becomes active when its heading reaches the upper portion of viewport (<= 140px)
      let current = "sec-0";
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(`sec-${i}`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          current = `sec-${i}`;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setActiveId(id);
                    window.history.pushState(null, "", `#${id}`);
                  }
                }}
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
