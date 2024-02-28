import Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import CardCategoria from "../cardCategoria/Cardcategoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  useEffect(() => {
        buscarCategorias();
    }, []);
  
    async function buscarCategorias() {
      try {
        await buscar('/categorias', setCategorias)

      } catch (error: any) {
        alert(error.message)
      }
    }

    return (
      <>
        {categorias.length === 0 && (
        <div>Loading...</div>
        )}
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <>
                  <CardCategoria key={categoria.id} categoria={categoria} />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ListaCategorias;