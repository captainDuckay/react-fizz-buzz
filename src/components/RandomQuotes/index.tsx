import React, {  useState } from 'react'
import { getFacts } from './api'
import Button from '../Button'

const RandomQuotes = () => {

  const [quote, setQuote] = useState<string>('')

  const handleBottomClick = () => getFacts().then(result => result.text().then(text => setQuote(text)))

  return (
    <div className={'space'}>
      <h1>Random quote</h1>
      <Button onClick={handleBottomClick} text={'Hent ny'}/>
      <p>{quote}</p>
    </div>
  )
}

export default RandomQuotes
