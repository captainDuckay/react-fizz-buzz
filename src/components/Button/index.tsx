import React, { MouseEventHandler } from 'react'
import './index.scss'

interface IButton {
  text: string
  onClick: MouseEventHandler
}

const Button = (props: IButton) => {
  return (
    <div className={'btn-field btn-dfd'}>
      <a className={'btn'} {...props} >{props.text}</a>
    </div>
  )
}

export default Button
