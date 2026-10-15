import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { CONFIG as C } from "./config.js";
import { UI, PAGES } from "./content.js";

const CARD_META = {
  privacy: {
    icon: "🛡️",
    descAr: "معلومات جمع البيانات والأذونات والحماية وخدمات الطرف الثالث",
    descEn: "Data collection, mobile permissions, and third-party integrations",
  },
  terms: {
    icon: "📜",
    descAr: "قواعد الاستخدام المقبول، حقوق الملكية، ومسؤوليات الحساب",
    descEn: "Acceptable use policies, intellectual property, and guidelines",
  },
  delete: {
    icon: "🗑️",
    descAr: "إجراءات حذف الحساب والبيانات وفق سياسات Google Play",
    descEn: "Step-by-step account and data erasure instructions",
  },
  support: {
    icon: "💬",
    descAr: "قنوات التواصل مع الدعم الفني وطرق الاستفسار",
    descEn: "Direct technical support desk and social media channels",
  },
};

function useLang() {
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
    document.title = lang === "ar" ? C.appName : C.appNameEn;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);
  return [lang, setLang];
}

function Doc({ page, lang }) {
  const t = UI[lang];
  const data = PAGES[page][lang];
  return (
    <article className="doc">
      <div className="doc-header">
        <Link to="/" className="back-link">
          {lang === "ar" ? "← العودة للرئيسية" : "← Back to Home"}
        </Link>
        <h1>{data.title}</h1>
        <p className="muted">
          <span>{t.updated}:</span> <strong>{C.lastUpdated}</strong>
        </p>
      </div>

      <div className="doc-body">
        {data.sections.map((s, i) => (
          <section key={i} className="doc-section">
            <h2>{s.h}</h2>
            {s.p?.map((x, j) => (
              <p key={j}>{x}</p>
            ))}
            {s.ul && (
              <ul>
                {s.ul.map((x, j) => (
                  <li key={j}>{x}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

function Home({ lang }) {
  const t = UI[lang];
  const keys = ["privacy", "terms", "delete", "support"];
  const arrow = lang === "ar" ? "←" : "→";

  return (
    <div className="home">
      <div className="hero">
        <span className="hero-badge">{t.badge}</span>
        <h1>{t.homeTitle}</h1>
        <p className="hero-sub">{t.homeSub}</p>
      </div>

      <div className="cards">
        {keys.map((k) => (
          <Link key={k} to={`/${k}`} className="card">
            <div className="card-top">
              <span className="card-icon">{CARD_META[k].icon}</span>
              <strong>{t.nav[k]}</strong>
            </div>
            <p className="card-desc">
              {lang === "ar" ? CARD_META[k].descAr : CARD_META[k].descEn}
            </p>
            <span className="card-action">
              {t.open} {arrow}
            </span>
          </Link>
        ))}
      </div>

      <div className="contact-box">
        <div className="contact-text">
          <h3>{lang === "ar" ? "هل لديك استفسار قانوني أو تقني؟" : "Have legal or technical questions?"}</h3>
          <p>{lang === "ar" ? "فريق الدعم متاح للإجابة على استفساراتك حول السياسات والبيانات." : "Our support team is available to help with policies and data safety."}</p>
        </div>
        <a href={`mailto:${C.email}`} className="contact-btn">
          {C.email}
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useLang();
  const t = UI[lang];
  return (
    <div className="layout">
      <header>
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-dot"></span>
            <span className="brand-text">{lang === "ar" ? C.appName : C.appNameEn}</span>
          </Link>
          <nav>
            {["privacy", "terms", "delete", "support"].map((k) => (
              <NavLink key={k} to={`/${k}`}>
                {t.nav[k]}
              </NavLink>
            ))}
          </nav>
          <button
            className="lang-btn"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label="Toggle language"
          >
            🌐 {t.langBtn}
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/privacy" element={<Doc page="privacy" lang={lang} />} />
          <Route path="/terms" element={<Doc page="terms" lang={lang} />} />
          <Route path="/delete" element={<Doc page="delete" lang={lang} />} />
          <Route path="/support" element={<Doc page="support" lang={lang} />} />
          <Route path="*" element={<Home lang={lang} />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-inner">
          <p>{t.footer}</p>
          <p className="footer-meta">
            {lang === "ar" ? "تطبيق MatchIn للتوظيف الذكي وتحليل المهارات" : "MatchIn - Smart Job Discovery & Skill Analysis Platform"}
          </p>
        </div>
      </footer>
    </div>
  );
}
