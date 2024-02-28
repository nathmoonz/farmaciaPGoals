import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categoria/listaCategoria/ListaCategorias";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categorias" element={<ListaCategorias/>}/>
            <Route path="/categorias/deletar/:id" element={<DeletarCategoria/>}/>
            <Route path="/criarCategoria" element={<FormularioCategoria/>}/>
            {/* <Route path="/categorias/editar/:id" element={<EditarCategoria/>}/> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
