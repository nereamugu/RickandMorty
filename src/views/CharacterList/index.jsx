// Importando.
import React, { useCallback, useState, useEffect } from "react"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"
import Card from "../../components/Card"
import "./style.css"
import Pagination from "../../components/Pagination"
import modal from "../../components/Modal/modal"
import Footer from "../../components/footer"

// Componente funcional.
const CharacterList = () => {
    const [inputText, setInputText] = useState();
    const [characters, setCharacters] = useState([])
    const [ModalOpen, setmodalOpen] = useState(false)
    const [page, setPage] = useState(1)



    const onPagination = (type) => {
        if (type === "previous" && page > 1) {
            setPage(page - 1)
        }


        if (type === "next" && page < (characters.info.pages)) {

            setPage(page + 1)
        }
    }

    const getInputText = (text) => {
        if (text) {
            setInputText(text)
        }
    }

    const queryByInputText = useCallback(async () => {
        const query = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputText}&page=${page}`, {
            method: "GET",
        })

        setCharacters(await query.json());



    }, [inputText, page])

    useEffect(() => {
        queryByInputText();
    }, [queryByInputText]);


const handleModal = (value) =>{
    setmodalOpen(value)

}

    return (<div className="character-list__container">
        <Header />
        <SearchBar getInputText={getInputText} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {characters && characters.results && characters.results.map((character) => { return <Card character={character} onClick={ ( ) => handleModal(true)} /> })}
        </div>

        { 
        ModalOpen === true && <modal handleClick= {() => handleModal(false)}/>
        }

        <Pagination page={page} onPagination={onPagination} />
        <Footer />

    </div>)
}

// Exportar
export default CharacterList