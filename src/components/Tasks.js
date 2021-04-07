import {FaTimes} from 'react-icons/fa'

function Tasks ({tname, day}){
    return (
        <div className={"task"}>
            <h3>{tname} <FaTimes/> </h3>
            <p>{day}</p>
        </div>
    )
}

export default Tasks