import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetching;
