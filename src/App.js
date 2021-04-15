import { React, useState, useEffect } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import AddTask from "./components/addTask"
import Footer from "./components/footer";
import About from "./components/About";

function App () {

  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    const getTask = async () =>{
      const taskFromServer = await fetchTask();

      setTasks(taskFromServer)
    }

    getTask()
  }, [])

  async function fetchTask (){
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  async function deleteEvent(id){  
      await fetch(`http://localhost:5000/tasks/${id}`, {
        "method": "DELETE"
      })
    
      const deletedItem = tasks.filter((taskItem)=>  taskItem.id !== id  )
      setTasks(deletedItem)
  }

  async function getSingleTask(id) {
    const getTask = await fetch(`http://localhost:5000/tasks/${id}`)
    const response = await getTask.json()

    return response
  }

  async function toggleReminder(id){

    // fetch tasks
    const taskToToggle = await getSingleTask(id)
    const updateTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    
    // update task
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()
    console.log(data)

    const toggleItem = tasks.map((taskItem)=> taskItem.id === id ? {...taskItem, reminder: !data.reminder} : taskItem)
    setTasks(toggleItem)
    
  }

  async function addTaskItem(task){      
    // creating id
    // const id = Math.floor(Math.random() * 1000) + 1
    
    // const newTask = {id, ...task}

    // setTasks([...tasks, newTask])

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    
  }

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"} showStatus={showForm} onClickBtn={()=>{setShowForm(!showForm)}}/>
        { showForm ? <><AddTask onAdd={addTaskItem}/></> : "" }
        {
          tasks.length > 0 ?
          <Task tasks={tasks} toggleClass={toggleReminder}  onDelete={deleteEvent} /> : <h4>No task avaliable</h4>
        }
        <Footer/>
      </div>
    )
}

export default App 