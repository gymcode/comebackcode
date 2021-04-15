import {React, Fragment} from 'react'
import Tasks from './Tasks'

function Task({tasks, onDelete, toggleClass}){

    return (
        <Fragment>
            {tasks.map((items, index)=> (
                <>
                    <Tasks key={index} tname={items.text} day={items.day} id={items.id} reminder={items.reminder} onDelete={onDelete} toggleId={toggleClass}/>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 