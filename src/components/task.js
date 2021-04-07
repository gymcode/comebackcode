import {React, Fragment} from 'react'



function Task(){
    return (
        <Fragment>
            {task.map((items)=> (
                <>
                    <h3>{items.text}</h3>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 