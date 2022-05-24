import React from "react";

import "./Modal.css";


    const modal = (props) => {
    
    


    return(
        <div className="popup__container">
        <div className="popup__containerTitulo">
        <span onClick={() => props.handleClick()} > X</span>
        <h3 className="popup__title"> Ficha técnica</h3>
        </div>
        <p className="popup__nombre"> props.character.name</p>
        <p className="popup__estado"> vivo</p>
        <p className="popup__especie">Humano</p>
        <p className="popup__tipo"> X</p>
        <p className="popup__genero"> Masculino</p>
       
    </div>

    );
}

export default modal;