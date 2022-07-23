import React, { useState} from 'react';
import Form from '../components/Form';
import List from '../components/List/index';
import mainStyle from '../assets/sass/main.module.scss';
import { Stopwatch } from '../components/Stopwatch';
import { ITarefa } from '../types/ITarefa';

function App() {
  
  const [tasks, setTasks] = useState<ITarefa[]>([]);
  
  const [selected, setSelected] = useState<ITarefa>();
  function selectedTask(taskSelected: ITarefa) {
    setSelected(taskSelected);
    setTasks(beforeTasks => beforeTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function endTasks() {
    if(selected) {
      setSelected(undefined);
        setTasks(beforeTasks => beforeTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;  
      }))
    }
  }

  return (
    <>
      <div className={mainStyle.AppStyle}>      
        <Form setTasks={setTasks}/>
        <List 
          tasks={tasks}
          selectedTask={selectedTask}
        />
        <Stopwatch
          selected={selected}
          endTasks={endTasks}
        />
      </div>
    </>
  );
}

export default App;
