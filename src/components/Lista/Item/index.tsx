import { Itarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

//entender
interface itemProps extends Itarefa {
  selecionaTarefa:( tarefaSelecionada: Itarefa) => void 
}

                //props
const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa}: itemProps, ) => {
  

  return (
    <li className={`${style.item}  ${selecionado ? style.itemSelecionado : ''}`}  onClick={() => selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    }) }>
        <h3>  
            {tarefa}  
        </h3>
        <span>
            {tempo}
        </span>
    </li>
  )
}

export default Item