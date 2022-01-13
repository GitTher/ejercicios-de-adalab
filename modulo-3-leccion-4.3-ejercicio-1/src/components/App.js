import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);

  const [userValue, setUserValue] = useState('');

  const handleUserValue = (event) => {
    setUserValue(event.currentTarget.value);
  }

  const renderTasks = () => {
    for (let index = 0; index < tasks.length; index++) {
      tasks[index].id = index;
    }
    return (
      tasks
        .filter(task => {
          if (userValue !== '') {
            return task.task.includes(userValue);
          } else {
            return task
          }
        })

        .map(task => {
          if (task.completed === true) {
            return <li key={task.id} id={task.id} className="done" onClick={handleTask}>{task.task}</li>;
          } else {
            return <li key={task.id} id={task.id} onClick={handleTask}>{task.task}</li>;
          }
        }))
  }

  const handleTask = (event) => {
    const selectedTask = event.currentTarget.id;
    const foundTask = tasks.find(task => task.id === parseInt(selectedTask));
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  }

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <input value={userValue} type="text" onChange={handleUserValue} />
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
