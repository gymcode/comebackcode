import {FaTimes} from 'react-icons/fa'

function Tasks ({tname, day, onDelete, id}){
    return (
        <div className={"task"}>
            <h3>{tname} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={()=>{console.log(id)}} /> </h3>
            <p>{day}</p>
        </div>
    )
}

export default Tasks