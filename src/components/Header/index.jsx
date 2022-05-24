import React from "react"
import SearchBar from "../SearchBar";
import "./styles.css"


const Header = () => {
    return (<div className="header__background">
        <div className="header__logo">Rick and Morty</div>
        <div className="header__navigation">
            <p className="navigation__item"> Home</p>
            <p className="navigation__item"> Contacto</p>
        </div>
    </div>);

{/* <Link to="/">Home</Link>
<Link to="/pokemons">Pokemons</Link>
<Link to="/contacto">Contacto</Link> */}

}
export default Header;