import React from "react";
import { useEffect, useState } from "react";
import Post from "../post/Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://wordpress.test/wp-json/wp/v2/posts");
    const posts = await response.json();
    //console.log(posts);
    setPosts(posts);
  };

  return (
    <div className="row justify-content-center">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
