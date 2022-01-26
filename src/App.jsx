import React, { useEffect, useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './App.css'
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programacao',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ])

  useEffect(() => {
    const fetchTask = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
        )
        setTasks(data)
    }
    fetchTask()
  }, [])

  const handleTaskClik = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="conteiner">
        <Header />
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClik={handleTaskClik} handleTaskDeletion={handleTaskDeletion} />
          </>
      </div>
    </Router>
  )
}

export default App