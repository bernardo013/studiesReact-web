import style from './Lista.module.scss'
import Item from './Item'
import { Itarefa } from '../../types/tarefa'

//entender
interface ListasProps { 
  tarefas: Itarefa[]
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}


function Lista({ tarefas, selecionaTarefa }: ListasProps) {
    return(  
        <aside className={style.listaTarefas}>
            <h2>Estudos Do dia</h2>
            <ul>
                {/* SRP */}
                {tarefas.map((item, index) => (
                    <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}/>
                ))}
            </ul>
        </aside>
    )
} 

export default Lista