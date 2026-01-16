import React from 'react'
import Botao from "../Button";
import style from './Formulario.module.scss'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<{
        tarefa: string
        tempo: string
    }[]>>
}> {
    state = {
        tarefa: '',
        tempo: '00:00'
    }

    salvarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('state:', this.state)

    }

render() {
  return (
    <form className={style.novaTarefa} onSubmit={this.salvarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicione um estudo
            </label>
            <input type="text" name='tarefa' id='tarefa'
            value={this.state.tarefa}
            onChange={event => { this.setState({ ...this.state, tarefa: event.target.value }) } } //atualiza o estado
            placeholder='O que você quer estudar?' required/>
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input type="time" step="1" name="tempo" value={this.state.tempo} onChange={(event) =>
            { this.setState({...this.state, tempo: event.target.value }) } } //atualiza o estado
             id="tempo" min="00:00:00" max="01:30:00" required/>
        </div>
        <Botao texto='Adicionar'/>
    </form>
    )
  }
}
export default Formulario