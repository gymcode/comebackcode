import {React, Fragment} from 'react'
import Tasks from './Tasks'

function Task({tasks, onDelete}){

    return (
        <Fragment>
            {tasks.map((items)=> (
                <>
                    <Tasks key={items.key} tname={items.text} day={items.day} id={items.id} onDelete={onDelete} toggleId={}/>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 