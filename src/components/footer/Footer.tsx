import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer(){
    return (
        <>
            <footer className="bg-preto-nav text-branco p-2 flex flex-col justify-center items-center">
                <h3>Young Farma | &copy; </h3>
                <p>Acesse nossas redes sociais</p>
                <div className="flex">
                    <InstagramLogo size={32} />
                    <FacebookLogo size={32} />
                    <LinkedinLogo size={32} />
                </div>
            </footer>
        </>
    )

}

export default Footer