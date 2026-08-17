import React from "react";
import { useState } from React

export default function Header(){
    const [meuuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!meuuAtivo)
    };

    return(
        <>
            <header className="header">
                <h1 className="logo">Pizza Fiep</h1>

                <div className="menu-taggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        </>
    )
}
