// App.jsx (alebo iná hl. komponenta)
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import NewsGrid from "./components/NewsGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <div>
      <Router>
      <Header />
      
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Routes>
          <Route path="/twccg" element={<Home />} />
          <Route path="/twccg/about" element={<Home />} />
          <Route path="/twccg/rules" element={<Home />} />
          <Route path="/twccg/contact" element={<Home />} />
        </Routes>

    
        
      </main>
      </Router>
    </div>
  );
}


export default App;
