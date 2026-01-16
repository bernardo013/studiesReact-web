import React from 'react'
import style from './Button.module.scss'

type botaoProps = {
  texto: string
  type?: "button" | "submit" | "reset" | undefined
}

function Botao({ texto, type = 'button' }: botaoProps)  {
  return (
    <button type={type} className={style.botao}>
        {texto}
    </button>
  )
}

export default Botao