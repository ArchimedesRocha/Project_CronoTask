import mainStyle from '../../assets/sass/main.module.scss';
import { ITarefa } from '../../types/ITarefa';
import ItemList from './Item'

interface Props {
  tasks: ITarefa[],
  selectedTask: (taskSelected: ITarefa) => void;
}



//New form for crate components use function component
function List({ tasks, selectedTask }: Props ) {
  return(
    <aside className={mainStyle.listTask}>
      <h2> Estudos do dia</h2>
      <ul>
        { tasks.map( item => (
          <ItemList
            selectedTask={selectedTask}
            key={item.id}
            {...item}
            />        ))}
      </ul>
    </aside>
  )
}

export default List;