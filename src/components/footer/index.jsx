import React from "react"
import "./styles.css"
import logo from '../../images/logo.png';


const Footer = () => {
    return (<div className="footer__container">
        <div className="row1">
        <div className="footer__logo"><img src={logo}alt=""/></div>
        <div className="footer__navigation">
            <p className="footer__item"> Rick&Morty@info.com</p>
            <div className="footer__item"> 
            <a href=""><i class="bi bi-instagram icono"></i></a>
            <a href=""><i class="bi bi-facebook icono"></i></a> 
            <a href=""><i class="bi bi-twitter icono"></i></a> 
              </div>
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