import React from "react";
import Post from "../post/Post";

export default function PostList(props) {
  return (
    <div className="row justify-content-center">
      {props.postsFiltered.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
