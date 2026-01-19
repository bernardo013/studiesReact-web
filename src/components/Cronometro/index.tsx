import React, { useEffect, useState } from 'react'
import Botao from '../Button'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/Time'
import { Itarefa } from '../../types/tarefa'

interface cronometroProps {
  selecionado: Itarefa | undefined
  finalizarTarefa: () => void
}

const Cronometro = ({selecionado, finalizarTarefa}: cronometroProps) => {
  const [tempo, setTempo] = useState<number>()
 

function regressiva(contador: number = 0) {
  setTimeout(() => {
    if(contador > 0) { setTempo(contador - 1)
      return regressiva(contador - 1)
     }
     finalizarTarefa()
  }, 1000);
}

useEffect(() => { 
 if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo))
 }
},[selecionado]) 

  return (
        <div className={style.cronometro}>
            <p>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onclick={ () => regressiva(tempo) } texto='Iniciar!'/>
        </div>
  )
}

export default Cronometro
