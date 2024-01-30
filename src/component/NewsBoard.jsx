import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import { ReactDOM } from 'react';

function NewsBoard({category}) {
   
    const [articles, setArticles] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const apiKey = `import.meta.env.VITE_API_KEY`; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

    console.log(articles);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);

    } catch (error) {
      console.error("Error fetching data:", error);
      setArticles([]);
    }
  };

  fetchData();
}, [category]);

  return (
    <div>
        <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>

    {
        articles.map((data,index)=>{
            return <NewsItem key={index} title={data.title}  description={data.description} src={data.urlToImage} url={data.url} />
        })
    }
        
    </div>
  )
}

export default NewsBoard