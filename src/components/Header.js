import propTypes from "prop-types";
import {React, Fragment} from 'react'

function Header({title}) {

    function onClickBtn(e){
        console.log(e)
    }

    return (
        <header className={"header"}>
            <h1>{title}</h1>
            <button onClick={onClickBtn(e)} className={"btn"}>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: propTypes.string
}

export default Header