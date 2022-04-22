import React from "react";
import { Link } from "react-router-dom";

function notFound() {
  return (
    <div className="text-center">
      <h1 className="container text-center text-white my-5">
        Error 404. Page Not Found.
      </h1>
      <Link className="btn btn-outline-light p-3" to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default notFound;
