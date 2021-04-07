import {React, Fragment} from 'react'
import Tasks from './Tasks'

function Task({tasks}){

    return (
        <Fragment>
            {tasks.map((items)=> (
                <>
                    <Tasks key={items.key} tname={items.text} day={items.day}/>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 