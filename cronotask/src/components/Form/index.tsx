import React, { useState } from 'react';

import Button from '../Button';
import mainStyle from '../../assets/sass/main.module.scss';
import { ITarefa } from '../../types/ITarefa';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({setTasks}: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setTasks(oldTasks => 
        [
          ...oldTasks, 
          { 
            task,
            time,
            selected: false,
            completed: false,
            id: uuidv4()
          }
        ]
      )
      setTask("")
      setTime("");
  }

  return (
    <form className={mainStyle.newTask} onSubmit={submit}>
      <div className={mainStyle.inputs}>
        <div className={mainStyle.inputContainer}>
          <label htmlFor="tarefa">
            Adicione uma nova task
          </label>
          <input 
          type="text" 
          name="tarefa" 
          value={task}
          onChange={event => setTask(event.target.value)}
          id="tarefa" 
          placeholder='Qual task você quer Cronometrar?' 
          required/>
        </div>
        <div className={mainStyle.inputContainer}>          
          <label htmlFor="">
            Tempo
          </label>
          <input 
          type="time" 
          step="1" 
          name="time" 
          value={time}
          onChange={event => setTime(event.target.value)}
          id="time" 
          min="00:00:00" 
          max="02:30:00" 
          required/>
        </div>
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Form;
