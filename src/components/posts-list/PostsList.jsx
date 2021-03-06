import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../post/Post";

export default function PostList() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, [category]);

  const getPosts = async () => {
    const response = await fetch(
      `http://wordpress.test/wp-json/wp/v2/posts${
        category ? `?categories=${category}` : ``
      }`
    );
    console.log(response);
    const posts = await response.json();
    setPosts(posts);
    setIsLoading(true);
  };
  console.log(posts);

  return isLoading ? (
    <div className="row justify-content-center my-3 mb-5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  ) : (
    <h4 className="text-white m-5 text-center">Loading...</h4>
  );
}
