import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
	return (
		<div className="header__background">
			<div className="header__logo">Rick and Morty</div>
			<div className="header__navigation">
				<Link to="/">
					<p className="navigation__item"> Home</p>
				</Link>
				<Link to="/contact">
					{' '}
					<p className="navigation__item"> Contacto</p>
				</Link>
			</div>
		</div>
	);

	{
	}
};
export default Header;
