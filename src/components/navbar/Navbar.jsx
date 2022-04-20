import React from "react";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";

export default function Navbar({
  activeCategory,
  posts,
  setPostsFiltered,
  setActiveCategory,
}) {
  useEffect(() => {
    if (activeCategory === 0) {
      setPostsFiltered(posts);
      return;
    }

    const filtered = posts.filter((post) =>
      post.categories.includes(activeCategory)
    );
    //console.log(filtered);
    setPostsFiltered(filtered);
  }, [activeCategory]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={() => setActiveCategory(0)}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              <Categories setActiveCategory={setActiveCategory} />
            </NavDropdown>
            <li className="nav-item">
              <Link className="nav-link" to="about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
