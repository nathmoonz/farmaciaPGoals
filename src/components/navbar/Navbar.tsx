function Navbar(){
    return (
        <nav className="bg-preto-nav flex flex-row justify-between pt-5 pb-5 pl-8 pr-8">
            <div className="text-branco">
                Young Farma
            </div>
            <div className="text-branco flex flex-row gap-7">
                <p>Produtos</p>
                <p>Categorias</p>
            </div>
        </nav>
    )
}

export default Navbar;