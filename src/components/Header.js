import propTypes from "prop-types";
import {React, Fragment} from 'react'

function Header({title}) {
    return (
        <Fragment>
            <div>{title}</div>
        </Fragment>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: propTypes.string
}

export default Header