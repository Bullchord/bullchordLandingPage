import React, { useState } from 'react'
import './style.css'

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) =>
          <div
            key={index}
            className={`carousel-image ${
              index === activeIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        )}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div className="carousel-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
