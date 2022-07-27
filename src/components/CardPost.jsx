import React from "react";
import { Link } from "react-router-dom";

const CardPost = () => {
  return (
    <div>
      <div style={{ color: "rgb(136, 128, 128)" }}>{post.id}</div>
      <div>{post.title}</div>
      <div className="post-btn">
        <Link className="link" to={`/post/${post.id}`}>
          Post
        </Link>
      </div>
    </div>
  );
};

export default CardPost;
