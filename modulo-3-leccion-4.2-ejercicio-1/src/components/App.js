import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true, id: '0' },
    { task: 'Hacer croquetas ricas', completed: true, id: '1' },
    { task: 'Ir a la puerta de un gimnasio', completed: false, id: '2' },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false, id: '3' }
  ]);

  const renderTasks = () => {
    return tasks.map(task => (
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

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
