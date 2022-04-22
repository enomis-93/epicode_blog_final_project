export const getPage = async (slug) => {
  const resp = await fetch(
    `http://wordpress.test/wp-json/wp/v2/pages${slug ? `/?slug=${slug}` : ""}`
  );
  const pages = await resp.json();

  return pages;
};
