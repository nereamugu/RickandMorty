import React from "react"
import "./styles.css"


const Footer = () => {
    return (<div className="footer__container">
        <div className="row1">
        <div className="footer__logo">Logo</div>
        <div className="footer__navigation">
            <p className="footer__item"> Rick&Morty</p>
            <p className="footer__item"> Contacto</p>
        </div>
        </div>
        <hr />
        <div className="row2">
        <p className="footer__item2"> Todos los derechos revervados</p>
        </div>
        
    </div>);

{/* <Link to="/">Home</Link>
<Link to="/pokemons">Pokemons</Link>
<Link to="/contacto">Contacto</Link> */}

}
export default Footer;