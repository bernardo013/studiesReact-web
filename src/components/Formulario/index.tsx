import { useState } from 'react'
import Botao from "../Button"
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')

  function salvarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ])

    setTarefa('')
    setTempo('00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={salvarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={event => setTempo(event.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Botao type="submit" texto="Adicionar" />
    </form>
  )
}
