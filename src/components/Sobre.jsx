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
                    <p>Tudo começa com ingredientes selecionados, massa preparada com cuidado e o aroma irresistível que sai do forno a lenha. Cada pizza é feita com dedicação, respeitando a tradição, mas também trazendo um toque de criatividade que torna cada experiência única.</p>
                    <p>Mais do que servir pizzas, queremos criar memórias. Seja em um encontro entre amigos, uma pausa depois de um dia de trabalho ou uma comemoração especial, a Pizza FIEP é um lugar para compartilhar, conversar e aproveitar o melhor da boa comida.</p>
                    
                </div>
            </div>
        </section>
    )
}