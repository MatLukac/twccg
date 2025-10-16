// App.jsx (alebo iná hl. komponenta)
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import NewsGrid from "./components/NewsGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";



function App() {
  return (
    <div>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Header />
      
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Home />} />
        </Routes>

    
        
      </main>
      </BrowserRouter >
    </div>
  );
}


export default App;
