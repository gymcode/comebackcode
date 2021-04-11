import {Fragment, useState} from 'react'

function AddTask(){

    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState()

    function onsubmit(){

    }

    return (
        <Fragment>
            <form className={"add-form"} onSubmit={}> 
                <div className={"form-control"}>
                    <label>Task</label>
                    <input type={"text"} value={text} onChange={ (e) => setText(e.target.value) } placeholder={"Add Task"}/>
                </div>
                <div className={"form-control"}>
                    <label>Day & time</label>
                    <input type={"text"} value={day} onChange={ (e) => setDay(e.target.value) } placeholder={"Add Day & Time"}/>
                </div>
                <div className={"form-control form-control-check"}>
                    <label>Reminder</label>
                    <input type={"checkbox"} value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
                </div>

                <input type="submit" className={"btn btn-block"} value="save task "/>
            </form>
        </Fragment>
    )
}

export default AddTask