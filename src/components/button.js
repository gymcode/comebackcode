import {react, Fragment} from 'react'

function Button({text, color, onclickBtn }){
    return (
        <Fragment>
             <button onClick={onclickBtn} style={{backgroundColor: color}} className={"btn"}>{text}</button>
        </Fragment>
    )
}

export default Button