import propTypes from "prop-types";
import {React, Fragment} from 'react'

// imports 
import Button from './button'

function Header({title}) {

    function onClickBtn(e){
        console.log(e)
    }

    return (
        <header className={"header"}>
            <h1>{title}</h1>
            <Button onclickBtn={onClickBtn} color={"green"} text={"Add"} />
            {/* <button onClick={onClickBtn} className={"btn"}>Add</button> */}
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