// Importando.
import React, { useCallback, useState, useEffect } from 'react';

import Card from '../../components/Card';
import './style.css';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal/modal';
import Footer from '../../components/footer';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';

// Componente funcional.
const CharacterList = () => {
	const [ inputText, setInputText ] = useState(undefined);
	const [ filter, setFilter ] = useState(undefined);
	const [ characters, setCharacters ] = useState([]);
	const [ modalOpen, setModalOpen ] = useState(false);
	const [ selectedCharacter, setSelectedCharacter ] = useState();
	const [ page, setPage ] = useState(1);

	const onPagination = (type) => {
		if (type === 'previous' && page > 1) {
			setPage(page - 1);
		}

		if (type === 'next' && page < characters.info.pages) {
			setPage(page + 1);
		}
	};

	const getInputText = (text) => {
		if (text) {
			setInputText(text);
		}
	};

	const getFilters = (filter) => {
		switch (filter) {
			case 'vivo':
				setFilter(`status=alive`);
				break;
			case 'muerto':
				setFilter(`status=dead`);
				break;
			case 'hombre':
				setFilter(`gender=male`);
				break;
			default:
				console.log('No encontré nada');
		}
	};

	const queryByInputText = useCallback(
		async () => {
			const query = await fetch(
				`https://rickandmortyapi.com/api/character/?name=${inputText}&page=${page}`,
				{
					method: 'GET'
				}
			);

			setCharacters(await query.json());
		},
		[ inputText, page, filter ]
	);

	useEffect(
		() => {
			queryByInputText();
		},
		[ queryByInputText ]
	);

	const handleModal = (value) => {
		setModalOpen(value);
	};

	return (
		<div className="character-list__container">
			<SearchBar getInputText={getInputText} />
			<Filters getFilters={getFilters} />
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{characters &&
					characters.results &&
					characters.results.map((character) => {
						return (
							<Card
								character={character}
								onClick={() => {
									setSelectedCharacter(character);
									handleModal(true);
								}}
							/>
						);
					})}
			</div>

			{modalOpen === true && (
				<Modal selectedCharacter={selectedCharacter} handleClick={() => handleModal(false)} />
			)}

			<Pagination page={page} onPagination={onPagination} />
			<Footer />
		</div>
	);
};

// Exportar
export default CharacterList;
