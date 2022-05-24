import React from "react"
import "./styles.css"

const Card = (props) => {
    return (
        <div className="card__container" onClick={()=>props.onClick()}>
            <div className="card" >

                <img className="card_image" src={props.character.image} />



            </div>

            <h2 className="card_name">{props.character.name}</h2>

        </div>);

}
export default Card;