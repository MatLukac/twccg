
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";




import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import usePageTracking from "./components/UsePageTracking";




function App() {
  
  return (
    <div className="flex flex-col min-h-screen">

      <HashRouter  basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      
      <main className="flex-1 pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        
      </main>

      </HashRouter>

      <Footer />
    </div>
    
  );
}


export default App;
