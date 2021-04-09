import {React, Fragment} from 'react'
import Tasks from './Tasks'

function Task({tasks, onDelete, toggleClass}){

    return (
        <Fragment>
            {tasks.map((items)=> (
                <>
                    <Tasks key={items.key} tname={items.text} day={items.day} id={items.id} onDelete={onDelete} toggleId={toggleClass}/>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 