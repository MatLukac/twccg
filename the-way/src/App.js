
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import NewsGrid from "./components/NewsGrid";

import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div>
      <BrowserRouter basename="/twccg" >
      <Header />
      
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </main>
      </BrowserRouter>
    </div>
  );
}


export default App;
