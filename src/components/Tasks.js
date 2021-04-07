function Tasks ({tname, day}){
    return (
        <div className={"task"}>
            <h3>{tname}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Tasks