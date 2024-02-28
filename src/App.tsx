import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="min-h-[80vh]">
      <Home/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
