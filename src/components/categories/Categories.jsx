import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(
      "http://wordpress.test/wp-json/wp/v2/categories"
    );
    const categories = await response.json();
    setCategories(categories);
  };
  //console.log(categories);
  return categories.map((category) => (
    <NavDropdown.Item
      key={category.id}
      onClick={() => props.setActiveCategory(category.id)}
    >
      <Link
        className="text-reset text-decoration-none"
        to={`/posts/${category.id}`}
      >
        {category.name}
      </Link>
    </NavDropdown.Item>
  ));
}

export default Categories;
