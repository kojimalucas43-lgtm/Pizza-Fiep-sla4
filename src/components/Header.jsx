import { useState } from "react";

export default function Header(){
    const [meuuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!meuuAtivo)
    };

    return(
        <>
            <header className="header">
                <h1 className="logo">Pizza Fiep</h1>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`menu ${setMenuAtivo ? 'active' :''}`}>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#cardapio" onClick={toggleMenu}>Cardapio</a>
                    <a href="#sobre" onClick={toggleMenu}>Sobre</a>
                    <a href="#contato" onClick={toggleMenu}>Contato</a>
                </nav>
            </header>
            <div className={`overlay-menu ${meuuAtivo ? 'active': ''}`} onClick={toggleMenu}>

            </div>
        </>
    )
}
