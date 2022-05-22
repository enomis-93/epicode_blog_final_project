import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPage } from "../../functions/getPage";

export const Page = () => {
  const { slug } = useParams();
  //console.log(useParams());
  //console.log(slug);

  const [page, setPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPage(slug)
      .then((page) => setPage(page))
      .then(setIsLoading(true));
  }, [slug]);

  console.log(isLoading);
  return isLoading ? (
    <div className="container my-3 text-white">
      {page.map((page) => (
        <div key={page.id}>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      ))}
    </div>
  ) : (
    <h4 className="text-white text-center m-5">Loading...</h4>
  );
};
