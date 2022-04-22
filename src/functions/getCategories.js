export const getCategories = async () => {
  const resp = await fetch(`http://wordpress.test/wp-json/wp/v2/categories`);
  const categories = await resp.json();

  return categories;
};
