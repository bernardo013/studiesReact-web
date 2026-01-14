import React from 'react'
import style from './Button.module.scss'

type botaoProps = {
  texto: string
}

function Botao({ texto }: botaoProps)  {
  return (
    <button className={style.botao}>
        {texto}
    </button>
  )
}

export default Botao