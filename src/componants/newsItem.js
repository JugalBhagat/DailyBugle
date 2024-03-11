
const newsItem = (props) => {
  let {title,description,imgsrc,newsUrl,datetime}=props;
  return (
    <div>
      <div className="card my-card" >
        <img src={imgsrc} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">{new Date(datetime).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default newsItem
