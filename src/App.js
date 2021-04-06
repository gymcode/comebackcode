import { React, Fragment } from "react";

// components import 
import Header from "./components/Header";
import Task from "./components/task"

function App () {
    return (
      <div className={"container"}>
        <Header title={"Task Tracker manager"}/>
        <Task/>
      </div>
    )
}

export default App 