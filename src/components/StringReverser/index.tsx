import React, { useRef } from 'react'
import Button from '../Button'
import InputField from '../InputField'

const StringReverser = () => {

  const inputFieldRef = useRef<HTMLInputElement>(null)

  const reverseString = (string:string):string => string.split('').reverse().join('')

  const handleButtonPress = () => {
    if(inputFieldRef.current !== null) {
      inputFieldRef.current.value = reverseString(inputFieldRef.current.value)
    }
  }

  return (
    <div className={'space'}>
      <h1>String reverser</h1>
      <InputField innerRef={inputFieldRef} />
      <Button text={'Reverse string'} onClick={handleButtonPress} />
    </div>
  )
}

export default StringReverser
