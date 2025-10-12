// App.jsx (alebo iná hl. komponenta)
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Header />
      
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}

        <Banner 
        
      />
        
      </main>
      
    </div>
  );
}


export default App;
