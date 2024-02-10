import '../css/Tile.css'

export function Tile ({ id, src, name }) {
  const srcName = name + 'icon'

  return (
    <picture className='tile' key={id} id={`${name}_picture`} width='100px' height='100px'>
      <img src={src} alt={srcName} id={`${name}_image`} />
    </picture>
  )
}
