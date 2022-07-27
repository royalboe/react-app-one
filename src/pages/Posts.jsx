import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

    const fetchPosts = async () => {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await posts.json();
        setPosts(data);
      } catch (err) {
        console.log(
          `Sorry, it is not your fault, it is ours\n We got error ${err}.`
        );
      }
    };
    useEffect(() => {
      fetchPosts();
    }, [posts]); // useEffect second parameter is used to track changes in state and rerun

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
