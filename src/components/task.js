import {React, Fragment, useState} from 'react'
import {task} from '../array/taskArray'


function Task(){
    const [tasks, setTasks] = useState(task)
    return (
        <Fragment>
            {tasks.map((items)=> (
                <>
                    <h3>{items.text}</h3>
                </>
            ))}
        </Fragment> 
    )
}

export default Task; 