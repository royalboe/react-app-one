import React, { useState, useEffect } from "react";

const SingleBlogPost = () => {
  const [singlePost, setSinglePost] = useState();
  const fetchSinglePost = async () => {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      response = await response.json();
      setSinglePost(response);
    } catch (err) {
      console.log(
        `Sorry, it is not your fault, it is ours\n We got error ${err}.`
      );
    }
  };
  useEffect(() => {
    fetchSinglePost();
  }, []); // useEffect second parameter is used to track changes in state and rerun
  return (
    <section className="container">
      <h2>PwC Blog Post</h2>
      <div className="postbody">
        <p></p>
      </div>
    </section>
  );
};

export default SingleBlogPost;
