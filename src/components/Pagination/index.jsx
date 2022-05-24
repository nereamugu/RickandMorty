import React from "react"
import "./styles.css"

const Pagination = (props) => {

    const onPrevious = () => {
        props.onPagination("previous")
    }

    const onNext = () => {
        props.onPagination("next")
    }
    return (
        <div className="pagination__container">
            <button onClick={onPrevious}> Prev </button>
            <button onClick={onNext}> Next </button>
        </div>);

}
export default Pagination;