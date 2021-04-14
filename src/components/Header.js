import propTypes from "prop-types";
import {React, Fragment} from 'react'

// imports 
import Button from './button'

function Header({title, onClickBtn, showStatus}) {


    return (
        <header className={"header"}>
            <h1>{title}</h1>
            <Button onclickBtn={onClickBtn} color={ showStatus ? "red" : "green"} text={showStatus ? "Close" : "Add"} />
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