import './global.css'
import './styles.css'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState([])

  function handleCreateTask() {
    if (task === '') {
      // Se tiver vazio vai aparecer mensagem de erro
      // Utilizei o reactTostify
      toast.error('Digite alguma tarefa')
    } else {
      // Adicionar task
      const idRandom = num => Math.floor(Math.random() * num)

      // Coloquei um número aleatório grande no id, para não ter perigo de colisão de id
      const newTask = { id: idRandom(1234565), title: task, isComplete: false }

      setTasks([...tasks, newTask])
      setTask('')
    }
  }

  function handleToggleTaskComplete(id) {
    const taskComplete = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      }

      return task
    })

    setTasks(taskComplete)
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(remove => remove.id !== id))
  }

  return (
    <div className="App">
      <ToastContainer />
      <div className="todo">
        <header>
          {/* Para atualizar o valor do input, utilizamos o onChannge */}
          {/* Vamos pegar o evento e ir atualizando */}
          <input
            type="text"
            value={task}
            onChange={ev => setTask(ev.target.value)}
          />
          <button onClick={handleCreateTask}>
            <IoMdAdd />
          </button>
        </header>

        {tasks.map(task => (
          <div
            key={task.id}
            className={
              task.isComplete ? 'task-container completed' : 'task-container'
            }
          >
            <div className="check-and-title">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  onClick={() => handleToggleTaskComplete(task.id)}
                />

                <span className="checkmark"></span>
              </label>
              <p>{task.title}</p>
            </div>
            <div>
              <MdOutlineClose onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
