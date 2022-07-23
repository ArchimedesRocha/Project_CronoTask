
import mainStyle from '../../../assets/sass/main.module.scss';
import { ITarefa } from '../../../types/ITarefa';

interface Props {
  timeDecrease: number | undefined
}

export default function Watch({ timeDecrease = 0 } : Props) {

  const minutesRestore = Math.floor(timeDecrease / 60);
  const secondsRestore = timeDecrease % 60;
  const [minutesTen, minutesUnity] = String(minutesRestore).padStart(2, '0');  
  const [secondsTen, secondsUnity] = String(secondsRestore).padStart(2, '0');
  return(
    <>
    <span className={mainStyle.relogioNumero}>{minutesTen}</span>
    <span className={mainStyle.relogioNumero}>{minutesUnity}</span>
    <span className={mainStyle.relogioDivisao}>:</span>
    <span className={mainStyle.relogioNumero}>{secondsTen}</span>
    <span className={mainStyle.relogioNumero}>{secondsUnity}</span>
    </>
  )
}