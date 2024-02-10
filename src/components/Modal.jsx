import '../css/Modal.css'
import { manageModal } from '../js/utils'

export function Modal ({ name, imgSrc, closeIcon, modal }) {
  return (
    <section className='modal'>
      <h2 className='modal-title'>{name}</h2>
      <img src={imgSrc} alt={`${name} image`} />
      <button className='modal-close-icon' onClick={() => { manageModal(modal) }}>
        <img src={closeIcon} alt='close icon' />
      </button>
    </section>
  )
}
