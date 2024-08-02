import React from "react";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import "../App.css";
const CardComp = () => {
  const [page, setPages] = useState(0);
  const [News, setNews] = useState([]);
  const [totalRes, setTotalResult] = useState("");
  const [query, setQuery]= useState('');

  useEffect(() => {
      fetchFunc();
  });

  const fetchFunc = async () => {
    let url =
      `https://newsapi.org/v2/everything?q=${query}&domains=wsj.com&apiKey=a98b7852f53247eb9bca35a4098c9029`;
    let resPons = await fetch(url);
    let data = await resPons.json();
    setTotalResult(data.totalResults);
    setNews(data.articles);
    setQuery('')
  };

  return (
    <div>
      <div className="NavBar">
        <span className="logo">NewsMonkey</span>
        <div className="btn-next">
        <button onClick={totalRes>=page?(page+10>=totalRes?null:(()=>{setPages(page+10)}))
                          :null}>Next</button>
        <p className="nav-text">
          <b>{page} of {totalRes}</b>
        </p>
        <button onClick={page>0?(()=>{setPages(page-10)}):null}>Previous</button>
      </div>
        <div className="search-box">
          <input type="search" placeholder="search here..."
                 value={query}
                 onChange={(e)=> setQuery(e.target.value)} />
                 <button onClick={fetchFunc}>Search</button>

        </div>
      </div>
      <div className="container">
        {News.slice(page, page + 10).map((value, index) => {
          return (
            <NewsCard
              key={index}
              title={value.title}
              urlToImage={value.urlToImage}
              description={value.description}
              url={value.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardComp;
