import { React, useState } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import {task} from './array/taskArray'

function App () {

  const [tasks, setTasks] = useState(task)

  function deleteEvent(id){
      console.log("delete", id)
      const deletedItem = tasks.filter((taskItem)=>  taskItem.id !== id  )
      setTasks(deletedItem)
  }

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"}/>
        <Task tasks={tasks} onDelete={deleteEvent}/>
      </div>
    )
}

export default App 