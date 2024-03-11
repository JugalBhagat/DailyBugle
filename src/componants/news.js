
import React, { useState, useEffect } from 'react';
import NewsItem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

let api_key=process.env.REACT_APP_NEWS_API;


const News=(props)=>{

  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);

  const updateNews= async()=>{
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_key}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(50);
    setLoading(true);
    let data = await fetch(url);
    let parse_data = await data.json();
    props.setProgress(80);
    setTotalResults(parse_data.totalResults);
    setArticles(parse_data.articles);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  },[]);
  

  const fetchMoreData = async() => {
    
    console.log("Fetch More called");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_key}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1 );
    let data = await fetch(url);
    let parse_data = await data.json();
    setArticles(articles.concat(parse_data.articles));
    setTotalResults(parse_data.totalResults);

  };
  

    return (
      
      <div className="container my-3">

        <h3 className='mt-5 mb-5 topHeading' >Top Stories - {(props.category).charAt(0).toUpperCase() + (props.category).slice(1).toLowerCase()}</h3>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
          <div className="row">
            {/* {!this.state.Spinner&&this.state.articles.map((element) => { */}
            {articles.map((element) => {
              return <div className="col-md-3 mb-4 " key={element.url} >
                <NewsItem title={element.title ? element.title.slice(0, 80) : ""}
                  description={element.description ? element.description.slice(0, 90) : ""} imgsrc={element.urlToImage ? element.urlToImage : "../img_not.png"} newsUrl={element.url} datetime={element.publishedAt} />
              </div>
            })}
          </div>
          
        </div>

        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handle_PrevPage}> &larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-dark" onClick={this.handle_NextPage}>Next &rarr;</button>
        </div> */}
      </div>
    )
}

export default News

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
