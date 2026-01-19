import React from 'react'
import Style from './Relogio.module.scss'

interface Irelogio {
  tempo: number | undefined
}

const Relogio = ({ tempo = 0 }: Irelogio) => {
    const minutos = Math.floor(tempo / 60) 
    const segundos = tempo % 60
    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2 , '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2 , '0')

  return (
<>
    <span className={Style.relogioNumero}>{minutosDezena}</span>
    <span className={Style.relogioNumero}>{minutosUnidade}</span>
    <span className={Style.relogioDivisao}>:</span>
    <span className={Style.relogioNumero}>{segundoDezena}</span>
    <span className={Style.relogioNumero}>{segundoUnidade}</span>
</>
  )
}

export default Relogio