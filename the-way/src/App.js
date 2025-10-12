// App.jsx (alebo iná hl. komponenta)
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16">  {/* offset kvôli fixnému headeru */}
        {/* zvyšok obsahu */}
        
      </main>
      
    </div>
  );
}


export default App;
