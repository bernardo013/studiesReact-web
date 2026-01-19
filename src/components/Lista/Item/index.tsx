import { Itarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

//entender
interface itemProps extends Itarefa {
  selecionaTarefa:( tarefaSelecionada: Itarefa) => void 
}

                //props
const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa}: itemProps) => {
  

  return (
    <li className={`${style.item}  ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado: ''}`}  onClick={() => !completado && selecionaTarefa({
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
        {/* rendização condicional se for true mostra se for false não mostra */}
        {completado && <span className={style.concluido}></span>}
    </li>
  )
}

export default Item