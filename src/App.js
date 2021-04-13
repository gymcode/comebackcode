import { React, useState } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import AddTask from "./components/addTask"
import {task} from './array/taskArray'

function App () {

  const [tasks, setTasks] = useState(task)
  const [showForm, setShowForm] = useState(false)

  function deleteEvent(id){      
      const deletedItem = tasks.filter((taskItem)=>  taskItem.id !== id  )
      setTasks(deletedItem)
  }

  function toggleReminder(id){
    const toggleItem = tasks.map((taskItem)=> taskItem.id === id ? {...taskItem, reminder: !taskItem.reminder} : taskItem)
    setTasks(toggleItem)
    
  }

  function addTaskItem(task){      
    // creating id
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
    
  }

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"} onClickBtn={()=>{setShowForm(!showForm)}}/>
        {
          tasks.length > 0 ?
          <Task tasks={tasks} toggleClass={toggleReminder}  onDelete={deleteEvent} /> : <h4>No task avaliable</h4>
        }
      </div>
    )
}

export default App 