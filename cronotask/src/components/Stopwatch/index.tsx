import Button from '../Button';
import Watch from './Watch';
import mainStyle from '../../assets/sass/main.module.scss';
import { timeToSeconds } from '../../common/utils/timeConversion';
import { ITarefa } from '../../types/ITarefa';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITarefa | undefined,
  endTasks: () => void;
}

export function Stopwatch({ selected, endTasks } : Props) {
  const [timeDecrease, setTimeDecrease] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTimeDecrease(timeToSeconds(selected.time));
    }
  }, [selected])

  function regress(count: number = 0) {
    setTimeout(() => {
        if(count > 0) {
          setTimeDecrease(count-1);
          return regress(count-1);
        }
        endTasks();
      }, 1000);
    }

  return (
    <div className={mainStyle.cronometro}>
      <p className={mainStyle.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={mainStyle.relogioWrapper}>
        <Watch 
          timeDecrease={timeDecrease}
        />
      </div>
        <Button onClick={() => regress(timeDecrease)}>
          Iniciar
        </Button>
    </div>
  )
}