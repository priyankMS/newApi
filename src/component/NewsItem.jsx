import React from 'react'

function NewsItem({title,description,src,url}) {
 
  return (
    <div>
        <div className="card bg-dark text-light  d-inline-block mb-3  my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description ? description.slice(0,90):"News i"}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default NewsItem