import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPage } from "../../functions/getPage";

export const Page = () => {
  const { slug } = useParams();
  //console.log(useParams());
  //console.log(slug);

  const [page, setPage] = useState([]);

  useEffect(() => {
    getPage(slug);
  }, [slug]);

  getPage(slug).then((page) => setPage(page));

  //console.log(page);
  return (
    <div className="container my-3 text-white">
      {page.map((page) => (
        <div key={page.id}>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      ))}
    </div>
  );
};
