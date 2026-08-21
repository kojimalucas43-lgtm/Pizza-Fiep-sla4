import pizza from '../assets/pizza.png'

export default function Sobre(){
    return(
        <section className='sobre' id='sobre'>
            <h2>Sobre Nós</h2>
            <p className='texto-topo'>
                Na Pizza FIEP, acreditamos que boas histórias começam ao redor de uma mesa. Nosso espaço nasceu com a ideia de unir pessoas, sabores e momentos especiais em um ambiente acolhedor, inspirado nas tradicionais pizzarias italianas.
            </p>
            <div className='comteudo'>
                <div className='imagem'>
                    <img src={pizza} alt='Pizza artesanal no forno'/>
                </div>
                <div className='texto-lateral'>
                    <p></p>
                </div>
            </div>
        </section>
    )
}