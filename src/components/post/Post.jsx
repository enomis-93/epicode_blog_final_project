import React from "react";

export default function Post(props) {
  return (
    <div className="card m-3 bg-dark text-white" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5
          className="card-title"
          dangerouslySetInnerHTML={{ __html: props.post.title.rendered }}
        ></h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          dangerouslySetInnerHTML={{ __html: props.post.date }}
        ></h6>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.post.content.rendered }}
        ></p>
      </div>
    </div>
  );
}
