import './global.css'
import './styles.css'
import { IoMdAdd } from 'react-icons/io'

function App() {
  return (
    <div className="App">
      <div className="todo">
        <header>
          <input type="text" />
          <button>
            <IoMdAdd />
          </button>
        </header>
        <div className="task-container"></div>
      </div>
    </div>
  )
}

export default App
