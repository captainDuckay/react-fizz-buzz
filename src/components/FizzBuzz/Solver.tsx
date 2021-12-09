import React, { useRef } from 'react'
import { fizzbuzzLogic } from './fizzbuzz'

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
    <div>
      <h1>Fizz Buzz reverse solver</h1>
      <input ref={inputFieldRef} />
      <button onMouseDown={handleButtonPress}>Løs fizz buzz</button>
    </div>
  )
}

export default Solver
