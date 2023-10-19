import React from 'react'

export const Image = ({ url, altText }) => {
  return (
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={url} className="d-block w-80" alt={altText} />
    </div>
  )
}
