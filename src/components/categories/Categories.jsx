import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/getCategories";

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  getCategories().then((categories) => setCategories(categories));

  //console.log(categories);
  return categories.map((category) => (
    <NavDropdown.Item key={category.id}>
      <Link
        className="text-reset text-decoration-none"
        to={`/posts/category/${category.id}`}
      >
        {category.name}
      </Link>
    </NavDropdown.Item>
  ));
}

export default Categories;
