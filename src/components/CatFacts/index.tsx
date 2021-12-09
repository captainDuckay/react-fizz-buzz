import React, {  useState } from 'react'
import { getFacts } from './api'

const CatFacts = () => {

  const [quote, setQuote] = useState<string>('')

  const handleBottomClick = () => getFacts().then(result => result.text().then(text => setQuote(text)))

  return (
    <div>
      <h1>Random quote</h1>
      <button onClick={handleBottomClick}>Generate new</button>
      <p>{quote}</p>
    </div>
  )
}

export default CatFacts
