import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import { useContext } from 'react'
import DataContext from './context/DataProvider'


export default function Home() {
  const {searchResults} = useContext(DataContext)
  return (
    <div className="home">
      {searchResults.map((post) => {
        return (
          <article className="post" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{post.body}</p>
          </article>
        );
      })}
    </div>
  );
}
