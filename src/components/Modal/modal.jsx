import React from 'react';

import './Modal.css';

const Modal = (props) => {
	const { name, status, species, gender} = props.selectedCharacter;


	return (
		<div className="popup__background" onClick={() => props.handleClick()}>
			<div className="popup__container">
				<div className="popup__containerTitulo">
					<span> X</span>
					<h2 className="popup__title"> Ficha técnica</h2>
				</div>
				<p className="popup__nombre"> <b>Nombre:</b>  {name}</p>
				<p className="popup__estado"> <b>Estado:</b> {status}</p>
				<p className="popup__especie"> <b>Especie:</b> {species}</p>
				<p className="popup__genero"> <b>Género:</b>  {gender}</p>
                
			</div>
		</div>
	);
};

export default Modal;
