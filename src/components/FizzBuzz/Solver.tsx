import React, { useRef } from 'react'
import { fizzbuzzLogic } from './fizzbuzz'
import Button from '../Button'
import InputField from '../InputField'

const Solver = () => {

  const inputFieldRef = useRef<HTMLInputElement>(null)

  const reverseString = (string:string):string => string.split('').reverse().join('')

  const reverseStringDecision = (string:string):string => (Number(string))?string:reverseString(string)

  const handleButtonPress = () => {
    if(inputFieldRef.current !== null) {
      inputFieldRef.current.value = reverseStringDecision(fizzbuzzLogic(+inputFieldRef.current.value))
    }
  }

  return (
    <div className={'space'}>
      <h1>Fizz buzz reverse solver</h1>
      <InputField innerRef={inputFieldRef} />
      <Button text={'Løs fizz buzz'} onClick={handleButtonPress} />
    </div>
  )
}

export default Solver
