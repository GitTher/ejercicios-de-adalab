import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true, id: '0' },
    { task: 'Hacer croquetas ricas', completed: true, id: '1' },
    { task: 'Ir a la puerta de un gimnasio', completed: false, id: '2' },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false, id: '3' }
  ]);

  const [filterInput, setFilterInput] = useState('');

  const renderTasks = () => {
    return tasks
      .filter(task =>
        task.task.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
      )
      .map(task => (
        task.completed === true ? (
          <li key={task.id} id={task.id} className="done" onClick={handleTask}>{task.task}</li>
        ) : (
          <li key={task.id} id={task.id} onClick={handleTask}>{task.task}</li>
        )
      ));
  }

  const handleTask = (event) => {
    const selectedTask = event.currentTarget.id;
    const foundTask = tasks.find(task => task.id === selectedTask);
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  }

  const handleFilter = (event) => {
    setFilterInput(event.currentTarget.value);
  }

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <form>
        <label htmlFor='filtrar'>
          Filtra por nombre:
          <input type='text' id='filtrar' value={filterInput} onChange={handleFilter}></input>
        </label>
      </form>
      <p>Tareas totales:{tasks.length}</p>
      <p>Tareas completadas:{tasks.filter(task => task.completed === true).length}</p>
      <p>Tareas pendientes:{tasks.filter(task => task.completed === false).length}</p>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
