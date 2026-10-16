import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme.js";
import { useLang } from "./hooks/useLang.js";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Toast } from "./components/Toast.jsx";
import { Home } from "./pages/Home.jsx";
import { Doc } from "./pages/Doc.jsx";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [lang, setLang] = useLang();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage("");
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

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
