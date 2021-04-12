import { React, useState } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import AddTask from "./components/addTask"
import {task} from './array/taskArray'

function App () {

  const [tasks, setTasks] = useState(task)

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
    const id = Math.random()
    
    const newTask = {id, ...task}
    console.log(newTask)
  }

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"}/>
        <AddTask onAdd={addTaskItem}/>
        {
          tasks.length > 0 ?
          <Task tasks={tasks} toggleClass={toggleReminder}  onDelete={deleteEvent} /> : <h4>No task avaliable</h4>
        }
      </div>
    )
}

export default App 