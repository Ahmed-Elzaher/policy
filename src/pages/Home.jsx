import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CONFIG as C } from "../config.js";
import { UI } from "../content.js";
import { SearchBar } from "../components/SearchBar.jsx";
import {
  ShieldIcon,
  DocumentIcon,
  TrashIcon,
  HeadsetIcon,
  CopyIcon,
  ForwardArrowIcon,
} from "../components/Icons.jsx";

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

export function Home({ lang, showToast }) {
  const t = UI[lang];
  const keys = useMemo(() => ["privacy", "terms", "delete", "support"], []);
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

  const filteredKeys = useMemo(() => {
    if (!search.trim()) return keys;
    const q = search.toLowerCase();
    return keys.filter((k) => {
      const title = t.nav[k]?.toLowerCase() || "";
      const desc = (lang === "ar" ? CARD_META[k].descAr : CARD_META[k].descEn).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [keys, search, t.nav, lang]);

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
