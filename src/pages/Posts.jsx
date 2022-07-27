import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div>
      <h1>These are my posts</h1>
      {posts &&
        posts.map((post, index) => {
          return (
            <div>
              <h3 key={post.id}>{`Title: ${post.title}`}</h3>
              <p>{`Body: ${post.body}`}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
