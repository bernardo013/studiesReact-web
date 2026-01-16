import React, { useEffect, useState } from 'react'
import Botao from '../Button'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/Time'
import { Itarefa } from '../../types/tarefa'

interface cronometroProps {
  selecionado: Itarefa | undefined
}

const Cronometro = ({selecionado}: cronometroProps) => {
  const [tempo, setTempo] = useState<number>()
 

useEffect(() => { 
 if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo))
 }
},[selecionado]) 

  return (
        <div className={style.cronometro}>
            <p>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto='Iniciar!'/>
        </div>
  )
}

export default Cronometro
