import React from 'react'
import Style from './Relogio.module.scss'

const Relogio = () => {
  return (
<>
    <span className={Style.relogioNumero}>0</span>
    <span className={Style.relogioNumero}>0</span>
    <span className={Style.relogioDivisao}>:</span>
    <span className={Style.relogioNumero}>0</span>
    <span className={Style.relogioNumero}>0</span>
</>
  )
}

export default Relogio