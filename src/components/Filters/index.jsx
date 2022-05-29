import React, { useState, useEffect } from 'react';
import "./style.css"

const Filters = (props) => {
	const [ filter, setFilter ] = useState();

	useEffect(
		() => {
			if (props.getFilters) {
				props.getFilters(filter);
			}
		},
		[ filter ]
	);

	return (
		<div className='ContainerFilter'>
			<button className='ButtonFilter' onClick={() => setFilter('todos')}>todos </button>
			<button className='ButtonFilter' onClick={() => setFilter('vivo')}>Vivo </button>
			<button className='ButtonFilter' onClick={() => setFilter('muerto')}>Muerto </button>
            <button className='ButtonFilter' onClick={() => setFilter('hombre')}>Hombre </button>
			<button className='ButtonFilter' onClick={() => setFilter('mujer')}>Mujer</button>
		</div>
	);
};

export default Filters;
