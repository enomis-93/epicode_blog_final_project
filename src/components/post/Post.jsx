import React from "react";

export default function Post({ post }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title.rendered}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
        <p className="card-text">{post.content.rendered}</p>
      </div>
    </div>
  );
}
