import React, { useEffect, useState, useRef } from "react";

export default function PopupModal({
  id = "site_popup_dismissed",
  title = "Máme pre vás novinku!",
  description = "Pridajte sem krátky popis, zľavu alebo oznámenie.",
  ctaText = "Viac info",
  ctaHref = "https://donio.sk/pribeh/12863?utm_source=copylink&utm_medium=socialshare&utm_campaign=share_button&utm_content=bb0aaf01-1fc2-422e-9eff-0d89f7d13370",
  className = "",
}) {
  const [visible, setVisible] = useState(false);
  const closeBtnRef = useRef(null);
  const prevFocusedRef = useRef(null);

  const SHOW_DELAY = 1000; // 5 sekúnd
  const REAPPEAR_DELAY = 1000000000; // 10 sekúnd

  function getDismissed() {
    if (typeof window === "undefined") return false;
    try {
      const raw = window.localStorage.getItem(id);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.ts) {
        const expired = Date.now() - parsed.ts > REAPPEAR_DELAY;
        if (expired) {
          window.localStorage.removeItem(id);
          return false;
        }
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  function setDismissed() {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(id, JSON.stringify({ ts: Date.now() }));
    } catch {}
  }

  useEffect(() => {
    const dismissed = getDismissed();
    if (!dismissed) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, SHOW_DELAY);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // otvorí nové okno pri prvom zobrazení
      if (ctaHref) {
        window.open(ctaHref, "_blank", "noopener,noreferrer");
      }

      prevFocusedRef.current = document.activeElement;
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      try {
        prevFocusedRef.current?.focus?.();
      } catch {}
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function handleClose() {
    setVisible(false);
    setDismissed();
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-6 ${className}`}
      aria-hidden={false}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => handleClose(true)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative z-10 w-full max-w-lg mx-auto overflow-hidden bg-white shadow-2xl rounded-2xl"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="popup-title"
                className="text-xl font-semibold text-gray-900 sm:text-2xl"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>

            <div className="shrink-0">
              <button
                ref={closeBtnRef}
                onClick={() => handleClose(true)}
                aria-label="Zavrieť"
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D7B264]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClose(true)}
              className="inline-block px-4 py-2 font-medium text-white bg-[#D7B264] rounded-md hover:bg-[#EDC46E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EDC46E]"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
