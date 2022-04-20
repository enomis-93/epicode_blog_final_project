import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Page = () => {
  const { slug } = useParams();
  //console.log(useParams());
  //console.log(slug);

  const [page, setPage] = useState([]);

  useEffect(() => {
    getPage();
  }, [slug]);

  const getPage = async () => {
    const response = await fetch(
      `http://wordpress.test/wp-json/wp/v2/pages/?slug=${slug}`
    );
    const page = await response.json();
    setPage(page);
  };
  //console.log(page);
  return (
    <div className="container my-3 text-white">
      {page.map((page) => (
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      ))}
    </div>
  );
};
