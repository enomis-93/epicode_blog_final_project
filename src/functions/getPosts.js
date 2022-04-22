export const getPosts = async (category) => {
  const response = await fetch(
    `http://wordpress.test/wp-json/wp/v2/posts${
      category ? `?categories=${category}` : ``
    }`
  );
  const posts = await response.json();
  return posts;
};
