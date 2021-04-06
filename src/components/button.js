import {react, Fragment} from 'react'

function Button({text, color }){
    return (
        <Fragment>
             <button style={{backgroundColor: color}} className={"btn"}>{text}</button>
        </Fragment>
    )
}

export default Button