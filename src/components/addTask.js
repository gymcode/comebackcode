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
                <div className={"form-control form-control-check"}>
                    <label>Reminder</label>
                    <input type={"checkbox"} />
                </div>

                <input type="submit" className={"btn btn-block"} value="save task "/>
            </form>
        </Fragment>
    )
}

export default AddTask