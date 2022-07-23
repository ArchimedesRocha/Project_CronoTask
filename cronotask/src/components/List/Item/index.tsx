import { spawn } from 'child_process';
import mainStyle from '../../../assets/sass/main.module.scss';
import { ITarefa } from '../../../types/ITarefa';

interface Props extends ITarefa {
  selectedTask: (taskSelected: ITarefa) => void;
}

export default function ItemList(
  { 
    task, 
    time, 
    selected, 
    completed, 
    id, 
    selectedTask 
  }: Props) {

  return (
    <li 
      className={`${mainStyle.item} ${selected ? mainStyle.itemSelect : ""} ${completed ? mainStyle.itemComplete : ""}`} 
      onClick={() => !completed && selectedTask(
        {
          task,
          time,
          selected,
          completed,
          id
        }
      )}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    {completed && <span className={mainStyle.done} aria-label="Tarefa Concluída"></span>  }
    </li>
  )
}