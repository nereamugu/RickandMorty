import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';
// import logo from '../../images';
import logo from '../../images/logo.png';

const Header = () => {
	return (
		<div className="header__background">
			<div className="header__logo"><img src={logo}alt=""/></div>
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
