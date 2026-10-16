import React from "react";
import { CONFIG as C } from "../config.js";
import { UI } from "../content.js";

export function Footer({ lang }) {
  const t = UI[lang];
  return (
    <footer>
      <div className="footer-inner">
        <p>{t.footer}</p>
        <p className="footer-meta">
          {lang === "ar"
            ? "بوابة السياسات الرسمية وحماية البيانات لتطبيق MatchIn للتوظيف الذكي والذكاء الاصطناعي"
            : "Official Policy & Data Safety Portal for MatchIn Smart Career Platform"}
        </p>
      </div>
    </footer>
  );
}
