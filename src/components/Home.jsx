import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Home.css'
function Home({category}) {
  const [article, setArticle] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=383a65fdb8c748508c6d6c60ba13adc2`
    fetch(url)
      .then(responce => responce.json())
      .then(data => setArticle(data.articles))
  }, [category])
  return (
    <div className='home'>
      <h1 className='heading'>Latest News</h1>
      <div className="home-cards">
        {article.map((news, index) => {
          return <Card key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}
          />
        })}</div>
    </div>
  )
}

export default Home