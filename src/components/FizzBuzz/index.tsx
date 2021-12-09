import React, {useState} from 'react'
import { fizzbuzzLogic } from './fizzbuzz'
import Button from '../Button'

const FizzBuzz = () => {

  const [count, setCount] = useState(3)

  const incrementCount = () => setCount(count+1)
  const resetCount = () => setCount(1)

  return (
    <div className={'space'}>
      <h1>Fizz buzz</h1>
      <p>{fizzbuzzLogic(count)}</p>
      <Button onClick={incrementCount} text={'Næste'}/>
      <Button onClick={resetCount} text={'Forfra'}/>
    </div>
  )
}

export default FizzBuzz
