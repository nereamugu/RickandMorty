import React, { useEffect, useState } from "react"
import "./styles.css"

const SearchBar = (props) => {
    const [text, setText] = useState();

    useEffect(() => {
        props.getInputText(text)
    }, [text]);

    return (
        
        <div className="search-bar__container">
            <h3 className="search-bar__title"> Buscador de personajes</h3>
            <input className="search-bar__input"
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)} />
        </div>
        

    );

}
export default SearchBar;