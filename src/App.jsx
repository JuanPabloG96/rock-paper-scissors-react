/* eslint-disable no-unused-vars */
import './css/App.css'
import { useState } from 'react'

import { Score } from './components/Score.jsx'
import { Tile } from './components/Tile.jsx'
import { Modal } from './components/Modal.jsx'

import { increaseScore, decreaseScore, manageModal } from './js/utils.js'
import { tileSources, modal } from './js/constants.js'

export function App () {
  const [actualScore, setActualScore] = useState(0)

  return (
    <>
      <header className='header'>
        <h1 className='title'>rock paper scissors lizard spock</h1>
        <Score actualScore={actualScore} />
      </header>
      <main className='main'>
        <section className='game-field'>
          {
            tileSources.map(tile => {
              return <Tile key={tile.id} src={tile.mediaSrc} name={tile.name} />
            })
          }
        </section>
        <Modal name='rules' imgSrc='images/image-rules-bonus.svg' closeIcon='images/icon-close.svg' modal={modal} />
      </main>
      <footer className='footer'>
        <button className='btn' onClick={() => { manageModal(modal) }}>rules</button>
      </footer>
    </>
  )
}
