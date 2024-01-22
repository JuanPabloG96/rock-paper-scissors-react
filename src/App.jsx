import { useState } from 'react'
import './css/App.css'
import { Score } from './components/Score.jsx'
import { increaseScore, decreaseScore } from './js/utils.js'

export function App () {
  const [actualScore, setActualScore] = useState(0)

  return (
    <>
      <header className='header'>
        <h1 className='title'>rock paper scissors lizard spock</h1>
        <Score actualScore={actualScore} />
      </header>
      <main className='main'>
        <button onClick={() => increaseScore({ actualScore, setActualScore })}>
          Increase
        </button>
        <button onClick={() => decreaseScore({ actualScore, setActualScore })}>
          Decrease
        </button>
      </main>
    </>
  )
}
