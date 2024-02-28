import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow'>
      <header className='py-2 px-6 bg-rosa text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full text-center'>{categoria.nome}</p>
      <div className="flex">
        <Link to={`/categorias/editar/${categoria.id}`} className='w-1/2 text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/categorias/deletar/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-1/2 flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria;