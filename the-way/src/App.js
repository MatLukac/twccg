// App.jsx (alebo iná hl. komponenta)
import Header from "./components/Header";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import NewsGrid from "./components/NewsGrid";




function App() {
  return (
    <div>
      <Header />
      
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Banner />
        <InfoSection />
        <NewsGrid />
        <Newsletter />

        <Footer />
        
      </main>
      
    </div>
  );
}


export default App;
