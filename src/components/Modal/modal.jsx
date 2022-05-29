import React from 'react';

import './Modal.css';

const Modal = (props) => {
	const { name, status, species, gender} = props.selectedCharacter;


	return (
		<div className="popup__background" onClick={() => props.handleClick()}>
			<div className="popup__container">
				<div className="popup__containerTitulo">
					<span> X</span>
					<h3 className="popup__title"> Ficha técnica</h3>
				</div>
				<p className="popup__nombre"> {name}</p>
				<p className="popup__estado"> {status}</p>
				<p className="popup__especie">{species}</p>
				<p className="popup__genero"> {gender}</p>
                
			</div>
		</div>
	);
};

export default Modal;
