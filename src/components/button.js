import {react, Fragment} from 'react'

function Button({text}){
    return (
        <Fragment>
             <button className={"btn"}>{text}</button>
        </Fragment>
    )
}

export default Button