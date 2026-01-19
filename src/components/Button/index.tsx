import React from 'react'
import style from './Button.module.scss'

type botaoProps = {
  texto: string
  type?: "button" | "submit" | "reset" | undefined
  onclick?: () => void
}

function Botao({ texto, type, onclick }: botaoProps)  {
  return (
    <button onClick={onclick} type={type} className={style.botao}>
        {texto}
    </button>
  )
}

export default Botao