import React from 'react'
import './index.scss'

const InputField = (props:any) => {
  return (
    <div>
      <input className={'input'} ref={props.innerRef}defaultValue={0} />
      <br/>
    </div>
  )
}

export default InputField
