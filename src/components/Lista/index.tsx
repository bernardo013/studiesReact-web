import React from 'react'
import style from '../Lista/Lista.module.scss'
import Item from './Item'

function Lista() {
    const tarefas = [{
        tarefa: 'React', 
        tempo: '02:00:00'
      }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
      }, {
        tarefa: 'C#',
        tempo: '1:30:00'
      }]
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