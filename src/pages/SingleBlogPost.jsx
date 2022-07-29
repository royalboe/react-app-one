import React, { useState } from "react";

const [singlePost, setSinglePost] = useState();

const fetchsinglePost = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    response = await posts.json();
    setPosts(response);
  } catch (err) {
    console.log(
      `Sorry, it is not your fault, it is ours\n We got error ${err}.`
    );
  }
};
useEffect(() => {
  fetchingSinglePost();
}, [posts]); // useEffect second parameter is used to track changes in state and rerun

const SingleBlogPost = () => {
  return (
    <section style={title} className="container">
      <h2>PwC Blog Post</h2>
      <div className="postbody">
        <p>fbrenogepmtiotnvbglrgnmlmremr',.fr;lmfdkln fvkjlvn</p>
      </div>
    </section>
  );
};

export default SingleBlogPost;
