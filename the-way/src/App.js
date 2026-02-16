import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import BetterHeader from "./components/BetterHeader";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Rules from "./pages/Rules";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Working from "./pages/Working";

function Layout({ children }) {
  const location = useLocation();
  const isWorking = location.pathname === "/working";

  return (
    <>
      {/* Header selection */}
      {isWorking ? <BetterHeader /> : <Header />}

      {/* ✅ Apply pt-16 ONLY when Header is used */}
      <div className={isWorking ? "" : "pt-16"}>{children}</div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />

        <Layout>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/working" element={<Working />} />
              <Route path="/about" element={<About />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
            </Routes>
          </main>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
