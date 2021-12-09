import React, {useState} from 'react'
import { fizzbuzzLogic } from './fizzbuzz'

const FizzBuzz = () => {

  const [count, setCount] = useState(3)

  const incrementCount = () => setCount(count+1)
  const resetCount = () => setCount(1)

  return (
    <div>
      <h1>Fizz buzz</h1>
      <p>{fizzbuzzLogic(count)}</p>
      <button onClick={incrementCount}>Næste</button>
      <button onClick={resetCount}>Forfra</button>
    </div>
  )
}

export default FizzBuzz
