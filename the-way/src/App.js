
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import ArticlePage from "./pages/ArticlePage";
import Contact from "./pages/Contact";




function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Header />
      
      <main className="flex-1 pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        
      </main>

      </BrowserRouter>

      <Footer />
    </div>
    
  );
}


export default App;
