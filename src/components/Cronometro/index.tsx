import React from 'react'
import Botao from '../Button'
import Relogio from './Relogio'

const Cronometro = () => {
  return (
        <div>
            <p>Escolha um card e inicie o cronômetro</p>
            <div>
                <Relogio />
            </div>
            <Botao texto='Iniciar!'/>
        </div>
  )
}

export default Cronometro