import React  from 'react'

const NewsItem=(props)=>  {
   
    let{title, description,imageUrl, newsUrl,author,date,source}= props;
    return (
      <div>
      <div className="card my-2" >

<div style=

  {{
    display:'flex',
    justifyContent:'flex-end',
position:'absolute',
right:'0'

  }}>
        <span className=" badge rounded-pill bg-danger " >{source}</span>
        </div>
  <img src={!imageUrl?"https://media.istockphoto.com/id/1257153929/photo/indian-rupee-sign-with-stock-market-graph-background.jpg?s=612x612&w=0&k=20&c=0ZdKVka0Z7pwYP6oJOnPm912KFrTdeBlGzb2opATkHo=" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted"></small>By {author? author:"unknown"} on {new Date(date).toGMTString()}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm  btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  } 

 
export default NewsItem
