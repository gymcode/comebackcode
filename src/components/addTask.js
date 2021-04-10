import {Fragment} from 'react'

function AddTask(){
    return (
        <Fragment>
            <form className={"add-form"}> 
                <div className={"form-control"}>
                    <label>Task</label>
                    <input type={"text"} placeholder={"Add Task"}/>
                </div>
                <div className={"form-control"}>
                    <label>Day & time</label>
                    <input type={"text"} placeholder={"Add Day & Time"}/>
                </div>
                <div className={"form-control"}>
                    <label>Reminder</label>
                    <input type={"boolean"} placeholder={"reminder"}/>
                </div>
            </form>
        </Fragment>
    )
}

export default AddTask