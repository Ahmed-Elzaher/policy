import React, { useEffect, useState, useMemo } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { CONFIG as C } from "./config.js";
import { UI, PAGES } from "./content.js";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { TableOfContents } from "./components/TableOfContents.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { CalloutBox } from "./components/CalloutBox.jsx";
import {
  ShieldIcon,
  DocumentIcon,
  TrashIcon,
  HeadsetIcon,
  CopyIcon,
  CheckIcon,
  PrintIcon,
  BackArrowIcon,
  ForwardArrowIcon,
} from "./components/Icons.jsx";

const CARD_META = {
  privacy: {
    icon: <ShieldIcon size={22} />,
    descAr: "معلومات جمع البيانات والأذونات والحماية وخدمات الطرف الثالث المعتمدة.",
    descEn: "Data collection, device permissions, security measures, and third-party services.",
  },
  terms: {
    icon: <DocumentIcon size={22} />,
    descAr: "قواعد الاستخدام المقبول، حقوق الملكية الفكرية، ومسؤوليات الحساب.",
    descEn: "Acceptable use guidelines, intellectual property, and user responsibilities.",
  },
  delete: {
    icon: <TrashIcon size={22} />,
    descAr: "إجراءات حذف الحساب وكافة البيانات المرتبطة وفق متطلبات Google Play Data Safety.",
    descEn: "Permanent account and data erasure in compliance with Google Play requirements.",
  },
  support: {
    icon: <HeadsetIcon size={22} />,
    descAr: "قنوات التواصل الرسمية مع فريق الدعم الفني للاستفسارات والمساعدة.",
    descEn: "Official technical support and compliance channels for direct inquiries.",
  },
};

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  return [theme, toggleTheme];
}

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
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return [lang, setLang];
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast-notice" role="status" aria-live="polite">
      <CheckIcon size={16} />
      <span>{message}</span>
    </div>
  );
}

function Doc({ page, lang, showToast }) {
  const t = UI[lang];
  const data = PAGES[page][lang];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageTitle = `${data.title} | ${C.appName}`;
    document.title = pageTitle;

    // Update meta description dynamically
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        lang === "ar"
          ? `${data.title} الرسمية لتطبيق MatchIn - تم التحديث في ${C.lastUpdated}`
          : `Official ${data.title} for MatchIn - Last updated on ${C.lastUpdatedEn}`
      );
    }
  }, [page, lang, data.title]);

  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return data.sections;
    const query = searchTerm.toLowerCase();
    return data.sections.filter((s) => {
      const matchHeader = s.h.toLowerCase().includes(query);
      const matchP = s.p?.some((x) => x.toLowerCase().includes(query));
      const matchUl = s.ul?.some((x) => x.toLowerCase().includes(query));
      return matchHeader || matchP || matchUl;
    });
  }, [data.sections, searchTerm]);

  const copyPageLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast(lang === "ar" ? "تم نسخ الرابط بنجاح" : "Link copied to clipboard");
  };

  return (
    <article className="doc-layout">
      <div className="doc-main">
        <div className="doc-top-bar">
          <Link to="/" className="back-link">
            <BackArrowIcon isRtl={lang === "ar"} size={16} />
            <span>{lang === "ar" ? "الرئيسية" : "Home"}</span>
          </Link>

          <div className="doc-actions">
            <button
              className="doc-action-btn"
              onClick={() => window.print()}
              title={lang === "ar" ? "طباعة أو حفظ كـ PDF" : "Print or save as PDF"}
            >
              <PrintIcon size={14} />
              <span>{lang === "ar" ? "طباعة / PDF" : "Print"}</span>
            </button>
            <button
              className="doc-action-btn"
              onClick={copyPageLink}
              title={lang === "ar" ? "نسخ رابط الصفحة" : "Copy page URL"}
            >
              <CopyIcon size={14} />
              <span>{lang === "ar" ? "نسخ الرابط" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        <header className="doc-header">
          <h1>{data.title}</h1>
          <div className="doc-meta">
            <span>{t.updated}: <strong>{lang === "ar" ? C.lastUpdated : C.lastUpdatedEn}</strong></span>
            <span>•</span>
            <span>{C.companyName}</span>
          </div>
        </header>

        {page === "delete" && (
          <CalloutBox
            type="danger"
            title={lang === "ar" ? "إجراءات حذف البيانات (Google Play Data Safety)" : "Data Safety & Erasure Notice"}
          >
            <p>
              {lang === "ar"
                ? "إجراء الحذف نهائي. يتم فوراً مسح بيانات السيرة الذاتية (CV)، ومعلومات الملف الشخصي، وسجلات المحادثات نهائياً من خوادمنا الحية."
                : "Deletion is permanent. Your CV documents, profile credentials, and AI interaction history are purged from our active databases."}
            </p>
          </CalloutBox>
        )}

        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder={lang === "ar" ? "ابحث في بنود الوثيقة..." : "Search document sections..."}
        />

        <div className="doc-body" style={{ marginTop: "24px" }}>
          {filteredSections.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--muted)", padding: "40px 0" }}>
              {lang === "ar" ? "لم يتم العثور على نتائج تطابق بحثك." : "No sections matched your search."}
            </p>
          ) : (
            filteredSections.map((s, i) => (
              <section key={i} id={`sec-${i}`} className="doc-section">
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
            ))
          )}
        </div>
      </div>

      <TableOfContents sections={data.sections} lang={lang} />
    </article>
  );
}

