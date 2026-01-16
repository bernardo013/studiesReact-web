import style from './Lista.module.scss'
import Item from './Item'
import { Itarefa } from '../../types/tarefa'

function Lista({ tarefas }: { tarefas: Itarefa[] }) {
    return(  
        <aside className={style.listaTarefas}>
            <h2>Estudos Do dia</h2>
            <ul>
                {/* SRP */}
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}/>
                ))}
            </ul>
        </aside>
    )
} 

export default Lista