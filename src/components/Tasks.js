import {FaTimes} from 'react-icons/fa'

function Tasks ({tname, day, onDelete, id, toggleId, reminder}){
    return (
        <div className={`task ${reminder ? "reminder": ""}`} onDoubleClick={()=>{toggleId(id)}}>
            <h3>{tname} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={()=>{onDelete(id)}} /> </h3>
            <p>{day}</p>
        </div>
    )
}

export default Tasks                