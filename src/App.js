import { React, useState } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import {task} from './array/taskArray'

function App () {

  const [tasks, setTasks] = useState(task)

  function deleteEvent(id){      
      const deletedItem = tasks.filter((taskItem)=>  taskItem.id !== id  )
      setTasks(deletedItem)
  }

  function toggleReminder(id){
    console.log(id)
    const toggleItem = tasks.map((taskItem)=>{ taskItem.id !== id})
  }

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"}/>
        {
          tasks.length > 0 ?
          <Task tasks={tasks} toggleClass={toggleReminder} onDelete={deleteEvent}/> : <h4>No task avaliable</h4>
        }
      </div>
    )
}

export default App 