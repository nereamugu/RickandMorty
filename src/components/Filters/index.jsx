import React, { useState, useEffect } from 'react';

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
		<div>
			<button onClick={() => setFilter('vivo')}>Vivo </button>
			<button onClick={() => setFilter('muerto')}>Muerto </button>
            <button onClick={() => setFilter('hombre')}>Hombre </button>
		</div>
	);
};

export default Filters;
