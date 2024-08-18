import { DragEvent, FormEvent, useState } from 'react'
import './App.css'

type Task = {
  id: string,
  task: string,
}
// type Tasks = {
//   todo: Task[],
//   inprogress: Task[],
//   done: Task[],
// }

type Tasks = {
  [key: string]: Task[]
}

const App = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('todo');
  const [tasks, setTasks] = useState<Tasks>({ todo: [], inprogress: [], done: [] });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTasks(prev => {
      const updatedTasks = { ...prev }
      updatedTasks[status] = [
        ...updatedTasks[status],
        { id: crypto.randomUUID(), task: task }
      ]
      return updatedTasks;
    })
  }

  function handleDrag(e: DragEvent, id: string, source: string) {
    e.dataTransfer.setData('task', JSON.stringify({ id: id, source: source }));
  }

  function handleDrop(e: DragEvent, destination: string) {
    e.preventDefault();

    const { id, source } = JSON.parse(e.dataTransfer.getData('task')) as { id: string, source: string };
    if (source === destination) {
      return;
    }
    const sourceTasks = Array.from(tasks[source]);
    const destinationTasks = Array.from(tasks[destination]);

    const taskIndex = sourceTasks.findIndex(task => task.id === id);
    const movedTask = sourceTasks.splice(taskIndex, 1);
    destinationTasks.push(movedTask[0]);

    setTasks(prev => (
      {
        ...prev,
        [source]: prev[source].filter(task => task.id !== id ? task : undefined),
        [destination]: destinationTasks
      }
    ))
  }

  return (
    <>
      <div className="input-section">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter Todo'
            onChange={e => setTask(e.target.value)}
          />
          <select
            title='Select status of Todo'
            value={status}
            onChange={e => { console.log(e.target.value); setStatus(e.target.value); }}
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className='flex-wrapper'>
        <div
          key={'todo'}
          className="flex-item todo"
          onDragOver={e => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 'todo')}
        >
          <header className='todo'>Todo</header>
          {
            tasks['todo'].map(task => (
              <div
                key={task.id}
                className="task-wrapper todo"
                draggable
                onDragStart={(e) => handleDrag(e, task.id, 'todo')}
              >
                <div className="">{task.task}</div>
              </div>
            ))
          }
        </div>
        <div
          key={'inprogress'}
          className="flex-item inprogress"
          onDragOver={e => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 'inprogress')}
        >
          <header className='inprogress'>In Progress</header>
          {
            tasks['inprogress'].map(task => (
              <div
                key={task.id}
                className="task-wrapper inprogress"
                draggable
                onDragStart={(e) => handleDrag(e, task.id, 'inprogress')}
              >
                <div className="">{task.task}</div>
              </div>
            ))
          }
        </div>
        <div
          key={'done'}
          className="flex-item done"
          onDragOver={e => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 'done')}
        >
          <header className='done'>Done</header>
          {
            tasks['done'].map(task => (
              <div
                key={task.id}
                className="task-wrapper done"
                draggable
                onDragStart={(e) => handleDrag(e, task.id, 'done')}
              >
                <div className="">{task.task}</div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App