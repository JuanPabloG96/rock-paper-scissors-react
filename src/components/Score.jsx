import '../css/Score.css'

export function Score ({ actualScore }) {
  return (
    <article className='score'>
      <span className='score-label'>score</span>
      <output className='score-value'>{actualScore}</output>
    </article>
  )
}
