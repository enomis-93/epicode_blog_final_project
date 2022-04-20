import React from "react";

export default function Post({ post }) {
  return (
    <div className="card m-3 bg-dark text-white" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5
          className="card-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          dangerouslySetInnerHTML={{ __html: post.date }}
        ></h6>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></p>
      </div>
    </div>
  );
}