function Home({ lang, showToast }) {
  const t = UI[lang];
  const keys = ["privacy", "terms", "delete", "support"];
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = `MatchIn | ${t.homeTitle}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        lang === "ar"
          ? "المركز القانوني وبوابة السياسات الرسمية وشروط الاستخدام وحذف الحساب لتطبيق MatchIn."
          : "Official policy and legal center for MatchIn: privacy policy, terms of service, and data safety."
      );
    }
  }, [lang, t.homeTitle]);

  const filteredKeys = keys.filter((k) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    const title = t.nav[k]?.toLowerCase() || "";
    const desc = (lang === "ar" ? CARD_META[k].descAr : CARD_META[k].descEn).toLowerCase();
    return title.includes(q) || desc.includes(q);
  });

  const copyEmail = () => {
    navigator.clipboard?.writeText(C.email);
    showToast(lang === "ar" ? "تم نسخ البريد الإلكتروني" : "Email copied to clipboard");
  };

  return (
    <div className="home-view">
      <div className="hero">
        <h1>{t.homeTitle}</h1>
        <p className="hero-sub">{t.homeSub}</p>

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder={lang === "ar" ? "ابحث في السياسات أو الشروط أو حذف الحساب..." : "Search policies, terms, or data deletion..."}
        />
      </div>

      <div className="cards-grid">
        {filteredKeys.map((k) => (
          <Link key={k} to={`/${k}`} className="portal-card">
            <div>
              <div className="card-icon-bubble">{CARD_META[k].icon}</div>
              <h2 className="card-title">{t.nav[k]}</h2>
              <p className="card-desc">
                {lang === "ar" ? CARD_META[k].descAr : CARD_META[k].descEn}
              </p>
            </div>
            <span className="card-footer-action">
              <span>{t.open}</span>
              <ForwardArrowIcon isRtl={lang === "ar"} size={16} />
            </span>
          </Link>
        ))}
      </div>

      <div className="contact-card">
        <div className="contact-card-text">
          <h3>
            {lang === "ar"
              ? "هل لديك استفسار قانوني أو تقني؟"
              : "Have legal, technical, or privacy questions?"}
          </h3>
          <p>
            {lang === "ar"
              ? "فريق الدعم والامتثال القانوني لتطبيق MatchIn متاح للإجابة على استفساراتك."
              : "Our compliance and support desk is ready to help with your privacy and policy questions."}
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          <a href={`mailto:${C.email}`} className="contact-card-btn">
            {C.email}
          </a>
          <button
            className="icon-btn"
            onClick={copyEmail}
            title={lang === "ar" ? "نسخ البريد الإلكتروني" : "Copy email address"}
          >
            <CopyIcon size={15} />
            <span>{lang === "ar" ? "نسخ" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [lang, setLang] = useLang();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2400);
  };

  return (
    <div className="layout">
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} showToast={showToast} />} />
          <Route path="/privacy" element={<Doc page="privacy" lang={lang} showToast={showToast} />} />
          <Route path="/terms" element={<Doc page="terms" lang={lang} showToast={showToast} />} />
          <Route path="/delete" element={<Doc page="delete" lang={lang} showToast={showToast} />} />
          <Route path="/support" element={<Doc page="support" lang={lang} showToast={showToast} />} />
          <Route path="*" element={<Home lang={lang} showToast={showToast} />} />
        </Routes>
      </main>

      <Footer lang={lang} />
      <Toast message={toastMessage} />
    </div>
  );
}
