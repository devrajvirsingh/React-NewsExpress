import React from 'react'
import './Card.css'
function Card({ title, description, src, url }) {
  
  return (
    <div>

      <div className="card">
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description?description.slice(0,120):"Green, in his own words, described Tuesday's flagrant foul 2 and third ejection in 15 games this season as an accident and even chalked it up to as he tried to sell the foul  "}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>

    </div>
  )
}

export default Card