import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isPlaying ? 'dancing' : ''}`}
        />
      </div>
      <div className="animation-controls">
        <button
          className="dance-button"
          onClick={toggleAnimation}
        >
          {isPlaying ? '⏸️ Stop Dancing' : '🕺 Start Dancing'}
        </button>
      </div>
    </div>
  )
}

export default DancingCat