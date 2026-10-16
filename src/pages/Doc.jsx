import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CONFIG as C } from "../config.js";
import { UI, PAGES } from "../content.js";
import { TableOfContents } from "../components/TableOfContents.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { CalloutBox } from "../components/CalloutBox.jsx";
import {
  CopyIcon,
  PrintIcon,
  BackArrowIcon,
} from "../components/Icons.jsx";

export function Doc({ page, lang, showToast }) {
  const t = UI[lang];
  const data = PAGES[page][lang];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${data.title} | ${C.appName}`;

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

        <div className="doc-header">
          <h1>{data.title}</h1>
          <div className="doc-meta">
            <span>{t.updated}: <strong>{lang === "ar" ? C.lastUpdated : C.lastUpdatedEn}</strong></span>
            <span>•</span>
            <span>{C.companyName}</span>
          </div>
        </div>

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
