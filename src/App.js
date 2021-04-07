import { React, useState } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"
import {task} from './array/taskArray'

function App () {

  const [tasks, setTasks] = useState(task)

    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"}/>
        <Task tasks={tasks}/>
      </div>
    )
}

export default App 