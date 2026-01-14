import React from 'react'
import Botao from '../Button'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'

const Cronometro = () => {
  return (
        <div className={style.cronometro}>
            <p>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto='Iniciar!'/>
        </div>
  )
}

export default Cronometro