import {React, Fragment} from 'react'

const task = [
    {
        id: 1, 
        text: "Docktors Appointment", 
        day: "Feb 5th at 2:30pm", 
        reminder: true
    }, 
    {
        id: 2, 
        text: "Complete assigment ", 
        day: "Feb 6th at 21:30pm", 
        reminder: true
    }, 
    {
        id: 3, 
        text: "Meet your friends at Bani", 
        day: "Feb 10th at 1:30pm", 
        reminder: false
    }
]

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